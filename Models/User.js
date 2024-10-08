const sequelize = require('../Connections/Sequelize');
const { DataTypes } =require('sequelize');
const Book = require('./Book');


const User = sequelize.define('User',{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    bookId:{
        type:DataTypes.INTEGER,
        references:{
            model:Book,
            key:'bookId'
        }
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    issueDate:{
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(), // Ensures the date is today or in the past
          notEmpty: true,
        }
    },
    duration:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    token:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{
    timestamps:true,
})

User.belongsTo(Book,{foreignKey:'bookId'});
Book.hasMany(User,{foreignKey:'userId'});

module.exports =User;