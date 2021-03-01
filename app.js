// application

var express = require('express'),
    app = express(),
    setupHandlebars = require('./app/setupHandlebars.js')(app),
    setupPassport = require('./app/setupPassport'),
    flash = require('connect-flash'),
    appRouter = require('./app/routers/appRouter.js')(express),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    jsonParser = bodyParser.json()

var port = process.env.PORT || 3000

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use(express.static('app/public'));

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

app.use(jsonParser)
app.use(bodyParser.urlencoded({
    extended: true
}))

const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());
app.use(morgan('dev'));

setupPassport(app)

app.use('/', appRouter)

// start app
app.listen(port)
console.log('Server started on port ' + port)

module.exports.getApp = app