const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll(
    {
      include: [Product],
    });

  return res.json(tagData);
});
    
  // find all tags
  // be sure to include its associated Product data


router.get('/:id', async (req, res) => {
  const tagData = await Tag.findOne(
    {
      include: [Product],
    });
  return res.json(tagData);
});
  // find a single tag by its `id`
  // be sure to include its associated Product data

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body);

  return res.json(tagData);
});
  // create a new tag


router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(
    {
      where: {
        tag_id: req.params.tag_id,
      },
    }
  );
  return res.json(tagData);
});
  // update a tag's name by its `id` value


router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  });

  return res.json(tagData);
  // delete on tag by its `id` value
});

module.exports = router;
