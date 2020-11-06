const { Schema, model } = require('mongoose');

const personSchema =  new Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: true },
    age: { type: Number },
    userId:{
        ref: "User",
        type: Schema.Types.ObjectId,
        required : true
    }
});

module.exports = model('Person', personSchema)
