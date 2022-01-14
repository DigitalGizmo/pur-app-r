import React from 'react';
import './ImageList.css';

const ImageList = ({loading, error, data}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // return data.all_images.map(({ id, slug, title }) => (
  const images = data.all_images.map(({ id, slug, title }) => {
    return (
      <figure 
        className="images-menu-item"
        key={id}
        >
          <img 
            className="menu-image" 
            src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${slug}-tn.jpg`}
            alt={title}
          />
          <figcaption className="menu-title">
            { title}
          </figcaption>
      </figure>
    )
  });

  return (
    <div>
      <div className="images-menu">{images}</div>
    </div>
  );
}

export default ImageList;