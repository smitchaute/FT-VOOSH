const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Redirect or return token
        res.redirect(`https://ft-voosh-xl9m.vercel.app/?userId=${req.user?._id}&google=true`);
    }
);

module.exports = router;
