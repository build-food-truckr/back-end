
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {
          itemName: 'Bacon Fries',
          description: '',
          imageOfItem: '',
          itemPrice:'$3.50'
        },
        {
          itemName: 'The Tejano Taco',
          description: 'Mexican smoked brisket, sauteed mapales, pica de gallo, oh-dah-le sauce, and top with habanero rings',
          imageOfItem: '',
          itemPrice:'$3.00'
        },
      ]);
    });
};
