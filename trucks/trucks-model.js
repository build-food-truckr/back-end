const db = require('../data/config')

module.exports = {
    findTrucks, 
    findTruckById,
    deleteTruck
}

function findTrucks(){
    return db("trucks as t")
        .join("trucks_menus as tm", "tm.truck_id", "t.id")
        .join("menu as m", "m.id", "tm.menu_id")
        .select("t.*", "m.*")
}

function findTruckById(id){
    return db("trucks as t")
        .where("t.id", id)
        .join("trucks_menus as tm", "tm.truck_id", "t.id")
        .join("menu as m", "m.id", "tm.menu_id")
        .select("t.*", "m.*")
}

function deleteTruck(id){
    return db("trucks").where({ id }).del()
}