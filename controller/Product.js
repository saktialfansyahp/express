import categorys from "../models/CategoryModels.js";
import products from "../models/ProductModels.js";
import subCategory from "../models/subCategoryModels.js";

export const getProduct = async (req, res) => {
  try {
    const product = await products.findAll({
      include: [
        {
          model: subCategory,
        },
      ],
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { image, product_name, description, price, subcategory } = req.body;
  if ((!image, !product_name || !description || !price || !subcategory))
    return res.status(400).json({ msg: "Invalid data" });
  try {
    await products.create({
      image: image,
      product_name: product_name,
      description: description,
      price: price,
      subcategoryId: subcategory,
    });
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
