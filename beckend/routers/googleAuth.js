const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Redirect or return token
        res.redirect(`http://localhost:3001/user-form`);
    }
);

module.exports = router;
