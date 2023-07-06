const { url } = require('inspector');
const mongoose = require('mongoose');

// uri = "mongodb+srv://KunalUkirde:kunal8625@kunalukirde.bbqlucn.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://KunalUkirde:kunal8625@kunalukirde.bbqlucn.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (uri) => {
    console.log('connect db');
    return mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
}

module.exports = connectDB;