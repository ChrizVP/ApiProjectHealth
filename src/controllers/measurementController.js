import { where } from '../models/weightModel';

const Weight = require('../models/weightModel');
const Water = require('../models/waterModel');
const  HeartRate = require('../models/heartRateModel');
const config = require('../middlewares/config');
const jwt = require('jsonwebtoken');


export const createWeight = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const {value, date} = req.body;
        const weight = new Weight({ 
            value, 
            date,  
            userId : decoded.id 
        });
        const saveWeight = await weight.save();
        res.status(200).send('Creacion of weight was successful');
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem registerid your weight')
    }
}

export const getWeight = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const weight = await Weight.findOne().sort({$natural:-1}).limit(1).where('userId').equals(decoded.id);
        res.status(200).send(weight);
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem obtained your weight')
    }
}

export const createWater = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const {value, date} = req.body;
        const _date = new Date();
        console.log("===============");
        const _water = await Water.findOne().where('userId').equals(decoded.id);
        
        console.log("aqui llegue");
        if(_water == null){
            const water = new Water({ 
                value, 
                date,  
                userId : decoded.id 
            });
            const saveWater = await water.save();
            res.status(200).send('Creacion of water was successful');
        }else{
            const updateWater = await Water.findByIdAndUpdate(_water._id, {value, date});
            res.status(200).send('Update was successful');
        }
        
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem registerid your water')
    }
}



export const createHeartRate = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const {value, date} = req.body;
        console.log(req.body);
        const heartRate = new HeartRate({ 
            value, 
            date,  
            userId : decoded.id 
        });
        const saveWater = await heartRate.save();
        res.status(200).send('Creacion of heart rate was successful');
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem registerid your heart rate')
    }
}

export const getHeartRate = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const weight = await HeartRate.findOne().sort({$natural:-1}).limit(1).where('userId').equals(decoded.id);
        res.status(200).send(weight);
    }catch(e){
        console.error(e)
        res.status(500).send('There was a problem obtained your weight')
    }
}