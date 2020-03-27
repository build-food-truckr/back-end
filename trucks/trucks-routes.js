const route = require("express").Router()
const Trucks = require('./trucks-model')

//after api/trucks, and all routes go through restrictedPath as specified in index.js

//get all trucks
route.get('/', async (req, res, next) => {
    try { 
        const trucks = await Trucks.findTrucks()
        res.json(trucks)
    } catch(err){
        next(err)
    }
});

//get truck by ID
route.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const truck = await Trucks.findTruckById(id).first()
        res.json(truck)
    } catch(err){
        next(err)
    }
});

//delete truck
route.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const truckExists = await Trucks.findBy({ id }).first()
        if (!truckExists){
            return res.status(400).json({ message: "truckName doesn't exist" })
        }
        await Trucks.deleteTruck(id)
        res.json({ message: "Truck deleted"})
    } catch(err){
        next(err)
    }
});

//create truck
route.post("/", async (req, res, next) => {
    try {
        const { truckName, cuisineType, location, itemName, itemPrice } = req.body
        if (!truckName || !cuisineType || !location ||!itemName || !itemPrice){
            return res.status(400).json({ message: "Please provide truckName, cuisineType, itemName, itemPrice, and location"})
        }

        const truckExists = await Trucks.findBy({truckName}).first()
        if (truckExists){
            return res.status(400).json({ message: "truckName already exists" })
        }

        const newTruck = await Trucks.createTruck(req.body)
        res.status(201).json(newTruck) 
    } catch(err){
        next(err)
    }
});

//edit truck
route.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params

        const updatedTruck = await Trucks.editTruck(id, req.body)
        res.json(updatedTruck)
    } catch(err) {
        next(err)
    }
})

module.exports = route

