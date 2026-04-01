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
            let newContent = content
                .replace(/shadow\.tools/g, 'nevy.in');
                
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Reverted URL in ${fullPath}`);
            }
        }
    }
}

// Process src folder
processDir(path.join(__dirname, '../src'));

// Process vercel.json
const vercelPath = path.join(__dirname, '../vercel.json');
if (fs.existsSync(vercelPath)) {
    let vContent = fs.readFileSync(vercelPath, 'utf8');
    let vNewContent = vContent.replace(/shadow\.tools/g, 'nevy.in');
    if (vContent !== vNewContent) {
        fs.writeFileSync(vercelPath, vNewContent);
        console.log(`Reverted URL in vercel.json`);
    }
}
