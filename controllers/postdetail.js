const PostDetail = require('../models/').PostDetail;
const response = require("../helpers/response.js");

exports.findAll = async (req, res) => {
    await PostDetail.findAll()
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
    const postdetail_id = req.params.postdetail_id;
    await PostDetail.findOne({
        where: {
            id: postdetail_id
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

exports.create = async (req, res, next) => {
    const postdetail = req.body;
    if (!postdetail) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    await PostDetail.create(postdetail)
        .then((resp) => { response.setSuccess(200, resp); })
        .catch((err) => {
            response.setError(
                400,
                err.message
            );
        });
    response.send(res);
};

exports.update = async (req, res) => {
    const postdetail = req.body;
    if (postdetail) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    const postdetail_id = req.params.postdetail_id;
    await PostDetail
        .update(postdetail, {
            where: {
                id: PostDetail_id,
            }
        })
        .then((resp) => {
            response.setSuccess(200, { postdetail_id, ...postdetail });
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
    const postdetail_id = req.params.postdetail_id;
    await PostDetail
        .findByPk(postdetail_id)
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
