
'use strict';
module.exports = (sequelize, DataTypes) => {
    const View = sequelize.define('View', {
        total: DataTypes.INTEGER
    }, {});
    View.associate = function (models) {
        models.View.belongsTo(models.PostDetail, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return View;
};