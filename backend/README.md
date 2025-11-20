# FastAPI RAG Backend

FastAPI backend for the RAG chatbot using Google's Gemini API.

## Setup

### 1. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

Or using a virtual environment (recommended):

```bash
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

### 2. Set Environment Variables

Create a `.env` file in the `backend` directory:

```env
GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
```

Or export it in your shell:

```bash
export GEMINI_API_KEY=AIzaSyC5MCB0M-5XcNobLBD94oCG-JKAyPx2Zrg
```

### 3. Run the Server

```bash
cd backend
python main.py
```

Or using uvicorn directly:

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Health Check
- `GET /` - Root endpoint with API status
- `GET /health` - Health check endpoint

### RAG Endpoints
- `POST /api/rag/query` - Query the RAG system
  - Request body: `{"question": "What is Rashid's experience?", "context": "optional system context"}`
  - Response: `{"answer": "...", "sources": [...], "confidence": 0.9}`

- `POST /api/rag/init` - Initialize RAG system (pre-load PDF)

## Testing

Test the API using curl:

```bash
curl -X POST "http://localhost:8000/api/rag/query" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Rashid\'s experience?"}'
```

Or use the interactive API docs at `http://localhost:8000/docs`

## Deployment

### Local Development
The server runs on `http://localhost:8000` by default.

### Production
For production deployment, consider:
- Using a process manager like `gunicorn` or `supervisor`
- Setting up reverse proxy with nginx
- Using Docker for containerization
- Deploying to cloud platforms (AWS, GCP, Azure, Railway, Render, etc.)

Example with gunicorn:
```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## Troubleshooting

### PDF Not Found
- Ensure `public/Comon_Rashid-(CV).pdf` exists in the project root
- Check file permissions

### Gemini API Key Error
- Verify `GEMINI_API_KEY` is set correctly
- Check that the API key is valid and has proper permissions

### CORS Issues
- Update `allow_origins` in `main.py` to include your frontend URL
- For production, replace `"*"` with specific allowed origins

