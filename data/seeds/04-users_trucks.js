
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_trucks').insert([
        {user_id: 1, truck_id: 1},
        {user_id: 2, truck_id: 2},
      ]);
    });
};
