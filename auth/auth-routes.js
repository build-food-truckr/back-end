const route = require("express").Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const doesUserAlreadyExist = require("./doesUserAlreadyExist.js")


function generateToken(user){
    const payload = {
        username: user.username,
        department: user.department
    }
    const secret = process.env.JWT_SECRET;

    const options = {
        expiresIn: '1hr'
    }
    return jwt.sign(payload, secret, options)
};

route.post('/register', async (req, res, next) => {
    try {
        //check if the client gave all the data
        const { username, email, password, role } = req.body
        if (!username || !email || !password || !role){
            return res.status(400).json({ message: "Please provide full credentials"})
        }

        //check if the username is already taken
        const user = await Users.findBy({ username }).first()
        if(user) {
            return res.status(400).json({ message: "Username already taken" })
        }

        //register user in the database, but does not generate token
        await Users.createUser(req.body)
        res.status(201).json({ message: `Welcome ${username}!`})
    } catch(err){
        next(err)
    }
});

route.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        console.log(req)
        const isPasswordValid = bcrypt.compare(password, req.body.password)

        if(!isPasswordValid){
            res.status(400).json({ message: "Please enter a valid password" })
        } else {
            const token = generateToken(req.body.username)
            res.cookie("authToken", token)
            res.json({ message: `Welcome ${username}` })
        }
    } catch(err){
        next(err)
    }
});

module.exports = route
