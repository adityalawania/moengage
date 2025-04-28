const express = require('express');
const { createList, getLists, deleteList, updateList } = require('../controllers/listController');
const router = express.Router();

router.post('/', createList);
router.get('/', getLists);
router.delete('/:id', deleteList);
router.put('/:id', updateList);

module.exports = router;
