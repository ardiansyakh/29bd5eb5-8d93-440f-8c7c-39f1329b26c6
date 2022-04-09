
const fs = require('fs')
const main = (dir) => {
    return new Promise((resolve, reject) => {
        fs.access(dir, (err) => {
            if(err) {
                reject({message: 'Invalid Path'})
            }
            else {
                const result = fs.readdirSync(dir).forEach(filename => {
                    return {
                        fileName: path.parse(filename).name,
                        ext: path.parse(filename).ext,
                        filepath: path.resolve(dir, filename),
                        stat: fs.statSync(filepath),
                        isFile: stat.isFile(),
                        size: stat.size()
                    }
                })
                resolve(result)
            }
        })
    })
};



module.exports = main;
