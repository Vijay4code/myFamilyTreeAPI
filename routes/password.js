const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/password');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await password.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting password`, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
  try {
    res.json(await password.create(req.body));
  } catch (err) {
    console.error(`Error while creating password`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await password.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating password`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await password.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting password`, err.message);
    next(err);
  }
});

module.exports = router;