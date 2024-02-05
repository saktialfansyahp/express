import roles from "../models/RoleModels.js";
import users from "../models/UserModels.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res
            .status(400)
            .json({ msg: "Username dan Password harus diisi" });
    const user = await users.findOne({
        where: {
            username: username,
        },
        include: [
            {
                model: roles,
            },
        ],
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await argon2.verify(user.password, password);
    if (!match) return res.status(400).json({ msg: "Password tidak sesuai" });
    req.session.userId = user.uuid;
    const response = {
        id: user.id,
        uuid: user.uuid,
        name: user.name,
        username: user.username,
        roleId: user.role_id,
        Role: user.role,
    };
    res.status(200).json({ msg: "Login berhasil", data: response });
};

export const Logout = async (req, res) => {
    if (!req.session.userId)
        return res.status(400).json({ msg: "Harap login dahulu" });
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ msg: "Tidak bisa logout" });
        res.status(200).json({ msg: "You have been logout" });
    });
};
