const db = require('../data/config')

module.exports = {
    findTrucks, 
    findTruckById,
    deleteTruck, 
    createTruck,
    findBy,
    editTruck
}

function findTrucks(){
    return db("trucks as t")
}

function findTruckById(id){
    return db("trucks as t")
        .where("t.id", id)
        .first()
}

function deleteTruck(id){
    return db("trucks").where({ id }).del()
}

async function createTruck(payload) {
    const [id] = await db("trucks").insert(payload)
    return findBy({id}).first()
}


function findBy(filter) {
    return db("trucks").where(filter)
}

async function editTruck(id, payload){
    await db("trucks").where("id", id).update(payload)
    return findBy({id}).first()
}
