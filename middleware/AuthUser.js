import users from "../models/UserModels.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId)
    return res.status(400).json({ msg: "Harap login dahulu" });
  const user = await users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  next();
};

export const adminOnly = async (req, res, next) => {
  if (!req.session.userId)
    return res.status(400).json({ msg: "Harap login dahulu" });
  const user = await users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.roleId !== 1)
    return res.status(403).json({ msg: "Forbiden access" });
  next();
};
