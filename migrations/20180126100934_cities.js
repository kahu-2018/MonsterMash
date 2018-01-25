
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cities', function (table) {
    table.increments()
    table.string('city')
    table.integer('destroyed')
    table.string('city_img')
    table.integer('monster_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities')
};
