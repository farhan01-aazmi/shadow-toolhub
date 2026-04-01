const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (fullPath.includes('node_modules') || fullPath.includes('.next') || fullPath.includes('.git')) continue;
            processDir(fullPath);
        } else {
            if (!fullPath.match(/\.(ts|tsx|json|js|css)$/)) continue;
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/70\+/g, '150+');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, '../src'));
