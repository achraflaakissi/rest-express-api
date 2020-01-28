const mongoose = require('mongoose');
const User = require('./user.model');

exports.findAll = async (req,res)=>{
    const users = await User.find();
    res.json({
        data:users
    });
}
exports.addOne = async (req,res)=>{
    const user = new User({...req.body});
    await user.save();
    res.json({
        data:user
    });
}
exports.getone = async (req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({
        data:user
    });
}
exports.deleteOne = async (req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    await user.remove();
    res.json({
        data:true
    });
}