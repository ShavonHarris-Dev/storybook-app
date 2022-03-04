const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc  Auth with Google 
//@route  GET/auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] } ))

// @desc  Google Auth callback
//@route GET/auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

// if it fails it will redirect to the root (login) and if it passes it will redirect to the dashboard

//@desc Logout user 
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router