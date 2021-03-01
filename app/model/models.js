var UserMeta = require('./User.js'),
    FaceMeta = require('./Face.js'),
    connection = require('../sequelize.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)
var Face = connection.define('faces', FaceMeta.attributes, FaceMeta.options)
    // you can define relationships here
User.sync();
Face.sync();
module.exports.User = User
module.exports.Face = Face