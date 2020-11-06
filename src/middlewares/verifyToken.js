const jwt = require('jsonwebtoken')
const config = require('../middlewares/config')
const User = require('../models/userModel')

export const verifyToken = async (req, res, next) => {
    const token = req.headers['x.access-token'];
    if(!token){
        return res.status(401).send({
            auth: false,
            message: 'No token provided'
        });
    }
    try{
        const decoded = await jwt.verify(token, config.secret);
        req.userId = decoded.id;
        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });
        next();
    }
    catch (e) {
        return res.status(401).json({ message: "Unauthorized!" });
      }
}

