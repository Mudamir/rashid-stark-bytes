import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pdfParse from "pdf-parse";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// ES module compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface QueryRequest {
  question: string;
  context?: string;
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Cache for extracted PDF text
let resumeContentCache: string | null = null;

/**
 * Extract text from the PDF resume
 * Handles both local development and Netlify deployment paths
 */
async function extractResumeText(): Promise<string> {
  if (resumeContentCache) {
    return resumeContentCache;
  }

  try {
    // Try multiple possible paths for the PDF
    const possiblePaths = [
      // Netlify deployment path (public folder is copied to dist)
      join(process.cwd(), "dist", "Comon_Rashid-(CV).pdf"),
      // Local development path
      join(process.cwd(), "public", "Comon_Rashid-(CV).pdf"),
      // Alternative Netlify path
      join(process.cwd(), "..", "public", "Comon_Rashid-(CV).pdf"),
      // Netlify function context path
      join(__dirname, "..", "..", "public", "Comon_Rashid-(CV).pdf"),
    ];

    let pdfBuffer: Buffer | null = null;
    let lastError: Error | null = null;

    for (const pdfPath of possiblePaths) {
      try {
        pdfBuffer = readFileSync(pdfPath);
        break; // Success, exit loop
      } catch (err) {
        lastError = err as Error;
        continue; // Try next path
      }
    }

    if (!pdfBuffer) {
      throw lastError || new Error("Could not find PDF file in any expected location");
    }

    const data = await pdfParse(pdfBuffer);
    resumeContentCache = data.text.trim();
    
    // Log success (first few characters to verify)
    console.log(`Successfully extracted PDF text (${resumeContentCache.length} characters)`);
    
    return resumeContentCache;
  } catch (error) {
    console.error("Error extracting PDF text:", error);
    // Fallback to a comprehensive description if PDF extraction fails
    return `Rashid S. Comon - Computer Science student specializing in AI/ML Engineering, UI/UX Design, and Software Engineering. 

Experience:
- UI/UX Designer and Junior AI Engineer at Creative Score (London, UK)
- Backend Developer - AI Engineer at Mapua Malayan Colleges Mindanao
- Student Software Developer at CHED Region XI
- Various freelance positions

Education:
- Senior Computer Science student at Mapúa Malayan Colleges Mindanao
- Specializing in AI/ML Engineering, UI/UX Design, and Software Engineering

Skills: AI/ML Engineering, UI/UX Design, Software Development, Python, React, Java, Django, Figma, and various AI/ML frameworks.`;
  }
}

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // Handle CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { question, context: systemContext } = JSON.parse(
      event.body || "{}"
    ) as QueryRequest;

    if (!question) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    // Check if API key is set
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "GEMINI_API_KEY environment variable is not set",
        }),
      };
    }

    // Extract resume text from PDF
    const resumeContent = await extractResumeText();

    // Get the Gemini model (using gemini-1.5-flash for better performance and cost)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash" // Faster and more cost-effective than gemini-pro
    });

    // Create an optimized prompt with RAG context
    const systemPrompt = systemContext || 
      "You are JARVIS, an AI assistant helping visitors learn about Rashid S. Comon. " +
      "Answer questions based on his resume and portfolio information. " +
      "Be concise (2-3 sentences), professional, and helpful. " +
      "If information is not in the resume, politely say so and suggest checking the portfolio sections.";

    const prompt = `${systemPrompt}

=== RESUME CONTENT ===
${resumeContent}

=== USER QUESTION ===
${question}

=== INSTRUCTIONS ===
Based on the resume content above, provide a clear and accurate answer to the user's question. 
- Be specific and cite relevant details from the resume
- Keep responses concise (2-3 sentences unless more detail is requested)
- If the information isn't in the resume, politely indicate that and suggest relevant portfolio sections to check
- Maintain a professional and friendly tone`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer,
      }),
    };
  } catch (error) {
    console.error("RAG query error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error",
      }),
    };
  }
};

