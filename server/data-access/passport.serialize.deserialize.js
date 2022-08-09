
module.exports = (userModel)=>{
  return (passport) =>{
    passport.serializeUser((user, done) => {
      console.log("serializing user", user);
      const { _id } = user;
      done(null, _id);
    });
    passport.deserializeUser((id, done) => {
      userModel
        .findOne({ _id: id },["-hashed_password"])
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((err) => {
          done(err);
        });
    });  
  }
}