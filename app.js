const express = require('express')
const {graphqlHTTP}= require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')

const app = express();

app.use(cors())
const gql = graphqlHTTP({
    schema, graphiql: true
})
app.get("/graphql", gql)
app.post("/graphql", gql)

app.listen(4000, () => {
    console.log("Now listening to request on port 4000 (localhost:4000)")
})

// man