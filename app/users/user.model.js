const mongoose = require('mongoose');

const userschema =  new mongoose.Schema({
    fullname: {
        type: String,
        require: false
    },
    age:{
        type:Number,
        require:false
    },
    // fileId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Licence',
    //     required: false
    // },
});
module.exports = mongoose.model("User", userschema);