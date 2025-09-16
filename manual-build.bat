@echo off
echo Starting build process...
npx vite build
echo Copying 404.html to dist...
copy 404.html dist\404.html
echo Build complete!
pause
