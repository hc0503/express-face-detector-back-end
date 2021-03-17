Model = require('../model/models.js')
uuid = require("uuid");

module.exports.uploadFace = function(req, res) {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            var filename = uuid.v4() + ".png";
            var newFace = {
                age: req.body.age,
                gender: req.body.gender,
                user_email: req.body.user_email,
                filename: filename
            }

            Model.Face.create(newFace)
                .then(function() {})
                .catch(function(error) {
                    req.flash('error', "Failes")
                })

            let picture = req.files.picture;
            picture.mv('./uploads/' + filename);
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: filename,
                    mimetype: picture.mimetype,
                    size: picture.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}