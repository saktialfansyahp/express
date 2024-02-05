import colors from "../models/ColorModels.js";

export const getColor = async (req, res) => {
    try {
        const response = await colors.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getColorById = async (req, res) => {
    try {
        const response = await colors.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const createColor = async (req, res) => {
    const { color } = req.body;
    if (!color) return res.status(400).json({ msg: "Data ada yang kosong" });
    try {
        const response = await colors.create({
            color: color,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateColor = async (req, res) => {
    const data = await colors.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!color) return res.status(400).json({ msg: "Data tidak ditemukan" });
    const { color } = req.body;
    try {
        await data.update({
            color: color,
        });
        res.status(200).json({ msg: "Color updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteColor = async (req, res) => {
    const color = await colors.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!color) return res.status(404).json({ msg: "Data tidak ditemukan" });
    try {
        await color.destroy();
        res.status(200).json({ msg: "Color dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
