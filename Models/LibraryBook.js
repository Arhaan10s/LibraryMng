const Library = require('./Library');
const Book = require('./Book');
const sequelize = require('../Connections/Sequelize');
const { DataTypes } = require('sequelize')

const LibraryBook = sequelize.define('LibraryBook', 
{
    libraryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Library,
        key: 'libraryId',
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: Book,
        key: 'bookId',
      },
    },
}, {
  timestamps: false,
});


Library.belongsToMany(Book, { through: LibraryBook, foreignKey: 'libraryId' });
Book.belongsToMany(Library, { through: LibraryBook, foreignKey: 'bookId' });

LibraryBook.belongsTo(Book,{foreignKey: 'bookId'});
Book.belongsTo(LibraryBook,{foreignKey: 'bookId'});



module.exports =  LibraryBook;
