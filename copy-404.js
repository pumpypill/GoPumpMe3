const fs = require('fs');
const path = require('path');

try {
  if (fs.existsSync('./404.html')) {
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist', { recursive: true });
    }
    fs.copyFileSync('./404.html', './dist/404.html');
    console.log('404.html copied successfully');
  } else {
    console.log('404.html not found, skipping');
  }
} catch (err) {
  console.error('Error copying file:', err);
}
console.log('404.html copied to dist folder successfully');
