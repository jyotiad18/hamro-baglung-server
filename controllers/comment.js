const Comment = require('../models/').Comment;
const response = require("../helpers/response.js");

exports.findAll = async (req, res) => {
    await Comment.findAll()
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
    const comment = req.body;
    if (!comment) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    await Comment.create(comment)
        .then((resp) => { response.setSuccess(200, resp); })
        .catch((err) => {
            response.setError(
                400,
                err.message
            );
        });
    response.send(res);
};