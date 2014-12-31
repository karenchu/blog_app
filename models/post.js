"use strict";

module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
         /*
            The belongsTo statement
            sets up the reverse association
            so that we can look up
            authors associated with
            a particular post, i.e.
            getAuthor()
        */
        // associations can be defined here
        this.belongsTo(models.author)
        /*The `this.belongsTo(models.author)` is a method 
        that creates helper methods on our `post` model for
         the `author`. It allows us to say things like `somePost.getAuthor()`, 
         which will do a SQL lookup for the `author` */
        //it creates instance methods on the `post`, but it doesn't do anything to the `models.author`
      }
    }
  });

  return post;
};
