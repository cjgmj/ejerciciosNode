const { buildSchema } = require('graphql');

// La exclamación en String indica que es obligatorio, si el método no devuelve un String dará error
module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type RootQuery {
        hello: TestData!
    }

    schema {
        query: RootQuery
    }
`);
