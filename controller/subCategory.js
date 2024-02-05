import categorys from "../models/CategoryModels.js";
import subCategory from "../models/subCategoryModels.js";

export const getsubCategory = async (req, res) => {
    try {
        const response = await subCategory.findAll({
            include: [
                {
                    model: categorys,
                },
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const createsubCategory = async (req, res) => {
    const { sub_category, description, category } = req.body;
    if (!sub_category || !description || !category)
        return res.status(400).json({ msg: "Data harus terisi" });
    try {
        const response = await subCategory.create({
            sub_category: sub_category,
            description: description,
            categoryId: category,
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updatesubCategory = async (req, res) => {
    const subcategory = await subCategory.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!subcategory)
        return res.status(404).json({ msg: "sub category tidak ditemukan" });

    const { sub_category, description, category } = req.body;
    try {
        await subcategory.update({
            sub_category: sub_category,
            description: description,
            categoryId: category,
        });
        res.status(200).json({ msg: "Sub category berhasil diupdate" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deletesubCategory = async (req, res) => {
    const subcategory = await subCategory.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!subcategory)
        return res.status(404).json({ msg: "sub category tidak ditemukan" });
    try {
        await subcategory.destroy();
        res.status(200).json({ msg: "Sub category telah dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
