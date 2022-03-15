import React from 'react';
import CheckboxesById from './CheckboxesById';

const Eras = ({eraIDs, setEraIDs}) => {
  
  const ITEMS = [
    { ID: "era-1940s", value: 1, label: "Before 1940s"},
    { ID: "era-1940s", value: 2, label: "1940s"},
    { ID: "era-1950s", value: 3, label: "1950s"},
    { ID: "era-1960s", value: 4, label: "1960s"},
    { ID: "era-1970s", value: 5, label: "1970s"},
    { ID: "era-1970s", value: 6, label: "After 1970s"},
  ];

  return (
    <CheckboxesById
      itemIDs={eraIDs}
      setItemIDs={setEraIDs}
      itemArray={ITEMS}
    />

  );

}

export default Eras;