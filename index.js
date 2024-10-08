const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { readdirSync } = require('fs');
const sequelize  = require('./Connections/Sequelize');

// const Synchronize =  require('./Models/Synchronize');

dotenv.config();

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

readdirSync('./Routes').map((route) =>
    app.use('/api',require('./Routes/'+ route))
)

app.listen(port,()=>console.log(`listening on ${port}`));