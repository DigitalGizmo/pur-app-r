import React from 'react';
import {getNewChosenArray} from '../common/Utility';


const Topics = ({itemIDs, setItemIDs}) => {
  
  const ITEMS = [
    { ID: "topic-architecture", value: 4, label: "Architecture"},
    { ID: "topic-contract-sale", value: 11, label: "Contract Sale"},
    { ID: "topic-demolition", value: 1, label: "Demolition"},
    { ID: "topic-deterioration", value: 9, label: "Deterioration"},
    { ID: "topic-preservation", value: 8, label: "Historic Preservation"},
    { ID: "topic-opposition", value: 12, label: "Opposition to urban renewal plans or relocation"},
    { ID: "topic-daily-life", value: 3, label: "People, Daily Life"},
    { ID: "topic-planning", value: 15, label: "Plannning"},   
    { ID: "topic-acquisition", value: 10, label: "Property Acquisition"}, 
    { ID: "topic-reconstruction", value: 5, label: "Reconstruction"},       
    { ID: "topic-relocation", value: 6, label: "Relocation of residents or businesses"},
    { ID: "topic-discrimination", value: 14, label: "Residential discrimination"},
    { ID: "topic-support", value: 13, label: "Supports urban renewal"},
    { ID: "topic-outreach", value: 7, label: "Urban renewal publicity and outreach"}, 
    { ID: "topic-vision", value: 2, label: "Vision for Redevelopment"},  

  ];

  const onItemChange = (event) => {
    event.preventDefault();
    const newTopicIDs = getNewChosenArray(event, itemIDs);
    // console.log('topics: ' + newTopicIDs);
    setItemIDs(newTopicIDs);
  } 

  const isItemChecked = (itemID) => 
    itemIDs.includes(itemID) ? true : false;

  const clearItems = () => {
    setItemIDs([]);
  }

  // const items = checkboxListById(FORMATS);
  // I don't think I can move this out to utility because
  // onFormatChange seems to need to be specific to
  // this list type
  const items = ITEMS.map((item, index) => {
    return (
      <li key={index}>
        <input type="checkbox" name="items"
          id={item.ID} value={item.value}
          checked={ isItemChecked(item.value) } 
          onChange={onItemChange} 
        />
        <label htmlFor={item.ID}>{item.label}</label>
      </li>
    )    
  });

  return (
    <ul className="filter-set">
      { items }
      <li>
        <button 
          onClick={ clearItems }
          className="don-button"
        >Clear (show all)</button>
      </li>           
    </ul>
  );

}

export default Topics;