module.exports = (buildSchema) => {
  return buildSchema(`
  type userFields {
    firstname : String
    lastname : String
    email: String
  }
    type Query {
        getUser(email: String,  password: String): userFields
        
     } `);
};
