const route = require("express").Router()
const Trucks = require('./trucks-model')

//after api/trucks, and all routes go through restrictedPath as specified in index.js

//get all trucks
route.get('/trucks', async (req, res, next) => {
    try { 
        const trucks = await Trucks.findTrucks()
        res.json(trucks)
    } catch(err){
        next(err)
    }
});

//get truck by ID
route.get('/trucks/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const truck = await Trucks.findTruckById(id).first()
        res.json(truck)
    } catch(err){
        next(err)
    }
});

module.exports = route

