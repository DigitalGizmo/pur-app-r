import React from 'react';
import CheckboxesById from './CheckboxesById';

const Formats = ({formatIDs, setFormatIDs}) => {
  const FORMATS = [
    { ID: "format-photo", value: 1, label: "Photographs"},
    { ID: "format-graphgic", value: 2, label: "Graphics/Ephemera"},
    { ID: "format-maps", value: 3, label: "Maps"},
    { ID: "format-personal", value: 6, label: "Personal Documents"},
    { ID: "format-published", value: 7, label: "Published Docuements"},
    { ID: "format-legal", value: 8, label: "Legal Documents"},
  ];

  return (
    <CheckboxesById
      itemIDs={formatIDs}
      setItemIDs={setFormatIDs}
      itemArray={FORMATS}
    />

  );

}

export default Formats;