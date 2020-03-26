const express=require('express');
require('./database');
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());
app.listen(3000);
app.use('/api',require('./router/index'));
console.log('Serve Running on Port 3000');