const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static HTML files from this directory
app.use(express.static(__dirname));

// Backend API endpoint: Reads disk, scans .html files, extracts <title> tags
app.get('/api/files', (req, res) => {
  try {
    const files = fs.readdirSync(__dirname)
      .filter(file => file.endsWith('.html'));

    const fileData = files.map(file => {
      const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
      const titleMatch = content.match(/<title>(.*?)<\/title>/i);
      return {
        file,
        title: titleMatch ? titleMatch[1].trim() : file
      };
    });

    res.json(fileData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read directory' });
  }
});

// Serve frontend layout directly from memory
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Directory Dashboard</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-hover: #334155;
      --accent: #38bdf8;
      --accent-gradient: linear-gradient(135deg, #38bdf8, #818cf8);
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: #334155;
      --radius: 12px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 2rem;
    }

    .container { max-width: 1200px; margin: 0 auto; }

    header {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (min-width: 640px) {
      header { flex-direction: row; align-items: center; justify-content: space-between; }
    }

    h1 {
      font-size: 2rem;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .search-bar input {
      width: 100%;
      max-width: 320px;
      padding: 0.75rem 1rem;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
    }

    .search-bar input:focus { border-color: var(--accent); }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.2s, background-color 0.2s, border-color 0.2s;
    }

    .card:hover {
      transform: translateY(-3px);
      background: var(--card-hover);
      border-color: var(--accent);
    }

    .card-icon {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background: var(--accent-gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .card-title {
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.25rem;
    }

    .card-path { font-size: 0.8rem; color: var(--text-muted); }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <h1>Project Dashboard</h1>
        <p id="file-count" style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">Scanning...</p>
      </div>
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search pages..." />
      </div>
    </header>

    <main id="grid" class="grid"></main>
  </div>

  <script>
    async function loadDashboard() {
      const res = await fetch('/api/files');
      const files = await res.json();
      const grid = document.getElementById('grid');
      
      document.getElementById('file-count').textContent = \`Found \${files.length} page\${files.length === 1 ? '' : 's'}\`;

      if (files.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-muted);">No HTML files found in this directory.</p>';
        return;
      }

      grid.innerHTML = files.map(f => \`
        <a href="\${f.file}" class="card" data-search="\${(f.title + ' ' + f.file).toLowerCase()}">
          <div class="card-icon">📄</div>
          <div style="overflow: hidden; flex-grow: 1;">
            <div class="card-title">\${escapeHtml(f.title)}</div>
            <div class="card-path">\${escapeHtml(f.file)}</div>
          </div>
          <div style="color: var(--text-muted);">→</div>
        </a>
      \`).join('');
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    document.getElementById('search-input').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.card').forEach(card => {
        card.style.display = card.dataset.search.includes(term) ? 'flex' : 'none';
      });
    });

    loadDashboard();
  </script>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
