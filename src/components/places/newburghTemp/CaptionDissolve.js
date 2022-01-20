import React from "react";
import { InView } from 'react-intersection-observer';

// Replaced by in-line map in Newburgh.js

     // <CaptionDissolve 
      //   key={ caption.label } 
      //   caption={ caption}  
      //   onChangeImage={ onChangeImage }
      //   index = { index }
      // />

const CaptionDissolve = ({caption, onChangeImage, index}) => {

  return (
    <InView 
      as="div" 
      onChange={(inView, entry) => { 
        console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + index);
        onChangeImage(inView, index); 
      }}>
        <h4>{caption.title}</h4>
        {caption.text}
    </InView>          
  )
}

export default CaptionDissolve;