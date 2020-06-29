const Category = require('../models').Category;
const response = require("../helpers/response.js");

exports.create = async (req, res, next) => {
  if (!req.body) {
    response.setError(400, "Content can not be empty!");
    response.send(res);
  }
  const category = {
    UserId: req.body.userid,
    type: req.body.type,
    description: req.body.description
  };        
  await Category.findOne({
    where: { type: req.body.type },
  })
    .then((resp) => {
      if (resp == null) {
        return Category.create(category);
      } else {
        response.setError(401, "type already exist.");
        response.send(res);
      }
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

exports.findAll = async (req, res) => {
   await Category.findAll()
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

exports.findByUser = async (req, res) => {
    const user_id = req.params.user_id;
    await Category.findAll({
        where: {
            userId: user_id
        }
    }).then((resp) => {
       response.setSuccess(200, resp);
     })
     .catch((err) => {
       response.setError(
         400,
         err.message || "Some error occurred while creating the category."
       );
     });
   response.send(res);
}

exports.findOne = async (req, res) => {
    const category_id = req.params.category_id;
   await Category.findOne({
     where: {
       id: category_id,
     },
   })
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

exports.update = async (req, res) => {
 if (!req.body) {
   response.setError(400, "Content can not be empty!");
   response.send(res);
 }
    const category_id = req.params.category_id;
    const category = {
    userId: req.body.userId,
    type: req.body.type,
    description: req.body.description,
    };
 await Category.update(category, {
   where: {
     id: category_id,
   },
 })
   .then((resp) => {
     response.setSuccess(200, { category_id, ...category });
   })
   .catch((err) => {
     response.setError(
       400,
       err.message || "Some error occurred while creating the usertype."
     );
   });
 response.send(res);
};

exports.delete = async (req, res) => {
  const category_id = req.params.category_id;
  await Category.findByPk(category_id)
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
