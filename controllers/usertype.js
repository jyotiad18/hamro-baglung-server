const UserType = require('../models').UserType;
const response = require("../helpers/response.js");

exports.findAll = async (req, res) => {
  await UserType.findAll()
    .then((resp) => {
      response.setSuccess(200, resp);
    })
    .catch((err) => {
      response.setError(
        400,
        err.message || "Some error occurred while creating the category."
      );
    });
  response.send(res);
};

exports.findOne = async (req, res) => {
  const usertype_id = req.params.usertype_id;
  await UserType.findOne({
    where: {
      id: usertype_id,
    },
  })
    .then((resp) => {
      response.setSuccess(200, resp);
    })
    .catch((err) => {
      response.setError(
        400,
        err.message
      );
    });
  response.send(res);
};

exports.create = async (req, res, next) => {  
  if (!req.body) {
    response.setError(400, "Content can not be empty!");
    response.send(res);    
  } 
  const usertype = {
    type: req.body.type,
    description: req.body.description
  }

  await UserType.create(usertype)
    .then((resp) => {
      response.setSuccess(200, resp);
    })
    .catch((err) => {
      response.setError(400, err.message);
    });
  response.send(res);  
};

exports.update = async (req, res) => {
  if (!req.body) {
    response.setError(400, "Content can not be empty!");
    response.send(res);
  }
  const usertype_id = req.params.usertype_id;
  const usertype = {
    type: req.body.type,
    description: req.body.description
  }
  await UserType.update(usertype, { where: { id: usertype_id } })
    .then((resp) => {
      response.setSuccess(200, {'id': usertype_id, ...usertype });
    })
    .catch((err) => {
      response.setError(
        400,
        err.message
      );
    });    
  response.send(res);
};

exports.delete = async (req, res) => {
  const usertype_id = req.params.usertype_id;
  await UserType.findByPk(usertype_id)
    .then((resp) => {
      return resp.destroy();
    })
    .then((resp) => {
      response.setSuccess(200);
    })
    .catch((err) => {
      response.setError(
        400,
        err.message
      );
    });
  response.send(res);
};