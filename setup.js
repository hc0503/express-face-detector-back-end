var cleanup = require('./utils/cleanup.js')

cleanup(function() {
    console.log('Setup finished.')
    process.exit()
})