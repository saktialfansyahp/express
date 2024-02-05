export const getProduk = async (req, res) => {
  try {
    const response = {
      status: "success",
    };
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
