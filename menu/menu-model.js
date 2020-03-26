const db = require('../data/config')

module.exports = {
    findMenuItems, 
    findMenuItemById,
    deleteMenuItem
}

function findMenuItems(){
    return db("menu as m")
        .join("trucks_menus as tm", "tm.truck_id", "m.id")
        .join("trucks as t", "t.id", "tm.menu_id")
        .select("m.*", "t.*")
}

function findMenuItemById(id){
    return db("menu as m")
        .where("m.id", id)
        .join("trucks_menus as tm", "tm.truck_id", "m.id")
        .join("trucks as t", "t.id", "tm.menu_id")
        .select("m.*", "t.*")
}

function deleteMenuItem(id){
    return db("menu").where({ id }).del()
}