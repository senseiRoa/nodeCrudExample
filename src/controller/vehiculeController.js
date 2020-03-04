var db = require("./../databaseRepository.js");

exports.getVehiculo = (req, res, next) => {
    var sql = "select * from vehiculo"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows)
    });
}

exports.getVehiculoById = (req, res, next) => {
    var sql = "select * from vehiculo where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json(row)
      });
}

exports.postVehiculo = (req, res, next) => {
    var errors=[]
    
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        marca: req.body.marca,
        anho: req.body.anho,
        color : req.body.color
    }
    var sql = 'INSERT INTO vehiculo (marca,anho,color) VALUES (?,?,?)'
    var params =[data.marca, data.anho, data.color]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        data.id=this.lastID;
        res.json(data);
    });
}
exports.putVehiculo = (req, res, next) => {
    var data = {
        marca: req.body.marca,
        anho: req.body.anho,
        color : req.body.color
    }
    db.run(
        `UPDATE vehiculo set 
           marca = coalesce(?,marca), 
           anho = COALESCE(?,anho), 
           color = coalesce(?,color) 
           WHERE id = ?`,
        [data.marca, data.anho, data.color, req.params.id],
        (err, result) => {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json(data)
    });
}
exports.deleteVehiculo = (req, res, next) => {
    db.run(
        'DELETE FROM vehiculo WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
    });
}
