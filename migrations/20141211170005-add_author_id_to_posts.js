"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    // This is our migration to create an authorId
    migration.addColumn("posts", "authorId", {
        type: DataTypes.INTEGER
    });
    done(done);
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    // This is our migratino to remove the column
    migration.removeColumn("posts", "authorId");
    done(done);
  }
};
