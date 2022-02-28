import React from 'react';
import CheckboxesById from './CheckboxesById';

const Cities = ({cityIDs, setCityIDs}) => {

  const ITEMS = [
    { ID: "city-stuytown", value: 4, label: "New York City"},
    { ID: "city-newburgh", value: 2, label: "Newburgh"},
    { ID: "city-kingston", value:3, label: "Kingston"},
    { ID: "city-albany", value: 5, label: "Albany"},
    { ID: "city-other", value:6, label: "Other"},
  ];
  return (
    <CheckboxesById
      itemIDs={cityIDs}
      setItemIDs={setCityIDs}
      itemArray={ITEMS}
    />

  );

}

export default Cities;