
'use strict';
module.exports = (sequelize, DataTypes) => {
    const PostDetail = sequelize.define('PostDetail', {        
        description: DataTypes.STRING,
        picture: DataTypes.STRING,        
        creditby: DataTypes.STRING,
        publish: DataTypes.BOOLEAN
    }, {});
    PostDetail.associate = function (models) {
        models.PostDetail.belongsTo(models.Post, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });  
        models.PostDetail.hasMany(models.Like);
        models.PostDetail.hasMany(models.Comment);
        models.PostDetail.hasMany(models.View);
    };
    return PostDetail;
};