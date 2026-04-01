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
                .replace(/Shadow/g, 'Tech Resolutions')
                .replace(/shadow\.tools/g, 'nevy.in')
                .replace(/150\+ free online tools/gi, '70+ free online tools')
                .replace(/150\+ Free Online Tools/gi, '70+ Free Online Tools')
                .replace(/150\+ free tools/gi, '70+ free tools');
                
            // Handle specific Navbar/Footer logo variations we made
            newContent = newContent.replace(/<span className="logo-word">Tech Resolutions<\/span>/g, '<span className="logo-word">Tech <em>Resolutions</em></span>');
                
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Reverted all branding in: ${fullPath}`);
            }
        }
    }
}

// Process src folder
console.log("Starting revert...");
processDir(path.join(__dirname, '../src'));

// Process vercel.json
const vercelPath = path.join(__dirname, '../vercel.json');
if (fs.existsSync(vercelPath)) {
    let vContent = fs.readFileSync(vercelPath, 'utf8');
    let vNewContent = vContent
        .replace(/Shadow/g, 'Tech Resolutions')
        .replace(/shadow\.tools/g, 'nevy.in');
    if (vContent !== vNewContent) {
        fs.writeFileSync(vercelPath, vNewContent);
        console.log(`Reverted vercel.json`);
    }
}
console.log("Done!");
