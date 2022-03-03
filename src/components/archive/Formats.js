import React from 'react';
import CheckboxesById from './CheckboxesById';

const Formats = ({formatIDs, setFormatIDs}) => {
  const FORMATS = [
    { ID: "format-photo", value: 1, label: "Photographs"},
    { ID: "format-graphgic", value: 2, label: "Graphics/Ephemera"},
    { ID: "format-maps", value: 3, label: "Maps"},
    { ID: "format-documents", value: 6, label: "Documents"},
    { ID: "format-video", value: 5, label: "Video"},
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