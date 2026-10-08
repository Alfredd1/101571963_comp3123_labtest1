import fs from 'node:fs';
import path from 'node:path'
import process from 'node:process'

const dirName = "Logs"

function create(){
    try {
        if (!fs.existsSync(dirName)){
            fs.mkdirSync(dirName);
        }
        for (let i=0;i<10;i++){
            let targetPath = path.join(dirName,"logs"+i);
            fs.writeFile(targetPath, JSON.stringify("some data in log" + i), 'utf8', (err) => {
                if (err){
                    console.log(err);
                } else {
                    console.log("File created at .\\" + targetPath);
                }
            })
        }
    } catch(err){
        console.error(err)
    }
}

function remove() {
    try {
        if (fs.existsSync("./Logs")){
            let filesInLogs = fs.readdirSync("./Logs", { withFileTypes: true })

            filesInLogs.forEach(file => {
                const fullPath = path.join("./", dirName, file.name);
                console.log("deleting: ", file.name)
                fs.unlinkSync(fullPath);
            })

        }
        fs.rmdirSync("./Logs")
    } catch(err){
        console.error(err)
    }


}

create()
setTimeout(remove, 500)