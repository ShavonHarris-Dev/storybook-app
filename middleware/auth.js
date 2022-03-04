module.exports = {
    ensureAuth: function(req,res, next) {
        if(req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
            // if logged in great if not redirect to login
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('/dashboard')
        } else {
            return next()
        }
    }
    // if logged in dont go to the landing page
}

// next is just the function you call when youre donw doing whatever it is you want to do.
// middleware has access to both the req and res