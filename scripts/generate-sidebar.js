const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '../docs');
const sidebarPath = path.join(__dirname, '../.vitepress/sidebar.mjs');

function generateSidebar() {
  const sidebar = {};

  function walkDir(currentPath, parentPath = '') {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      const relativePath = path.join(parentPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath, relativePath);
      } else if (file.endsWith('.md')) {
        const dir = path.dirname(relativePath).replace(/\\/g, '/');
        const text = path.basename(file, '.md');
        const link = `/${relativePath.replace(/\\/g, '/').replace('.md', '')}`;

        if (!sidebar[dir]) {
          sidebar[dir] = [];
        }

        sidebar[dir].push({ text, link });
      }
    });
  }

  walkDir(docsPath);

  const sidebarContent = `export default ${JSON.stringify(sidebar, null, 2)};`;
  
  // Ensure the .vitepress directory exists
  if (!fs.existsSync(path.dirname(sidebarPath))) {
    fs.mkdirSync(path.dirname(sidebarPath), { recursive: true });
  }

  fs.writeFileSync(sidebarPath, sidebarContent);
}

generateSidebar();
console.log('Sidebar generated successfully.');