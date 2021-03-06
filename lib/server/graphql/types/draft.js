import GraphQLJSON from 'graphql-type-json';
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Draft',
  fields: {
    _id: {
      type: GraphQLID
    },
    itemId: {
      type: GraphQLID
    },
    userId: {
      type: GraphQLID
    },
    type: {
      type: GraphQLString
    },
    __v: {
      type: GraphQLInt
    },
    data: {
      type: GraphQLJSON
    },
    actions: {
      type: GraphQLJSON
    },
    schemaLinks: {
      type: GraphQLJSON
    }
  }
});
