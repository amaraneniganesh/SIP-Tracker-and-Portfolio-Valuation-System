const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('D:\\SQLITE\\SQL DATABASE DATA FOR DBEAVER\\Fintech', (err) => {
    if(err){
        console.error('Error opening database:', err.message);
    }
    else{
        console.log('Connected to the SQLite database.');
    }
});

module.exports = {db};