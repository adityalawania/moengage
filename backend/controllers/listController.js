const List = require('../models/listModel');
const jwt = require('jsonwebtoken');

const getUserId = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('No token');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.id;
};

exports.createList = async (req, res) => {
  try {
    const userId = getUserId(req);
    const { name, codes, images } = req.body;

    const list = await List.create({ userId, name, codes, images });
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLists = async (req, res) => {
  try {
    const userId = getUserId(req);
    const lists = await List.find({ userId });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await List.findByIdAndDelete(id);
    res.json({ message: 'List deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, codes, images } = req.body;
    const updatedList = await List.findByIdAndUpdate(id, { name, codes, images }, { new: true });
    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
