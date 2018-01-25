
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists
};

exports.down = function(knex, Promise) {
  
};
