# FastAPI RAG Backend Setup Guide

This guide explains how to set up and run the FastAPI backend for the RAG chatbot using Google's Gemini API.

## Prerequisites

- Python 3.9 or higher
- Gemini API key (get it from [Google AI Studio](https://makersuite.google.com/app/apikey))
- Your API key: `AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg`

## Quick Start

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

**Or using a virtual environment (recommended):**

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Set Environment Variable

Create a `.env` file in the `backend` directory:

```env
GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
```

**Or export it in your terminal:**

```bash
# Windows (PowerShell)
$env:GEMINI_API_KEY="AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg"

# Windows (CMD)
set GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg

# macOS/Linux
export GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
```

### 3. Run the Server

```bash
cd backend
python main.py
```

The API will start at `http://localhost:8000`

You can also use uvicorn directly:

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Test the API

Open your browser and visit:
- API Docs: `http://localhost:8000/docs` (Interactive Swagger UI)
- Alternative Docs: `http://localhost:8000/redoc`
- Health Check: `http://localhost:8000/health`

Test with curl:

```bash
curl -X POST "http://localhost:8000/api/rag/query" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Rashid'\''s experience?"}'
```

### 5. Run the Frontend

In a separate terminal:

```bash
npm run dev
```

The frontend will connect to the FastAPI backend automatically.

## API Endpoints

### Health Check
- `GET /` - Root endpoint with API status
- `GET /health` - Health check

### RAG Endpoints
- `POST /api/rag/query` - Query the RAG system
  ```json
  {
    "question": "What is Rashid's experience?",
    "context": "optional system context"
  }
  ```
  
  Response:
  ```json
  {
    "answer": "...",
    "sources": ["Comon_Rashid-(CV).pdf"],
    "confidence": 0.9
  }
  ```

- `POST /api/rag/init` - Initialize RAG system (pre-load PDF)

## Project Structure

```
backend/
├── main.py              # FastAPI application
├── requirements.txt     # Python dependencies
├── README.md           # Backend documentation
└── .env                # Environment variables (create this)
```

## Configuration

### CORS Settings

The backend is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative port)

To add your production domain, edit `backend/main.py`:

```python
allow_origins=[
    "http://localhost:5173",
    "https://yourdomain.com",  # Add your domain here
],
```

### PDF Path

The backend looks for the PDF at:
- `public/Comon_Rashid-(CV).pdf` (relative to project root)

Make sure the PDF file exists in the `public` directory.

## Troubleshooting

### "GEMINI_API_KEY not found"
- Make sure you've set the environment variable
- Check that `.env` file is in the `backend` directory
- Verify the API key is correct

### "PDF not found"
- Ensure `public/Comon_Rashid-(CV).pdf` exists
- Check file permissions
- Verify the path is correct relative to the project root

### CORS Errors
- Update `allow_origins` in `main.py` to include your frontend URL
- Make sure the backend is running on the correct port

### Port Already in Use
- Change the port in `main.py`: `uvicorn.run(app, host="0.0.0.0", port=8001)`
- Or kill the process using port 8000

### Module Not Found
- Make sure you're in the virtual environment
- Run `pip install -r requirements.txt` again

## Production Deployment

### Option 1: Railway / Render / Fly.io

1. Push your code to GitHub
2. Connect your repository to the platform
3. Set `GEMINI_API_KEY` as an environment variable
4. Set build command: `cd backend && pip install -r requirements.txt`
5. Set start command: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`

### Option 2: Docker

Create `backend/Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t rag-backend ./backend
docker run -p 8000:8000 -e GEMINI_API_KEY=your_key rag-backend
```

### Option 3: Traditional Server

Use a process manager like `gunicorn`:

```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## Frontend Configuration

Update your frontend `.env` file to point to your production backend:

```env
VITE_RAG_API_URL=https://your-backend-url.com/api/rag/query
```

For local development, the default `http://localhost:8000/api/rag/query` will be used automatically.

## Next Steps

1. ✅ Backend is set up and running
2. ✅ Frontend is configured to use FastAPI
3. ✅ Test the chatbot in your portfolio
4. Deploy to production when ready

Enjoy your RAG-powered chatbot! 🚀

