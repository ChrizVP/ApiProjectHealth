import { prependOnceListener } from '../models/personModel';

const Person = require('../models/personModel');
const User = require('../models/userModel');
const config = require('../middlewares/config');
const jwt = require('jsonwebtoken')

export const createPerson = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const {name, lastName, age} = req.body;
        const person = new Person({ 
            name, 
            lastName, 
            age, 
            userId : decoded.id 
        });
        const savePerson = await person.save();
        res.status(201).send('Data creacion was successful');
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem registerid your data')
    }
}

export const getPerson = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const person = await Person.find().where('userId').equals(decoded.id);
        if(person.length == 1){
            res.status(200).send(person);
        }else if(person.length == 0){
            res.status(204).send(' No content');
        }
    }catch(e){
        res.status(500).send('There was problem getting your account')
    }
}

export const getPersonById = async(req, res) =>{
    const { personId } = req.params;
    try{
        const person = await Person.findById(personId);
        res.status(200).json('Okay data obtained');
    }catch(e){
        res.status(500).send('There was problem getting your account')
    }
}

export const updatePersonById = async(req, res) =>{
    const { personId } = req.params;
    try{
        const {name, lastName, age} = req.body;
        const updatePerson = await Person.findByIdAndUpdate(personId, {name, lastName, age});
        res.status(201).send('Data update was successful');
    }catch(e){
        res.status(500).send('There was a problem update your data')
    }
}

export const deletePersonById = async(req, res) =>{
    const { personId } = req.params;
    try{
        const person = await Person.findById(personId);
        const deleteUser = await User.findByIdAndDelete(person.userId);
        const deletePerson = await Person.findByIdAndDelete(person._id);
        res.status(200).send('Account deleted')
    }catch(e){
        res.status(500).send('There was a problem delete your account')
    }
}