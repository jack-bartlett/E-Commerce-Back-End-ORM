const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll({
    attributes: {
      include: [Product],
    },
  });
  return res.json(categoryData);
});
  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  const categoryData = await Category.findOne({
    attributes: {
      include: [Product],
    },
  });
  return res.json(categoryData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
});
  // create a new category


router.put('/:id', async (req, res) => {
  const categoryData = await Category.update(
    {
      where: {
        category_id: req.params.category_id,
      },
    }
  );
  return res.json(categoryData);
});
  // update a category by its `id` value


router.delete('/:id', async (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      caetgory_id: req.params.category_id,
    },
  });
  return res.json(categoryData);
});
  // delete a category by its `id` value


module.exports = router;
