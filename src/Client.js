import ApolloClient from 'apollo-boost';


const REACT_APP_GITHUB_KEY = "33511cb0ff676f2d0b7fbec9806f532024115f08";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${REACT_APP_GITHUB_KEY}`
  }
});

export default client;