const View = require('../models/').View;
const response = require("../helpers/response.js");

exports.findAll = async (req, res) => {
    await View.findAll()
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
    let view = req.body;
    if (!view) {
        response.setError(400, "Content can not be empty!");
        response.send(res);
    }
    const postdetail_id = req.body.PostDetailId;
    await View.findOne({
        where: {
            id: postdetail_id
        }
    })
        .then(resp => {
            if (resp == null) {
                view.total = 1;
                return View.create(view);
            }
            else {
                view = resp.dataValues;
                view.total += 5;
                return View.update(view, {
                    where: {
                        id: view.id
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
