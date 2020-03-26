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
    createUser
}

function findAll(){
    return db("users").select("id", "username", "role")
}

function findDiners(){
    return db("users as u")
        .where("u.role", "diner")
        .join("users_trucks as ut", "ut.user_id", "u.id")
        .join("trucks as t", "ut.truck_id", "t.id")
        .select("u.id", "u.username", "u.role", "u.email", "t.truckName as favorite_trucks")
}

function findDinerById(id){
    return db("users as u")
        .where("u.id", id)
        .join("users_trucks as ut", "ut.user_id", "u.id")
        .join("trucks as t", "ut.truck_id", "t.id")
        .select("u.username", "u.email", "u.role", "t.truckName as favorite_trucks")
}

function findOperators(){
    return db("users as u")
        .where("u.role", "operator")
        .join("users_trucks as ut", "ut.user_id", "u.id")
        .join("trucks as t", "ut.truck_id", "t.id")
        .select("u.username", "u.email", "u.role", "t.truckName as owned_trucks")
}

function findOperatorById(id){
    return db("users as u")
        .where("u.id", id)
        .join("users_trucks as ut", "ut.user_id", "u.id")
        .join("trucks as t", "ut.truck_id", "t.id")
        .select("u.username", "u.email", "u.role", "t.truckName as owned_trucks")
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id){
    return db("users")
        .where({ id })
        .select("id", "username", "u.role",)
        .first()
}

async function createUser(credentials){
    credentials.password = await bcrypt.hash(credentials.password, 12)
    const [id] = await db("users").insert(credentials)
    return findById(id)
}