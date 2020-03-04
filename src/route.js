

var express = require('express');
var router = express.Router();
var vehiculoController=require("./controller/vehiculeController.js");
var todoController=require("./controller/todoController.js");

// vehiculo
router.get("/vehiculo", vehiculoController.getVehiculo);
router.get("/vehiculo/:id", vehiculoController.getVehiculoById);
router.post("/vehiculo/",vehiculoController.postVehiculo);
router.patch("/vehiculo/:id",vehiculoController.putVehiculo);
router.delete("/vehiculo/:id",vehiculoController.deleteVehiculo);

// todo
router.get("/todo", todoController.getCompleted);

module.exports = router;