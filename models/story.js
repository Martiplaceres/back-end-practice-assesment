"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    static associate(models) {
      story.belongsTo(models.space);
    }
  }
  story.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      spaceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
