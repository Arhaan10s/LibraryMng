const { DataTypes } = require('sequelize');
const sequelize = require('../Connections/Sequelize');


const Book = sequelize.define('Book',{
    bookId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
    },   
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    genre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    publishedYear:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    status:{
        type:DataTypes.ENUM('available','unavailable'),
        defaultValue:'available'
    },
},{
    timestamps:true,
})


module.exports =Book;