import React from 'react';
import {getNewChosenArray} from '../common/Utility';


const Formats = ({formatIDs, setFormatIDs}) => {
  const FORMATS = [
    { ID: "format-photo", value: 1, label: "Photographs"},
    { ID: "format-graphgic", value: 2, label: "Graphics/Ephemera"},
    { ID: "format-maps", value: 3, label: "Maps"},
    { ID: "format-personal", value: 6, label: "Personal Documents"},
    { ID: "format-published", value: 7, label: "Published Docuements"},
    { ID: "format-legal", value: 8, label: "Legal Documents"},
  ];

  const onFormatChange = (event) => {
    event.preventDefault();
    const newFormatIDs = getNewChosenArray(event, formatIDs);
    setFormatIDs(newFormatIDs);
  } 

  const isFormatChecked = (formatID) => 
    formatIDs.includes(formatID) ? true : false;

  const clearFormats = () => {
    setFormatIDs([]);
  }

  // const formats = checkboxListById(FORMATS);
  // I don't think I can move this out to utility because
  // onFormatChange seems to need to be specific to
  // this list type
  const formats = FORMATS.map((format, index) => {
    return (
      <li key={index}>
        <input type="checkbox" name="formats"
          id={format.ID} value={format.value}
          checked={ isFormatChecked(format.value) } 
          onChange={onFormatChange} 
        />
        <label htmlFor={format.ID}>{format.label}</label>
      </li>
    )    
  });

  return (
    <ul className="filter-set">
      { formats }
      <li>
        <button 
          onClick={ clearFormats }
          className="don-button"
        >Clear (show all)</button>
      </li>           
    </ul>
  );

}

export default Formats;