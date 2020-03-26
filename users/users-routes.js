const route = require("express").Router()
const Users = require("./users-model")

//after api/users, and all routes go through restrictPath middleware, as indicated in index.js

//get all diners
route.get('/diners', async (req, res, next) => {
    try { 
        const diners = await Users.findDiners()
        res.json(diners)
    } catch(err){
        next(err)
    }
});

//get all operators 
route.get('/operators', async (req, res, next) => {
    try { 
        const operators = await Users.findOperators()
        res.json(operators)
    } catch(err){
        next(err)
    }
});

//get diner by ID
route.get('/diners/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const diner = await Users.findDinerById(id).first()
        res.json(diner)
    } catch(err){
        next(err)
    }
});

//get operator by ID
route.get('/operators/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const operator = await Users.findOperatorById(id).first()
        res.json(operator)
    } catch(err){
        next(err)
    }
});

module.exports = route