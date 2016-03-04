
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', function (table) {
    table.increments();
    table.boolean('nsfw');
    table.text('url');
    table.string('title');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
