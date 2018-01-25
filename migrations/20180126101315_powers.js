
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('powers', function (table) {
    table.increments()
    table.string('power')
    table.integer('monster_id')
    table.integer('city_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('powers')
};
