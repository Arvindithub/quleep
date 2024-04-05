const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Date, required: true } // Changed type to Date
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = { bookModel };