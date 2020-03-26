
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks_menus').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks_menus').insert([
        {truck_id: 1, menu_id: 1},
        {truck_id: 2, menu_id: 2},
      ]);
    });
};
