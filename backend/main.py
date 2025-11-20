"""
FastAPI Backend for RAG Chatbot using Gemini API
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
import google.generativeai as genai
import PyPDF2
from pathlib import Path
import logging
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="RAG Chatbot API",
    description="RAG API using Google Gemini for portfolio chatbot",
    version="1.0.0"
)

# CORS middleware - allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",  # Your frontend port
        "http://localhost:5173",  # Vite default dev server
        "http://localhost:3000",  # Alternative port
        "http://127.0.0.1:8080",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
        # Add your production domain here
        # "https://yourdomain.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    logger.warning("GEMINI_API_KEY not found in environment variables")
else:
    genai.configure(api_key=GEMINI_API_KEY)

# Cache for extracted PDF text
resume_content_cache: Optional[str] = None


class QueryRequest(BaseModel):
    question: str
    context: Optional[str] = None


class QueryResponse(BaseModel):
    answer: str
    sources: Optional[list[str]] = None
    confidence: Optional[float] = None


def extract_resume_text() -> str:
    """
    Extract text from the PDF resume.
    Caches the result for performance.
    """
    global resume_content_cache
    
    if resume_content_cache:
        return resume_content_cache
    
    # Try multiple possible paths for the PDF
    base_path = Path(__file__).parent.parent  # Go up from backend/ to project root
    possible_paths = [
        base_path / "public" / "Comon_Rashid-(CV).pdf",
        base_path / "dist" / "Comon_Rashid-(CV).pdf",
        Path("public") / "Comon_Rashid-(CV).pdf",
        Path("dist") / "Comon_Rashid-(CV).pdf",
    ]
    
    for pdf_path in possible_paths:
        if pdf_path.exists():
            try:
                logger.info(f"Extracting text from: {pdf_path}")
                with open(pdf_path, "rb") as file:
                    pdf_reader = PyPDF2.PdfReader(file)
                    text = ""
                    for page in pdf_reader.pages:
                        text += page.extract_text() + "\n"
                    
                    resume_content_cache = text.strip()
                    logger.info(f"Successfully extracted {len(resume_content_cache)} characters from PDF")
                    return resume_content_cache
            except Exception as e:
                logger.error(f"Error reading PDF from {pdf_path}: {e}")
                continue
    
    # Fallback content if PDF extraction fails
    logger.warning("Could not extract PDF text, using fallback content")
    fallback = """Rashid S. Comon - Computer Science student specializing in AI/ML Engineering, UI/UX Design, and Software Engineering.

Experience:
- UI/UX Designer and Junior AI Engineer at Creative Score (London, UK)
- Backend Developer - AI Engineer at Mapua Malayan Colleges Mindanao
- Student Software Developer at CHED Region XI
- Various freelance positions

Education:
- Senior Computer Science student at Mapúa Malayan Colleges Mindanao
- Specializing in AI/ML Engineering, UI/UX Design, and Software Engineering

Skills: AI/ML Engineering, UI/UX Design, Software Development, Python, React, Java, Django, Figma, and various AI/ML frameworks."""
    
    resume_content_cache = fallback
    return resume_content_cache


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "RAG Chatbot API is running",
        "status": "healthy",
        "gemini_configured": GEMINI_API_KEY is not None
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.post("/api/rag/query", response_model=QueryResponse)
async def query_rag(request: QueryRequest):
    """
    Query the RAG system with a user question.
    Uses Gemini API to generate answers based on the resume content.
    """
    if not GEMINI_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY environment variable is not set"
        )
    
    if not request.question or not request.question.strip():
        raise HTTPException(
            status_code=400,
            detail="Question is required"
        )
    
    try:
        # Extract resume text from PDF
        resume_content = extract_resume_text()
        
        # Get the Gemini model (using gemini-1.5-flash for better performance)
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        # Create the system prompt
        system_prompt = request.context or (
            "You are JARVIS, an AI assistant helping visitors learn about Rashid S. Comon. "
            "Answer questions based on his resume and portfolio information. "
            "Be concise (2-3 sentences), professional, and helpful. "
            "If information is not in the resume, politely say so and suggest checking the portfolio sections."
        )
        
        # Create the full prompt with RAG context
        prompt = f"""{system_prompt}

=== RESUME CONTENT ===
{resume_content}

=== USER QUESTION ===
{request.question}

=== INSTRUCTIONS ===
Based on the resume content above, provide a clear and accurate answer to the user's question.
- Be specific and cite relevant details from the resume
- Keep responses concise (2-3 sentences unless more detail is requested)
- If the information isn't in the resume, politely indicate that and suggest relevant portfolio sections to check
- Maintain a professional and friendly tone"""
        
        # Generate response using Gemini
        logger.info(f"Generating response for question: {request.question[:50]}...")
        response = model.generate_content(prompt)
        answer = response.text.strip()
        
        logger.info(f"Generated answer ({len(answer)} characters)")
        
        return QueryResponse(
            answer=answer,
            sources=["Comon_Rashid-(CV).pdf"],
            confidence=0.9  # High confidence when using full resume context
        )
        
    except Exception as e:
        logger.error(f"Error in RAG query: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Error processing query: {str(e)}"
        )


@app.post("/api/rag/init")
async def init_rag():
    """
    Initialize the RAG system by extracting and caching the PDF content.
    This endpoint can be called to pre-load the resume content.
    """
    try:
        resume_content = extract_resume_text()
        return {
            "status": "success",
            "message": "RAG system initialized",
            "content_length": len(resume_content)
        }
    except Exception as e:
        logger.error(f"Error initializing RAG: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Error initializing RAG: {str(e)}"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

