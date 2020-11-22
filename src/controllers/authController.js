
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const config = require('../middlewares/config')




export const signup = async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        user.password = await user.encryptPassword(password);
        await user.save();
        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 600
        });
        
        res.status(200).json({ auth: true, token });        
    }catch(e){
        res.status(500).send('There was a problem registerin your account');
    }

}

export const signin = async(req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email })
        if(!user){
            return res.status(404).send("Then email doesn't exists")
        }
        const validPassword = await user.validatePassword(req.body.password, user.password);
        if(!validPassword){
            return res.status(401).send({ auth: false, token: null});
        }
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 600
        });
        res.status(200).json({ auth: true, token});
    }catch(e){
        res.status(500).send('There was a problem signin');
    }
    
}

export const verifySession = async(req, res) =>{
    res.status(200).send("Sission verified!");
}

export const getUser = async(req, res) =>{
    try{
        const token = req.headers['x.access-token'];
        const decoded = await jwt.verify(token, config.secret);
        const user = await User.findById(decoded.id);
        res.status(200).send(user);
    }catch(e){
        res.status(500).send('There was problem getting your account')
    }
}

export const logout = async(req, res) => {
    res.status(200).send({
        auth: false, 
        token: null
    });
}

