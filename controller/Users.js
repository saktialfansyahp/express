import argon2 from "argon2";
import roles from "../models/RoleModels.js";
import users from "../models/UserModels.js";

export const getUsers = async (req, res) => {
  try {
    const response = await users.findAll({
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: roles,
        },
      ],
    });
    if (response.length === 0)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await users.findOne({
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: roles,
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    if (!response) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, username, password, confirmPassword, role } = req.body;
  if (password !== confirmPassword)
    return res.status(400).json("password & confirm password tidak sesuai");
  const hashPassword = await argon2.hash(password);
  try {
    await users.create({
      name: name,
      username: username,
      password: hashPassword,
      roleId: role,
    });
    const user = await users.findOne({
      attributes: {
        exclude: ["password"],
      },
      where: {
        username: req.body.username,
      },
    });
    // const user = await getUserByUsername(req.body.username);

    res.status(201).json({ user, msg: "Registrasi sukses" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
