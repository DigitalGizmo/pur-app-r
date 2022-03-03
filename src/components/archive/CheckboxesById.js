import React from 'react';

const CheckboxesById = ({itemIDs, setItemIDs, itemArray}) => {
  
  const onItemChange = (event) => {
    event.preventDefault();
    const newTopicIDs = getNewChosenArray(event, itemIDs);
    // console.log('topics: ' + newTopicIDs);
    setItemIDs(newTopicIDs);
  } 

  const getNewChosenArray = (event, idArray) => {
    event.preventDefault();
    let newIdArray = [...idArray];
    if (event.target.checked){
      newIdArray = [...idArray, parseInt(event.target.value)];
    } else {
      const indexToRemove = idArray.indexOf(parseInt(event.target.value));
      newIdArray.splice(indexToRemove, 1);
    }
    return newIdArray;
  } 
  
  const isItemChecked = (itemID) => 
    itemIDs.includes(itemID) ? true : false;

  const clearItems = () => {
    setItemIDs([]);
  }

  const items = itemArray.map((item, index) => {
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
        >Reset (show all)</button>
      </li>           
    </ul>
  );

}

export default CheckboxesById;