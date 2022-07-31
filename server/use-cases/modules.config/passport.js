

//model
const userModel = require("../../data-access/model/user.model");

//callback
const localCallback = require("../../data-access/passport.local.strategy.callback");

// here we inject dependecies
module.exports = (local_strategy) => {
  // strategies  instance
const localStrategy = new local_strategy(
  { usernameField: "email", passwordField: "password" }, //bakit kasi wala to sa  documentation? it took my whole fucking day
  localCallback
);
  return (passport) => {
    passport.use("local_strategy", localStrategy);
    require("../../data-access/passport.serialize.deserialize")(userModel)(
      passport
    );
  };
};
