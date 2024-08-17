const saveContact = require('../controllers/controller')
const express = require('express')
const router = express.Router()


router.post('/contact', saveContact);

// route/signup-route.js
 
 
module.exports = (app) => {
    app.use(router);  // Attach the router to the app
};
