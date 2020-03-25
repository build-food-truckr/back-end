const route = require("express").Router();
const Users = require('../users/users-model');
const doesUserAlreadyExist = require("./")


route.post('/register', async (req, res, next) => {
    try {

    } catch(err){
        next(err)
    }
});

route.post('/login', doesUserAlreadyExist(), async (req, res, next) => {
    try {

    } catch(err){
        next(err)
    }
});