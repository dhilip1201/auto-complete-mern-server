const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const itemRoutes = require('./routes/item')
const cartRoutes = require('./routes/cart')


env.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    console.log('DB Connected')
});

app.use(cors());
app.use(express.json());
app.use('/api/v1', itemRoutes);
app.use('/api/v1', cartRoutes);

app.get('/',(req,res) => {
    res.status(200).json({
      message:'Welcome To Our Site'
    })
  })

app.listen(process.env.PORT,()=>{
    console.log(`Running OUR PORT is ${process.env.PORT}`);
})

