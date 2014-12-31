"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.TEXT
      },
      // authorId: {
      //   type: DataTypes.INTEGER
      // },
      /*we need one to reference the associated author. 
      The solution that we learned in the notes was to do 
      a `db.sequelize.sync()` before starting our server, which 
      tells sequelize to analyze our models for neccessary changes 
      and then make those in the db. However, this has drawbacks.

If you change associations or mess up your model it effects your db 
tables, and we want to record any change that ever happens in our 
database with a migration. The solution to this problem is just to create a
 migration that adds the foreign key to our database.*/
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("posts").done(done);
  }
};