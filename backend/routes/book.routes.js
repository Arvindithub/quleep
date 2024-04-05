const express = require('express');
const bookRouter = express.Router();
const { bookModel } = require("../models/book.model");

// CREATE operation
bookRouter.post('/post', async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const newBook = await bookModel.create({ title, author, year });
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ operation
bookRouter.get('/all', async (req, res) => {
    try {
        const books = await bookModel.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE operation
bookRouter.put('/:id', async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true });
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE operation
bookRouter.delete('/:id', async (req, res) => {
    try {
        await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = {bookRouter};