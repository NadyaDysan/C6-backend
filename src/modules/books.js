const fs = require('fs');
const path = require ('path');

const getBook = () => {
    const filePath = path.join(__dirname, '../data/books.json')
    return fs.readFileSync(filePath);
}

module.exports = getBook;