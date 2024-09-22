const chokidar = require('chokidar')
const { exec } = require('child_process')
const path = require('path')

const distDir = path.join(__dirname, 'public/dist');

chokidar.watch(distDir, { persistent: true })
    .on("change", (filePath) => {
        console.log(`File changed: ${filePath}`);
        exec('node add-js-extension.js', (error, stdout, stderr)=>{
            if(error){
                return console.error(`Error: ${error.message}`)
            }
            if(stderr){
                return console.error(`Stderr: ${stderr}`)
            }
            return console.log(`Strout: ${stdout}`)
        })
    })