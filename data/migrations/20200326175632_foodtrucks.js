
exports.up = async function(knex) {
    await knex.schema
        .createTable("trucks", table => {
            table.increments("id")
            table.string("truckName").notNullable().unique()
            table.varbinary("imageOfTruck")
            table.string("cuisineType").notNullable()
            table.string("location").notNullable()
            table.string("itemName").notNullable()
            table.string("description")
            table.varbinary("imageOfItem")
            table.string("itemPrice").notNullable()
        })
        .createTable("users", table => {
            table.increments("id")
            table.string("username").notNullable().unique()
            table.string("email").notNullable()
            table.string("password").notNullable()
            table.string("role").notNullable()
            table.integer("favoriteTruck")
                .references("id")
                .inTable("trucks")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("ownedTruck")
                .references("id")
                .inTable("trucks")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("trucks")
};
