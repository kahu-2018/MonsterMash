
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('powers').del()
    .then(function () {
      // Inserts seed entries
      return knex('powers').insert([
        {id: 1, power: 'Absorb', monster_id: 1, city_id: null},
        {id: 2, power: 'Desolve', monster_id: 1, city_id: null},
        {id: 3, power: 'Plant Power', monster_id: 2, city_id: null},
        {id: 4, power: 'Bush Fire', monster_id: 2, city_id: null},
        {id: 5, power: 'Tail Swipe', monster_id: 3, city_id: null},
        {id: 6, power: 'Stomp', monster_id: 3, city_id: null},
        {id: 7, power: 'Eat', monster_id: 4, city_id: null},
        {id: 8, power: 'Smash', monster_id: 4, city_id: null},
        {id: 9, power: 'Hurricane Breath', monster_id: 5, city_id: null},
        {id: 10, power: 'Glass-shattering Song', monster_id: 5, city_id: null}
      ]);
    });
};
