import React from 'react';
import './ImageList.css';
// import ImageCard from './ImageCard';

const ImageList = ({loading, error, data}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : { error.message } </p>;

  // return data.all_images.map(({ id, slug, title }) => (
  // const images = data.all_images.map((image) => {
  const images = data.visualRecord.map((image) => {
    return (
      <div >
        <img
          className="menu-image"
          alt="{title}"
          src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${image.slug}-tn.jpg`}
          />
        <figcaption class="menu-title">
          { image.title}
        </figcaption>        
      </div>
    )
    // return (
    //   <ImageCard 
    //     key={image.id} 
    //     image={image} />
    // ) 
  });

  return (
    <div>
      <div className="images-menu">{images}</div>
    </div>
  );
}

export default ImageList;