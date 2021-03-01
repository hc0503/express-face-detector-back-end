var passport = require('passport'),
    signupController = require('../controllers/signupController.js'),
    dashboardController = require('../controllers/dashboardController.js')

module.exports = function(express) {
    var router = express.Router()

    var isAuthenticated = function(req, res, next) {
        if (req.isAuthenticated())
            return next()
        req.flash('error', 'You have to be logged in to access the page.')
        res.redirect('/login')
    }

    router.get('/signup', signupController.show)
    router.post('/signup', signupController.signup)

    router.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
    }))

    router.get('/', function(req, res) {
        res.redirect('/dashboard')
    })

    router.get('/login', function(req, res) {
        res.render('login')
    })

    router.get('/dashboard', isAuthenticated, function(req, res) {
        res.render('dashboard')
    })

    router.get('/logout', function(req, res) {
        req.logout()
        res.redirect('/')
    })

    router.post('/uploadFace', dashboardController.uploadFace)

    return router
}