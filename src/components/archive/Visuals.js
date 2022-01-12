import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"
import './Visuals.css';


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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // return data.all_images.map(({ id, slug, title }) => (
  const images = data.all_images.map(({ id, slug, title }) => {
    return (
      <figure 
        className="images-menu-item"
        key={id}
        >
          <img className="menu-image" 
                src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${slug}-tn.jpg`}
                alt={title}
          />
          <figcaption className="menu-title">
            -- { title}
          </figcaption>
      </figure>
    )
  });

  return (
    <div>
      <p>Hello Apollo!</p>
      <p>Found function based component</p>
      <div className="images-menu">{images}</div>
    </div>
  );
}

export default Visuals;
