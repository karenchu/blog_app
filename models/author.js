"use strict";

module.exports = function(sequelize, DataTypes) {
  var author = sequelize.define("author", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) { 
      /*  This tells our model that 
            it has an associated set 
            of posts and so sequelize
            will create helper methods
            for us to access those, i.e.
            `getPosts()`*/
        // associations can be defined here
        this.hasMany(models.post); 
        //setting up the association and giving us helper methods on the author model for the post
        /*It is a method that you didn't quite define anywhere but was created for to help with doing 
        something that you'd routinely do. You can also explicitly create a helper method to help you 
        solve routine tasks that you do, but in this case I am referring to helper methods that sequelize 
        just magically creates after you say `this.hasMany(...)`*/
      }
    }
  });

  return author;
};
