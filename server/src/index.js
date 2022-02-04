const { AppoloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new AppoloServer({typeDefs});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
 `);
});