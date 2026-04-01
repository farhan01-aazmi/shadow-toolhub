const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app', 'tools');

const replacements = [
  {
    search: /className="container" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '70vh' }}/g,
    replace: `className="container px-5 py-16 max-w-4xl mx-auto min-h-[70vh]"`
  },
  {
    search: /style={{ marginBottom: '30px' }}/g,
    replace: `className="mb-8"`
  },
  {
    search: /style={{ color: 'var\\(--sub\\)', fontSize: '0.9rem' }}/g,
    replace: `className="text-sub text-sm"`
  },
  {
    search: /style={{ fontSize: '2\.5rem', marginBottom: '10px', color: 'var\\(--amber\\)' }}/g,
    replace: `className="text-4xl mb-3 text-amber-500 font-bold"`
  },
  {
    search: /style={{ color: 'var\\(--text-secondary\\)', fontSize: '1\.1rem', marginBottom: '40px' }}/g,
    replace: `className="text-sub text-lg mb-10"`
  },
  {
    search: /style={{ padding: '40px', textAlign: 'center', margin: '40px 0' }}/g,
    replace: `className="card glass p-10 text-center my-10"`
  },
  {
    search: /style={{ fontSize: '3rem', marginBottom: '20px' }}/g,
    replace: `className="text-5xl mb-5"`
  },
  {
    search: /style={{ color: 'var\\(--sub\\)' }}/g,
    replace: `className="text-sub"`
  },
  {
    search: /style={{ marginTop: '60px' }}/g,
    replace: `className="mt-16"`
  },
  {
    search: /style={{ marginBottom: '20px' }}/g,
    replace: `className="mb-5"`
  },
  {
    search: /style={{ paddingLeft: '20px', color: 'var\\(--sub\\)' }}/g,
    replace: `className="pl-5 text-sub list-decimal space-y-3"`
  },
  {
    search: /style={{ marginBottom: '10px' }}/g,
    replace: `className="mb-3"`
  }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(rule => {
    content = content.replace(rule.search, rule.replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed inline CSS in: ${path.basename(path.dirname(filePath))}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

processDirectory(targetDir);
console.log('🎉 Done! All inline CSS replaced with Tailwind.');
