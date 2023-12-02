const productModels = require("../models");
const product = productModels?.products;

const addProduct = async (req, res) => {
  try {
    let { title, price, description, published } = req.body;
    if (title && price && description && published) {
      let info = {
        title,
        price,
        description,
        published,
      };
      await product.create(info);
      res.status(200).send(info);
    } else {
      res.status(400).send({ err: `Missing parameter(s)` });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await product.findOne({ where: { id } });
    result == null
      ? res.status(404).json({ message: "Record not found" })
      : [
          await product.update(req.body, { where: { id: id } }),
          res
            .status(200)
            .json({ message: `Record updated : ${JSON.stringify(req.body)}` }),
        ];
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findProductById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await product.findOne({ where: { id, published: true } });
    result == null
      ? res.status(404).json({ message: "Record not found" })
      : res.status(200).json(result);
  } catch (e) {
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await product.findOne({ where: { id } });
    result == null
      ? res.status(404).json({ message: "Record not found" })
      : await product.destroy({ where: { id } });
    res.status(200).json({ message: "Product deleted !!" });
  } catch (e) {
    res.status(500).send(err.message);
  }
};
const getAllProducts = async (req, res) => {
  try {
    let result = await product.findAll({ where: { published: true } });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addProduct,
  findProductById,
  deleteProduct,
  getAllProducts,
  updateProduct,
};
