@echo off
REM FastAPI RAG Backend Startup Script for Windows

echo 🚀 Starting FastAPI RAG Backend...

REM Check if virtual environment exists
if not exist "venv" (
    echo 📦 Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo 🔌 Activating virtual environment...
call venv\Scripts\activate.bat

REM Install dependencies if needed
if not exist "venv\.installed" (
    echo 📥 Installing dependencies...
    pip install -r requirements.txt
    type nul > venv\.installed
)

REM Check for .env file
if not exist ".env" (
    echo ⚠️  Warning: .env file not found!
    echo Please create a .env file with your GEMINI_API_KEY
    pause
    exit /b 1
)

REM Start the server
echo ✅ Starting FastAPI server on http://localhost:8000
echo 📚 API docs available at http://localhost:8000/docs
python main.py

pause

