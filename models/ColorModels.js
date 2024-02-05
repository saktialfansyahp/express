import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const colors = db.define("colors", {
    color: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

export default colors;
