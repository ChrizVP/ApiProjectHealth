const Person = require('../models/personModel');
const config = require('../middlewares/config');
const jwt = require('jsonwebtoken')

export const createPerson = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const {name, lastName, age} = req.body;
        console.log(req.body);
        const person = new Person({ 
            name, 
            lastName, 
            age, 
            userId : decoded.id 
        });

        //const savePerson = await person.save();
        console.log(person);
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem registerid your data')
    }
}

export const getPersons = (req, res) =>{
    
}

export const getPersonById = (req, res) =>{
    
}

export const updatePersonById = (req, res) =>{
    
}

export const deletePersonById = (req, res) =>{
    
}