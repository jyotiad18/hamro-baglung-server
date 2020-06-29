const User = require('../models/').User;
const response = require("../helpers/response.js");
const hashpassword = require('../helpers/hashpassword.js');

exports.create = async (req, res, next) => {
    if (!req.body) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
  const user = {
            UserTypeId: req.body.usertypeid,
            email: req.body.email,
            password: hashpassword.setHash(req.body.password),
            fullname: req.body.fullname
  };  
   await User.findOne({
        where: { email: req.body.email }
      })
        .then((resp) => {            
          if (resp == null) {
             return User.create(user);
          }
          else {
              response.setError(401, 'email already exist.');
              response.send(res);
          }
      })
      .then((resp) => { response.setSuccess(200, resp); })
      .catch((err) => {
        response.setError(
          400,
          err.message || "Some error occurred while creating the usertype."
        );
      });       
    response.send(res);
};

exports.findAll = async(req, res) => {
    await User.findAll()
        .then(resp => {
            response.setSuccess(200, resp);
        })
        .catch(err => {
            response.setError(
            400,
            err.message || "Some error occurred while creating the usertype."
            );
        });
      response.send(res);   
};

exports.findOne = async(req, res) => {
    const user_id = req.params.user_id;
    await User.findOne({
            where: {
            id: user_id
            }
        })
        .then(resp => {
            response.setSuccess(200, resp);
        })
        .catch(err => {
            response.setError(
            400,
            err.message || "Some error occurred while creating the usertype."
            );
        });
      response.send(res);
};

exports.update = async(req, res) => {
    if (!req.body) {
      response.setError(400, "Content can not be empty!");
      response.send(res);
    }
    const user_id = req.params.user_id;
    const user = {
      usertype_id: req.body.usertype_id,
      email: req.body.email,
      password: hashpassword.setHash(req.body.password),
      fullname: req.body.fullname,
    };
    await User
      .update(user, {
        where: {
          id: user_id,
        },
      })
      .then((resp) => {
        response.setSuccess(200, {user_id, ...user});
      })
      .catch((err) => {
        response.setError(
          400,
          err.message || "Some error occurred while creating the usertype."
        );
      });
    response.send(res);
};

exports.delete = async(req, res) => {
    const user_id = req.params.user_id;
    await User
      .findByPk(user_id)
      .then((resp) => {
        return resp.destroy();
      })
      .then((resp) => {
        response.setSuccess(200);
      })
      .catch((err) => {
        response.setError(
          400,
          err.message || "Some error occurred while creating the usertype."
        );
      });
    response.send(res);    
};
