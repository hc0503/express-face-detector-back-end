var Sequelize = require('sequelize')

var attributes = {
    userid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.INTEGER,
    },
    gender: {
        type: Sequelize.STRING,
    },
    filename: {
        type: Sequelize.STRING,
    }
}

var options = {
    freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options