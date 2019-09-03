var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const fetch = require('node-fetch');
const cors = require('cors');

// GraphQL schema
const schema = buildSchema(`
    type Query {
        news(country: String): [Items]
    },
    type Items {
        title: String,
        link: String
        }
`);

const getNews = function (args) {
    return fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7kBqeS0nh6Ejo_aFs_rI1PecfOwawclk&cx=004399504627790727017:nc67yhqclkg&q=${args.country}`)
        .then(data => data.json()).then(result => result.items);
};

// Root resolver
const root = {
    news: getNews
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));