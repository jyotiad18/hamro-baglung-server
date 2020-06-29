
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        total: DataTypes.INTEGER
    }, {});
    Like.associate = function (models) {
        models.Like.belongsTo(models.PostDetail, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });       
    };
    return Like;
};