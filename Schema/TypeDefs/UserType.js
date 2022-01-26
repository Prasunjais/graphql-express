const graphql = require("graphql");

module.exports = new graphql.GraphQLObjectType({
  name: "User", // db table name
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    first_name: { type: graphql.GraphQLString },
    last_name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
  }),
});
