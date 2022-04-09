
const fs = require('fs')
const main = (dir) => {
    return new Promise((resolve, reject) => {
        fs.access(dir, (err) => {
            if(err) {
                reject({message: 'Invalid Path'})
            }
            else {
            }
        })
    })
};



module.exports = main;
