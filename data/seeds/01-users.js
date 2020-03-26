
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
          role: 'diner'
        },
        {
          username: 'David',
          password: 'abc123',
          email: 'david@gmail.com',
          role: 'operator'
        },
      ]);
    });
};
