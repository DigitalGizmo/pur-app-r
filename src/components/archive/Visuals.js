import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    // useQuery,
    gql
} from "@apollo/client"

  const client = new ApolloClient({
    uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/',
    cache: new InMemoryCache()
  });

  client
    .query({
        query: gql `
            query getImages {
              all_images{
                slug
              }
            }
        `
    })
    .then(result => console.log(result.data.all_images));

class Visuals extends React.Component {

    render() {
        return (
            <div>
                <p>Hello Apollo!</p>
            </div>
        );
    }
}

export default Visuals;
