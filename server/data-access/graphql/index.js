

module.exports = (app) => {
    return (graphqlHTTP, buildSchema) => {
      app.use(
        "/graphql",
        graphqlHTTP({
          schema: require("./graphql.schema")(buildSchema),
          rootValue : require("./graphql.provider"),
          graphiql : true,
        })
      );
    };
  };
