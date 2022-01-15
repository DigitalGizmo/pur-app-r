import React from 'react'; // , { useState }
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    // useQuery,
    // gql
} from "@apollo/client"
import Visuals from './Visuals';

const client = new ApolloClient({
  uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/',
  cache: new InMemoryCache()
});

const GqlShell= () => {
  // const [cityID, setCityID] = useState(0);

  return (
    <div>
      <ApolloProvider client={client}>
        <Visuals  />
      </ApolloProvider>
    </div> 
  );
}

export default GqlShell;
