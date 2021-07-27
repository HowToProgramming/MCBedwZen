const { GraphQLObjectType, graphql, GraphQLString, GraphQLInt, GraphQLID } = require('graphql')

const twitterPostExample =  [
    {postID: "1", author: "HowToPlayLN", content: "WYSI", likes: 7, retweets: 2, replies: 7},
    {postID: "2", author: "Camellia", content: "07/27/2021", likes: 727, retweets: 277, replies: 772},
    {postID: "3", author: "guden", content: "instantly blocking anyone who says 727 or WYSI tomorrow for 24 hrs sry", likes: 10, retweets: 11, replies: 12},
    {postID: "4", author: "mint", content: "ChristianLatin cross | INTJ-A | Sagittarius | 33 years youngSmiling face with smiling eyes | Mother of threeGirlBoyBaby | PregnantPregnant woman | Vice Secretary of Oakville Golf Course Recreational Facility | I love my femboy husband @ayyOrca", likes: 100000, retweets: 10000, replies: 100},
]

// Build Database for something similar to twitter

const TwitterPost = new GraphQLObjectType({
    name: "post",
    fields: () => ({
        author: {type: GraphQLString},
        content: {type: GraphQLString},
        likes: {type: GraphQLInt},
        retweets: {type: GraphQLInt},
        replies: {type: GraphQLInt},
        postID: {type: GraphQLID}
    })
})

module.exports = { TwitterPost, twitterPostExample }