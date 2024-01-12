const db = require('../models/index');

exports.all = async(req, res) => {
  try {
    // Sequelize orqali barcha mahsulotlarni olish
    const products = await db.products.findAll();

    // Agar mahsulot topilmagan bo'lsa
    if (products.length === 0) {
      return res.status(404).json({ message: 'Mahsulotlar topilmadi' });
    }

    // Mahsulotlar topilsa, uni JSON formatida qaytarish
    res.json(products);
  } catch (error) {
    console.error(16, error.stack);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

exports.getOne = async (req, res) => {
  const productId = req.params.id;

  try {
    // Mahsulotni id orqali qidirish
    const product = await db.products.findOne({
      where: { id: productId },
    });

    // Agar mahsulot topilmagan bo'lsa
    if (!product) {
      return res.status(404).json({ message: 'Mahsulot topilmadi' });
    }

    // Mahsulot topilsa, uni JSON formatida qaytarish
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, status, price, category_id } = req.body;

    const newProduct = await db.products.create({
      name,
      description,
      status,
      price,
      category_id,
    });

    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

exports.getByFilter = async (req, res) => {
  try {
    const { name, status, price } = req.query;

    const filterOptions = {};

    if (name) {
      filterOptions.name = name;
    }

    if (status) {
      filterOptions.status = status;
    }

    if (price) {
      filterOptions.price = price;
    }

    const products = await db.products.findAll({
      where: filterOptions,
    });

    if (products.length === 0) {
      return res.status(404).json({ message: 'Mahsulotlar topilmadi' });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Mahsulotni id orqali topib olish
    const product = await db.products.findByPk(productId);
    console.log(101, product);
    // Agar mahsulot topilmagan bo'lsa
    if (!product) {
      return res.status(404).json({ message: 'Mahsulot topilmadi' });
    }

    // Mahsulotni o'chirish
    await product.destroy();

    res.json({ message: 'Mahsulot muvaffaqiyatli o\'chirildi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, status, price, category_id } = req.body;

    // Mahsulotni id orqali topib olish
    let product = await db.products.findByPk(productId);

    // Agar mahsulot topilmagan bo'lsa
    if (!product) {
      return res.status(404).json({ message: 'Mahsulot topilmadi' });
    }

    // Mahsulotni yangilash
    product = await product.update({
      name,
      description,
      status,
      price,
      category_id,
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};
