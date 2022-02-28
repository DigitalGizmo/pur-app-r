import React from 'react';
import CheckboxesById from './CheckboxesById';

const Topics = ({topicIDs, setTopicIDs}) => {
  
  const ITEMS = [
    { ID: "topic-architecture", value: 4, label: "Pre-Demolition"},
    { ID: "topic-planning", value: 15, label: "Planning"},
    { ID: "topic-daily-life", value: 3, label: "People, Daily Life"},
    { ID: "topic-demolition", value: 1, label: "Demolition"},
    { ID: "topic-reconstruction", value: 5, label: "Reconstruction"},
  ];

  return (
    <CheckboxesById
      itemIDs={topicIDs}
      setItemIDs={setTopicIDs}
      itemArray={ITEMS}
    />

  );

}

export default Topics;