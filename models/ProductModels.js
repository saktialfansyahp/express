import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import subCategory from "./subCategoryModels.js";

const products = db.define("products", {
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

subCategory.hasMany(products);
products.belongsTo(subCategory, { foreignKey: "subcategoryId" });

export default products;
