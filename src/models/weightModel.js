const { Schema, model } = require('mongoose');

const weightSchema =  new Schema({
    value: { type: Number, required: true},
    date: { type: Date, required: true },
    userId:{
        ref: "User",
        type: Schema.Types.ObjectId,
        required : true
    }
});

module.exports = model('Weight', weightSchema)