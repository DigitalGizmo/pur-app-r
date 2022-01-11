import React from 'react';


// import {
//     // ApolloClient,
//     // InMemoryCache,
//     // ApolloProvider,
//     useQuery,
//     gql
// } from "@apollo/client"

// //   const client = new ApolloClient({
// //     uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/',
// //     cache: new InMemoryCache()
// //   });

// const ALL_IMAGES = gql`
//   query getImages {
//     all_images {
//       slug
//     }
//   }
// `
// const { loading, error, data } = useQuery(ALL_IMAGES);

  // client
  //   .query({
  //       query: gql `
  //           query getImages {
  //             all_images{
  //               slug
  //             }
  //           }
  //       `
  //   })
  //   .then(result => console.log(result.data.all_images));

// const Visuals = () => {

//   const { loading, error, data } = useQuery(ALL_IMAGES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <div>
//       <p>Found { this.data.all_images.length} images</p>

//     </div>
//   );

// }

class Visuals extends React.Component {

    render() {
        return (
            <div>
                <p>Hello Apollo!</p>
                <p>Found </p>
            </div>
        );
    }
}

export default Visuals;
