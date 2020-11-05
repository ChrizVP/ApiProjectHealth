const { Schema, model } = require('mongoose');

const personSchema =  new Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: true },
    age: { type: Int32Array },
    user:{
        ref: "User",
        type: Schema.Types.ObjectId
    }
});

module.exports = model('Person', personSchema)
