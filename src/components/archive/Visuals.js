import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"
import './Visuals.css';
import ImageList from './ImageList';

const client = new ApolloClient({
  uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/',
  cache: new InMemoryCache()
});

const Visuals= () => {

  const { loading, error, data } = useQuery(gql`
    query getImages {
      all_images {
        id
        slug
        title
        description
        creation_year
        source_title
        city
        district_title
        street_address
      }
    }
  `
  );

  return (
    <div>
      <p>Hello from Visuals</p>
      <ImageList 
        loading = {loading}
        error = {error}
        data = {data}
      />
    </div>
  );
}

export default Visuals;
