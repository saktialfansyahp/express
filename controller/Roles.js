import roles from "../models/RoleModels.js";

export const createRole = async (req, res) => {
    const { name } = req.body;
    try {
        // const role = await roles.findOne({
        //   where: {
        //     name: name,
        //   },
        // });
        // if (role) return res.status(404).json({ msg: "Role sudah ada" });
        await roles.create({
            name: name,
        });
        res.status(201).json({ msg: "role created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getRole = async (req, res) => {
    try {
        const response = await roles.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateRole = async (req, res) => {
    const role = await roles.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!role) return res.status(404).json({ msg: "Role not found" });

    const { name } = req.body;

    try {
        await roles.update(
            {
                name: name,
            },
            {
                where: {
                    id: role.id,
                },
            }
        );
        res.status(200).json({ msg: "Role updated" });
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

export const deleteRole = async (req, res) => {
    try {
        const role = await roles.findOne({
            where: {
                id: req.params.id,
            },
        });
        const response = role.destroy();
        if (response)
            return res.status(200).json({ msg: "Data berhasil dihapus" });
        else res.status(400).json({ msg: "Data gagal dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
