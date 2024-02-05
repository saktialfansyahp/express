import categorys from "../models/CategoryModels.js";

export const getCategory = async (req, res) => {
    try {
        const response = await categorys.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const response = await categorys.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const createCategory = async (req, res) => {
    const { category, description } = req.body;
    if (!category || !description)
        return res.status(400).json({ msg: "Data ada yang kosong" });
    try {
        const response = await categorys.create({
            category: category,
            description: description,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateCategory = async (req, res) => {
    const categorys = await categorys.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!categorys)
        return res.status(400).json({ msg: "Data tidak ditemukan" });
    const { category, description } = req.body;
    try {
        await categorys.update({
            category: category,
            description: description,
        });
        res.status(200).json({ msg: "categorys updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    const category = await categorys.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!category) return res.status(404).json({ msg: "Data tidak ditemukan" });
    try {
        await category.destroy();
        res.status(200).json({ msg: "categorys dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
