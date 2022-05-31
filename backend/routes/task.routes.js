const express = require('express');
const router  = express.Router();

const Records = require('../models/tasks');


//traer todos los vehiculos
router.get("/", async(req, res) => {
    try{
        const vehicles = await Records.find();
        res.status(200).json(vehicles);
    }catch(err){
        res.status(500).json({message: err});
    }
})

//register a new vehicle
router.post("/", async (req, res) => {

    const newVehicle = new Records(req.body)
    try{
        const saveVehicle = await newVehicle.save();
        res.status(200).json(saveVehicle);
    }catch(err){
        res.status(500).json(err);
    }
});

//traer solo los datos que esten en el parqueadero
router.get("/active", async (req, res) => {
	try {
		const getOnlyHave = await Records.find({"havePlace": 'true'});
		res.status(200).json(getOnlyHave);
	} catch (err) {
		res.status(500).json(err);
	}
});


//el vehiculo salio del parqueadero
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const noActiveVehicle = await Records.updateOne({_id: id}, req.body)
		res.status(200).json(noActiveVehicle);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;