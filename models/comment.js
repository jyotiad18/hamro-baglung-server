
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: DataTypes.STRING,
        publish: DataTypes.BOOLEAN
    }, {});
    Comment.associate = function (models) {
        models.Comment.belongsTo(models.PostDetail, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Comment;
};