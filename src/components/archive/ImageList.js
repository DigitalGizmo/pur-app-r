import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({loading, error, data}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // return data.all_images.map(({ id, slug, title }) => (
  const images = data.all_images.map((image) => {
    return  <ImageCard key={image.id} image={image} />;
  });

  return (
    <div>
      <div className="images-menu">{images}</div>
    </div>
  );
}

export default ImageList;