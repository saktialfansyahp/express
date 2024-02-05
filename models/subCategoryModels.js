import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import categorys from "./CategoryModels.js";

const subCategory = db.define("subcategory", {
    sub_category: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
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
});

categorys.hasMany(subCategory);
subCategory.belongsTo(categorys, { foreignKey: "categoryId" });

export default subCategory;
