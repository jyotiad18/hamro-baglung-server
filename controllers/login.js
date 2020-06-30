require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require('../models/').User;
const response = require("../helpers/response.js");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SecretKey;

exports.login = async (req, res, next) => {  
    let data = null;
    const user = req.body;
    if (!user ) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    if (!user.email || !user.password) {
      response.setError(400, "email or password must not be empty.");
      response.send(res);
    }    
    await User.findOne({
        where: {
            email: user.email
        }
    })
    .then((resp) => {
            if (resp != null) {
                data = resp.dataValues;
                return bcrypt.compareSync(user.password, data.password);                              
            }
            else {
                response.setError(401, 'email and password is not valid.');
                response.send(res);
            }
        }) 
        .then(resp => {
            delete data.password;
            const token = jwt.sign(data.email, secretKey, {});            
            response.setSuccess(200, {
                'token': token,
                'user': data
            });
        })
        .catch((err) => {
            response.setError(400, err.messag);
            
        });    
    response.send(res);
};

