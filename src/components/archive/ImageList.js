import React, {useState} from 'react';
import './ImageList.css';
// import ImageCard from './ImageCard';
import FullEntry from './FullEntry';

const ImageList = ({loading, error, data}) => {
  const [fullEntryOn, setFullEntryOn] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  // ---- Handle slimpop --------
  function showFullEntry (index) {
    setCurrIndex(index);
    // console.log('currIndex: ' + currIndex);
    setFullEntryOn(true);
  }

  function closeFullEntry (event) {
    event.preventDefault()
    setFullEntryOn(false);
  }

  function nextEntry (event) {
    // Next if next exists
    event.preventDefault()
    if (images[currIndex + 1]) {
      setCurrIndex(currIndex + 1);
    }
  }

  function prevEntry (event) {
    event.preventDefault()
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1); 
    }
  }  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : { error.message } </p>;
 
  // return data.all_images.map(({ id, slug, title }) => (
  // const images = data.all_images.map((image) => {
  const images = data.visualRecord.map((image, index) => {
    return (
      <div key={image.slug}>
        <a href='/' onClick={e => { e.preventDefault(); showFullEntry(index);}}>
          <img
            className="menu-image"
            alt="{title}"
            src={`http://admin.picturingurbanrenewal.org/media/visuals/thumbpics/${image.slug}-tn.jpg`}
            />
          <figcaption className="menu-title">
            { image.title}
          </figcaption>
        </a>        
      </div>
    )
  });
  // return (
  //   <ImageCard 
  //     key={image.id} 
  //     image={image} />
  // ) 

  return (
    <div>
      <div className="images-menu">{images}</div>

      { fullEntryOn && 
        <FullEntry
          images = {data.visualRecord}
          currIndex = {currIndex}
          closeFullEntry = {closeFullEntry}
          nextEntry = {nextEntry}
          prevEntry = {prevEntry}
        />
      }

    </div>
  );
}

export default ImageList;