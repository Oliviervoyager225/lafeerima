@echo off
setlocal enabledelayedexpansion

REM Colors for output
set YELLOW=[33m
set GREEN=[32m
set RED=[31m
set NC=[0m

echo.
echo ========================================
echo Lafeerima Setup
echo ========================================
echo.

REM Check Docker
docker --version >nul 2>&1
if errorlevel 1 (
    echo Docker is not installed
    exit /b 1
)

REM Check Docker Compose
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo Docker Compose is not installed
    exit /b 1
)

echo Docker and Docker Compose are installed
echo.

REM Create .env if not exists
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo .env file created
    echo.
) else (
    echo .env file already exists
    echo.
)

REM Build and run Docker containers
echo Building and starting services...
docker-compose up -d --build

REM Wait for services
echo.
echo Waiting for services to be ready...
timeout /t 10 /nobreak

REM Check health
echo.
echo Checking services...

REM Check Backend
for /f %%i in ('curl -s -o /dev/null -w "%%{http_code}" http://localhost:8080/api/health') do set HTTP_CODE=%%i
if "%HTTP_CODE%"=="200" (
    echo Backend is running on http://localhost:8080
) else (
    echo Backend health check failed
)

REM Check Frontend
for /f %%i in ('curl -s -o /dev/null -w "%%{http_code}" http://localhost:3000') do set HTTP_CODE=%%i
if "%HTTP_CODE%"=="200" (
    echo Frontend is running on http://localhost:3000
) else (
    echo Frontend might still be building...
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.

echo Applications are available at:
echo   Frontend:  http://localhost:3000
echo   Backend:   http://localhost:8080
echo   API Docs:  http://localhost:8080/api/health
echo.

echo Useful commands:
echo   View logs:        docker-compose logs -f
echo   Stop services:    docker-compose down
echo   Restart:          docker-compose restart
echo   DB access:        docker-compose exec postgres psql -U postgres -d lafeerima_db
echo.

endlocal
