@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  set "PATH=C:\Users\56476\AppData\Local\OpenAI\Codex\runtimes\cua_node\cfb32733c877621e\bin;%PATH%"
)
if not exist "node_modules\vite\bin\vite.js" (
  echo Please install Node.js and run npm install first.
  pause
  exit /b 1
)
echo Open http://127.0.0.1:5173 in your browser.
node node_modules\vite\bin\vite.js --host 127.0.0.1
pause
