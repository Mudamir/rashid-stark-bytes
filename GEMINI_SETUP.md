# Gemini RAG Setup - Quick Guide

This project uses Google's Gemini API for the RAG (Retrieval-Augmented Generation) chatbot.

## Your API Key

Your Gemini API key has been configured:
```
GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
```

## Setup Instructions

### For Local Development

1. **Create a `.env` file** in the project root (if it doesn't exist):
   ```env
   GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
   VITE_RAG_API_URL=/api/rag/query
   ```

2. **Install Netlify CLI** (for local testing):
   ```bash
   npm install -g netlify-cli
   ```

3. **Run locally:**
   ```bash
   netlify dev
   ```

### For Netlify Deployment

1. **Set Environment Variable in Netlify:**
   - Go to your Netlify dashboard
   - Navigate to: Site settings → Environment variables
   - Add a new variable:
     - Key: `GEMINI_API_KEY`
     - Value: `AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg`

2. **Deploy:**
   - Push your code to GitHub
   - Netlify will automatically deploy
   - The RAG function will be available at `/api/rag/query`

## How It Works

1. The frontend calls `/api/rag/query` with a question
2. The Netlify function (`netlify/functions/rag-query.ts`):
   - Extracts text from `public/Comon_Rashid-(CV).pdf`
   - Sends the question and resume content to Gemini
   - Returns the AI-generated answer

## Testing

1. Start your development server: `npm run dev`
2. Open the chatbot in your portfolio
3. Ask questions like:
   - "What is Rashid's experience?"
   - "What skills does Rashid have?"
   - "Tell me about Rashid's education"

## Troubleshooting

### Error: "GEMINI_API_KEY environment variable is not set"
- Make sure you've created a `.env` file for local development
- For Netlify, ensure the environment variable is set in the dashboard

### Error: "Error extracting PDF text"
- Make sure `public/Comon_Rashid-(CV).pdf` exists
- Check that the PDF file is not corrupted

### Function not found
- Make sure you're running `netlify dev` for local testing
- For production, ensure the function is deployed correctly

## Security Note

⚠️ **Important:** Never commit your `.env` file to Git. It's already in `.gitignore`.

For production, always use environment variables in your hosting platform's dashboard.

