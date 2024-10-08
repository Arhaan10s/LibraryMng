const sequelize = require('../Connections/Sequelize');
const { DataTypes } = require('sequelize');

const Library = sequelize.define('Library',{
        libraryId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        contactNo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        openingHour:{
            type:DataTypes.STRING,
            allowNull:false
        },
        closingHour:{
            type:DataTypes.STRING,
            allowNull:false
        }
},{
    timestamps:false,
});



module.exports = Library;

