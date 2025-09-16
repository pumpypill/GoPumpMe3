import fs from 'node:fs';
import path from 'node:path';

try {
  const src = path.resolve('./public/404.html');
  const destDir = path.resolve('./dist');
  const dest = path.join(destDir, '404.html');

  if (fs.existsSync(src)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log('404.html copied to dist successfully');
  } else {
    console.log('public/404.html not found, skipping');
  }
} catch (err) {
  console.error('Error copying 404.html:', err);
}
