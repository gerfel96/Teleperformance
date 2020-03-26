const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/extra",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=> console.log('DB Connected'))
.catch(err=>console.log(err))