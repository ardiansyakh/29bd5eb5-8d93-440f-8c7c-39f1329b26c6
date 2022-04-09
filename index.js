
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const ROOT = path.resolve('.');
const main = (route) => {
    return new Promise((resolve, reject) => {
        fs.access(route, (err) => {
            if(err) {
                reject({ message: 'Invalid Path' })
            }
            else{
                const res = fs.lstatSync(route);
                const files = []
                if(res.isFile()) {
                    files.push({
                        fileName: path.basename(route),
                        filePath: path.dirname(route).replace(ROOT, "")+ "/" + path.basename(route),
                        size: res.size,
                        isDirectory: res.isDirectory(),
                        createdAt: moment(res.birthtime).format('DD-MM-YYYY')
                    })
                }
                else {
                    const dir = fs.readdirSync(route)
                    dir.forEach(file => {
                        const fileStats = fs.lstatSync(route+"/"+file);
                        files.push({
                            fileName: path.basename(route+"/"+file),
                            filePath: path.dirname(route+"/"+file).replace(ROOT, "")+ "/" + path.basename(route+"/"+file),
                            size: fileStats.size,
                            isDirectory: fileStats.isDirectory(),
                            createdAt: moment(fileStats.birthtime).format('DD-MM-YYYY')
                        })
                    })
                }

                resolve(files)
            }
        })
    })
};



module.exports = main;
