
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories_images', function (table) {
    table.integer('category_id').references('id').inTable('categories');
    table.integer('image_id').references('id').inTable('images');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories_images');
};
