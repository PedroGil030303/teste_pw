// productsController.js

// Simulando um banco de dados (substitua por um banco de dados real)
const productsData = require('./products.json');

// Método para listar todos os produtos
const getAllProducts = (req, res) => {
  res.json(productsData.products);
};

// Método para obter um produto por ID
const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productsData.products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

// Método para criar um novo produto
const createProduct = (req, res) => {
  // Implemente a lógica para adicionar um novo produto ao banco de dados
  // (por exemplo, validar os dados enviados no corpo da requisição)
  // e retorne o produto criado com um ID gerado automaticamente.
  // Aqui, estou apenas simulando a criação de um produto.
  const newProduct = {
    id: productsData.products.length + 1,
    ...req.body, // Assume que o corpo da requisição contém os dados do novo produto
  };
  productsData.products.push(newProduct);
  res.status(201).json(newProduct);
};

// Método para atualizar um produto existente
const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body; // Assume que o corpo da requisição contém os dados atualizados
  const index = productsData.products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    productsData.products[index] = { ...productsData.products[index], ...updatedProduct };
    res.json(productsData.products[index]);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

// Método para excluir um produto
const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const index = productsData.products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    const deletedProduct = productsData.products.splice(index, 1)[0];
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
