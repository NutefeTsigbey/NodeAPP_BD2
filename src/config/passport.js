const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const User = require("../models/User");


passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {

    // Se o email existe
    const user = await User.findOne({ email });
    if (!user) {
        return done(null, false, { message: "User not found" });
    } else {
        // Match Password User 
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user); // encontrou o usuário e senha
        } else {
            return done(null, false, { message: "Incorrect password" });
        }
    }
}));

// guardar a session no servidor

passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Quando esta logado verifica se tem autorização
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});
