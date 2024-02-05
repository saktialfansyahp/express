import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const categorys = db.define("categorys", {
    category: {
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

export default categorys;
