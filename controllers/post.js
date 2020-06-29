const Post = require('../models/').Post;
const response = require("../helpers/response.js");

exports.create = async (req, res, next) => {
    const post = req.body;
    if (!post) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }                   
    await Post.create(post)                
        .then((resp) => { response.setSuccess(200, resp); })
        .catch((err) => {
            response.setError(
                400,
                err.message
            );
        });
    response.send(res);
};

exports.findAll = async (req, res) => {
    await Post.findAll()
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

exports.findOne = async (req, res) => {
    const post_id = req.params.post_id;
    await Post.findOne({
        where: {
            id: post_id
        }
    })
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

exports.update = async (req, res) => {
    const post = req.body;
    if (post) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    const post_id = req.params.post_id;    
    await Post
        .update(post , {
            where: {
                id: post_id,
            }
        })
        .then((resp) => {
            response.setSuccess(200, { post_id, ...post });
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
    const post_id = req.params.post_id;
    await Post
        .findByPk(post_id)
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
