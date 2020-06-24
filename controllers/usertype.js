const UserType = require("../models/usertype.js");
const response = require("../helpers/response.js");

exports.create = (req, res, next) => {
    if (!req.body) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }        
    const usertype = {
        type: req.body.type,
        description: req.body.description
    };
    UserType.create(usertype, (err, data) => {        
        if (err) {
            response.setError(
                400,
                err.message || "Some error occurred while creating the usertype."
            );
        }
        else {
            response.setSuccess(200, data);
        }
        response.send(res);
    });
};


exports.findAll = (req, res) => {
   
    UserType.getAll((err, data) => {
         console.log(err, data);
        if (err) {
          response.setError(
            400,
            err.message || "Some error occurred while creating the usertype."
          );
        } else {
          response.setSuccess(200, data);
        } 
        response.send(res);
    });
    
};

exports.findOne = (req, res) => {
    UserType.findById(req.params.usertype_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                response.setError(400, `Not found usertype with id ${req.params.usertype_id}.`);               
            } else {
                response.setError(
                  500,
                  `Error retrieving usertype with id ${req.params.usertype_id}.`
                );                
            }
        } else response.setSuccess(200, data);
        response.send(res);
    });
    
};

exports.update = (req, res) => {    
    if (!req.body) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }

    UserType.updateById(
        req.params.usertype_id,
        new Customer(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    response.setError(
                        400,
                        `Not found usertype with id ${req.params.usertype_id}.`
                    );
                } else {
                    response.setError(
                        500,
                        `Error updating usertype with id ${req.params.usertype_id}.`
                    );
                }
            } else response.setSuccess(200, data);
            response.send(res);
        }
    );
};

exports.delete = (req, res) => {
    UserType.remove(req.params.usertype_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                response.setError(
                    400,
                    `Not found usertype with id ${req.params.id}.`
                );
            } else {
                response.setError(
                    500,
                    `Error deleting usertype with id ${req.params.id}.`
                );
            }
        } else response.setSuccess(200);
      response.send(res);
    });
};
