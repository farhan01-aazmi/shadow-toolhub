const fs = require('fs');
const path = require('path');

function processDir(dir) {
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
                .replace(/Tech Resolutions/g, 'Shadow')
                .replace(/nevy\.in/g, 'shadow.tools')
                .replace(/https:\/\/www\.nevy\.in/g, 'https://www.shadow.tools')
                .replace(/support@nevy\.in/g, 'support@shadow.tools')
                .replace(/70\+ free online tools/gi, '150+ free online tools')
                .replace(/70\+ Free Online Tools/gi, '150+ Free Online Tools')
                .replace(/70\+ free tools/gi, '150+ free tools');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, '../src'));
processDir(path.join(__dirname, '../app')) || true; // ignore error if it doesn't exist
