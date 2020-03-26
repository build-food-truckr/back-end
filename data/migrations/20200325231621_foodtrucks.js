
exports.up = async function(knex) {
    await knex.schema
        .createTable("users", table => {
            table.increments("id")
            table.string("username").notNullable().unique()
            table.string("email").notNullable()
            table.string("password").notNullable()
            table.string("role").notNullable()
        })
        .createTable("trucks", table => {
            table.increments("id")
            table.string("truckName").notNullable().unique()
            table.varbinary("imageOfTruck")
            table.string("cuisineType").notNullable()
            table.string("location").notNullable()
        })
        .createTable("menu", table => {
            table.increments("id")
            table.string("itemName").notNullable().unique()
            table.string("description")
            table.varbinary("imageOfItem")
            table.string("itemPrice").notNullable()
        })
        .createTable("users_trucks", table => {
            table.integer("user_id")
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("truck_id")
                .references("id")
                .inTable("trucks")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.primary(["user_id", "truck_id"])
        })
        .createTable("trucks_menus", table => {
            table.integer("truck_id")
                .references("id")
                .inTable("trucks")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("menu_id")
                .references("id")
                .inTable("menu")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.primary(["truck_id", "menu_id"])
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("trucks")
        .dropTableIfExists("menu")
        .dropTableIfExists("users_trucks")
        .dropTableIfExists("trucks_menus")
};
