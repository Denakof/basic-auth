"use strict";

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI =
  process.env.POSTGRES_URI ||
  "postgres://qabauxrd:xiMN8Jlf2zhbmVraUNIymntOqofG_ywk@tai.db.elephantsql.com/qabauxrd";
const { Sequelize, DataTypes } = require("sequelize");
const Users = require("./users");
const Collection = require("./collection-class");

var sequelize = new Sequelize(POSTGRES_URI, {});

const usersModel = Users(sequelize, DataTypes);

// create our relations that will add 'foreign keys' to our tables
// clothesModel.hasMany(foodModel, { sourceKey: "id", foreignKey: "clothesId" });
// foodModel.belongsTo(clothesModel, { foreignKey: "clothesId", targetKey: "id" });

// const clothesCollection = new Collection(clothesModel);
const usersCollection = new Collection(usersModel);

module.exports = {
  db: sequelize,
  Users: usersModel,
};
