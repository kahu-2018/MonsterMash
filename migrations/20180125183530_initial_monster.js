
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('monsters', function (table) {
    table.increments()
    table.string('monster')
    table.string('monster_img')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('monsters')
};
