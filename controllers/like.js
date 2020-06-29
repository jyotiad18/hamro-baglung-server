const Like = require('../models/').Like;
const response = require("../helpers/response.js");

exports.findAll = async (req, res) => {
    await Like.findAll()
        .then(resp => {
            response.setSuccess(200, resp);
        })
        .catch(err => {
            response.setError(
                400,
                err.message
            );
        });
    response.send(res);
};

exports.create = async (req, res, next) => {
    let like = req.body;
    if (!like) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    const postdetail_id = req.body.PostDetailId;
    await Like.findOne({
        where: {
            id: postdetail_id
        }
    })
        .then(resp => {
            if (resp == null) {
                like.total = 1;
                 return Like.create(like);
            }
            else {
                like = resp.dataValues;
                like.total += 5;                               
                 return Like.update(like, {                   
                    where: {
                         id: like.id
                    }
                })
            }
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
