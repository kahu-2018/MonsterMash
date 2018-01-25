
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cities', function (table) {
    table.increments()
    table.string('power')
    table.integer('monster_id')
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('powers')
};
