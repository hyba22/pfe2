const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts={}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey="session"

module.exports = passport =>{
    passport.use(new JwtStrategy(opts , (jwt_payload , done)=>{
        Users.findById(jwt_payload.id).then(user =>{
            if (user){
                console.log(user);
                return done (null , user)
            }
            else {
                return done(null , false)
            }
        }).catch(err => console.error(err))
    }))
}