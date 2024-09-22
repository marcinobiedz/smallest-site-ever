const fs = require('fs');
const path = require('path');

const importRegex = /(import\s+.*?from\s+['"])(\.\/.*?)(?<!\.js)(['"])/g;

function addJsExtensionToImport(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')

    const updatedContent = content.replace(importRegex, '\$1\$2.js\$3');

    if(content !== updatedContent){
        fs.writeFileSync(filePath, updatedContent, 'utf8')
        console.log(`Updated impots in: ${filePath}`)
    }
}

function processDirectory(dir){
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if(stat.isDirectory()){
            return processDirectory(fullPath)
        }
        addJsExtensionToImport(fullPath)
    })
}

const distDir = path.join(__dirname, 'public/dist')
processDirectory(distDir)