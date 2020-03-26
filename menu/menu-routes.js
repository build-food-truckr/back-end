const route = require("express").Router()
const Menu = require('./menu-model')

//after api/menu, and all routes go through restrictedPath as specified in index.js

//get all menu items
route.get('/', async (req, res, next) => {
    try { 
        const menuItems = await Menu.findMenuItems()
        res.json(menuItems)
    } catch(err){
        next(err)
    }
});

//get menu item by ID
route.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const menuItem = await Menu.findMenuItemById(id).first()
        res.json(menuItem)
    } catch(err){
        next(err)
    }
});


//delete menu item
route.delete('/:id', async (req, res, next) => {
    try { 
        const { id } = req.params
        const menuExists = await Menu.findBy({ id }).first()
        if(!menuExists){
            return res.status(400).json({ message: "itemName doesn't exist" })
        }
        await Menu.deleteMenuItem(req.params.id)
        res.json({ message: "Menu item deleted"})
    } catch(err){
        next(err)
    }
});


//create menu item
route.post("/", async (req, res, next) => {
    try {
        const { itemName, itemPrice } = req.body
        if (!itemName || !itemPrice){
            return res.status(400).json({ message: "Please provide itemName and itemPrice"})
        }

        const itemExists = await Menu.findBy({ itemName }).first()
        if (itemExists){
            return res.status(400).json({ message: "itemName already exists" })
        }

        const newItem = await Menu.createMenuItem(req.body)
        res.status(201).json(newItem) 
    } catch(err){
        next(err)
    }
});

module.exports = route

