
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {
          truckName: 'The Bacon Boss',
          imageOfTruck: '',
          cuisineType: 'American',
          location: '1435 River Park Dr #1445, Sacramento, CA 95815'
        },
        {
          truckName: 'North Border Taco',
          imageOfTruck: '',
          cuisineType: 'Mexican',
          location: '3721 47th Ave, Sacramento, CA 95824'
        },
      ]);
    });
};
