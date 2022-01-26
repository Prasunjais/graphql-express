const graphql = require("graphql");
const UserType = require("./TypeDefs/UserType");
const UserData = require("../MOCK_DATA.json");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new graphql.GraphQLList(UserType),
      args: { id: { type: graphql.GraphQLInt } },
      resolve(parent, args) {
        return UserData;
      },
    },
  },
});

const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: graphql.GraphQLString },
        last_name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString },
      },
      resolve(parent, args) {
        console.log("parent", parent);
        UserData.push({
          id: UserData.length + 1,
          ...args,
        });
        return args;
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
