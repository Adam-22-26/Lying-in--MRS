class SignupLogic {
  constructor(model) {
    this.User = model;
    this.data = "";
    this.email = {};
  }
  getUser({ email }) {
    this.email = email;
    try {
      const user = this.User.find({ email: this.email });
      return user;
    } catch (err) {
      return err;
    }
  }
  createUser(data) {
    console.log(data)
    const newUser = new this.User(
      data
    );
    try {
      newUser.save();
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = SignupLogic;
