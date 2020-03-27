const db = require('../data/config')
const bcrypt = require("bcryptjs")

module.exports = {
    findAll,
    findDiners,
    findDinerById,
    findOperators,
    findOperatorById,
    findBy,
    findById,
    createUser,
    deleteUser,
    editUser
}

function findAll(){
    return db("users").select("id", "username", "role")
}

function findDiners(){
    return db("users as u")
        .where("role", "diner")
        .select("id", "username", "role", "favoriteTruck")
}

function findDinerById(id){
    return db("users")
        .where("id", id)
        .select("username", "role", "favoriteTruck")
}

function findOperators(){
    return db("users")
        .where("role", "operator")
        .select("username", "email", "role", "ownedTruck")
}

function findOperatorById(id){
    return db("users")
        .where("id", id)
        .select("username", "email", "role", "ownedTruck")
}

function findBy(filter) {
	return db("users").where(filter)
}

function findById(id){
    return db("users")
        .where({ id })
        .select("id", "username", "role")
        .first()
}

async function createUser(credentials){
    credentials.password = await bcrypt.hash(credentials.password, 12)
    const [id] = await db("users").insert(credentials)
    return findById(id)
}

function deleteUser(id){
    return db("users").where({ id }).del()
}

async function editUser(id, payload){
    await db("users").where({ id }).update(payload)
    return findById(id)
}