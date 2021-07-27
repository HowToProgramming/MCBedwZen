const graphql = require('graphql')
const { GraphQLID } = graphql
const {TwitterPost, twitterPostExample} = require("./dataTypes")

const RootQuery = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        Post: {
            type: TwitterPost,
            args: {
                postID: {type: GraphQLID},
            },
            resolve: (parent, args) => {
                const { postID } = args
                return twitterPostExample.find((post) => {
                    return post.postID == postID
                })
            }
        }
    })
})


module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
})