const Library = require('./Library');
const Book = require('./Book');
const User = require('./User');
const LibraryBook = require('./LibraryBook');
const sequelize = require('../Connections/Sequelize');

sequelize.sync({alter:true})
    .then(()=>{
        console.log('All Tables are created successfully')
    })
    .catch((err)=>{
        console.log('Error creating tables',err);
    })
