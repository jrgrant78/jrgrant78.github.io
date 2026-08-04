const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// API route to scan and return HTML metadata
app.get('/api/files', (req, res) => {
  try {
    const files = fs.readdirSync(__dirname);

    const htmlFiles = files
      .filter(file => (file.endsWith('.html') || file.endsWith('.htm')) && file.toLowerCase() !== 'index.html');

    const fileData = htmlFiles.map(file => {
      const filePath = path.join(__dirname, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Extract <title> or fallback to <h1>, otherwise use filename
      const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
      const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);

      let title = file;
      if (titleMatch && titleMatch[1].trim()) {
        title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
      } else if (h1Match && h1Match[1].trim()) {
        title = h1Match[1].replace(/<[^>]+>/g, '').trim();
      }

      return { file, title };
    });

    res.json(fileData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read directory' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
