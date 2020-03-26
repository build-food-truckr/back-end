const route = require("express").Router()
const Users = require("./users-model")

//after api/users, and all routes go through restrictPath middleware, as indicated in index.js

//get all users
route.get('/', async (req, res, next) => {
    try { 
        const users = await Users.findAll()
        res.json(users)
    } catch(err){
        next(err)
    }
});

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
        if (diner.role === 'diner'){
            res.json(diner)
        } else {
            res.status(400).json({ message: `${diner.username} is an operator, not a diner` })
        }
    } catch(err){
        next(err)
    }
});

//get operator by ID
route.get('/operators/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const operator = await Users.findOperatorById(id).first()
        if (operator.role === 'operator'){
            res.json(operator)
        } else {
            res.status(400).json({ message: `${operator.username} is a diner, not an operator` })
        }
    } catch(err){
        next(err)
    }
});

module.exports = route