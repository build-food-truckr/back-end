
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Joey',
          password: 'abc123',
          email: 'joey@gmail.com',
          role: 'diner',
          favoriteTruck: 1,
          ownedTruck: 1
        },
        {
          username: 'David',
          password: 'abc123',
          email: 'david@gmail.com',
          role: 'operator',
          favoriteTruck: 1,
          ownedTruck: 1
        },
      ]);
    });
};
