import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({ product_id: product._id });
};

export const updateQuantity = async (req, res) => {
  const { quantity } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  );
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
};

export const getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.status(200).json(products);
};
