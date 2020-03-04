var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE vehiculo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            marca text, 
            anho text, 
            color text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO vehiculo (marca,anho,color) VALUES (?,?,?)'
                db.run(insert, ["Fiat","1968","Maroon"])
                db.run(insert, ["Renault","1987","Black"])
            }
        });  
    }
});


module.exports = db