import db from "../config/Database.js";
import color from "./ColorModels.js";
import products from "./ProductModels.js";

const product_colors = db.define("product_colors", {});

products.hasMany(product_colors);
product_colors.belongsTo(products, { foreignKey: "productId" });

color.hasMany(product_colors);
product_colors.belongsTo(color, { foreignKey: "colorId" });

export default product_colors;
