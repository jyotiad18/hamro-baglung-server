
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {              
                notEmpty: true
            }
        },
        shortdescription: {
            type: DataTypes.STRING,           
            validation: {
                max: 200               
            }
        },
        description: {
            type: DataTypes.STRING            
        },
        years: DataTypes.INTEGER,
        tags: DataTypes.STRING,
        urllink: DataTypes.STRING,
        picturelink: DataTypes.STRING,
        creditby: DataTypes.STRING,
        publish: DataTypes.BOOLEAN
    }, {});
    Post.associate = function (models) {        
        models.Post.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.Post.belongsTo(models.Category, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.Post.hasMany(models.PostDetail);
    };
    return Post;
};