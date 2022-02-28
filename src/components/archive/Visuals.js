import React, { useState, useEffect } from 'react';
import {
    useQuery,
    gql
} from "@apollo/client"; 
import './Visuals.css';
import ImageList from './ImageList';
import Formats from './Formats';
import Topics from './Topics';
import Eras from './Eras';
import Search from './Search';

const Visuals= () => {
  const [cityID, setCityID] = useState(0);
  const [formatIDs, setFormatIDs] = useState([]);
  const [topicIDs, setTopicIDs] = useState([]);
  const [eraIDs, setEraIDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [numImages, setNumImages] = useState(0);

  const onCityChange = (event) => {
    setCityID(parseInt(event.target.value));
  }

  const GET_IMAGE_LIST = gql`
    query getImages ($city_id: Int, 
      $media_format_ids: [Int],
      $topic_ids: [Int],
      $era_ids: [Int],
      $search_term: String
      ) {
      visualRecord (cityId: $city_id, 
        mediaFormatIds: $media_format_ids,
        topicIds: $topic_ids,
        eraIds: $era_ids,
        searchTerm: $search_term
        ) {
        slug
        title
        description
        creationYear
        streetAddress
        city {
          title
        }
        source {
          title
        }
        district {
          title
        }
      }      
    }
  `;

  const { loading, error, data } = useQuery(
    GET_IMAGE_LIST, { variables: { 
      city_id: cityID, 
      media_format_ids: formatIDs,
      topic_ids: topicIDs,
      era_ids: eraIDs,
      search_term: searchTerm
    } }
  );

  useEffect(() => {
    if (typeof data !== 'undefined') {
      setNumImages(data.visualRecord.length);
      // console.log('formatIDs: ' + formatIDs);
      // console.log('topicIDs: ' + topicIDs);
    }
  }, [data])

  const CITY_RADIO = [
    { ID: "city-albany", value: 5, label: "Albany"},
    { ID: "city-kingston", value:3, label: "Kingston"},
    { ID: "city-newburgh", value: 2, label: "Newburgh"},
    { ID: "city-stuytown", value: 4, label: "Stuyvesant Town"},
    { ID: "city-other", value:6, label: "Other"},
    { ID: "city-all", value: 0, label: "All"},
  ];

  const cities = CITY_RADIO.map((city) => {
    return (
      <li key={city.ID}>
        <input type="radio" name="city"
          id={city.ID} value={city.value}
          checked={ cityID === city.value } 
          onChange={onCityChange} 
        />
        <label htmlFor={city.ID}>{city.label}</label>
      </li>
    )    
  });

  return (
    <div> 
      <header className="basic-page">
        <h1>The Visual Record</h1>
        <h4>{numImages} Images | Filter Images</h4>
      </header>

      <div className="filters">

        <div>
          <h4>Era</h4>
          <Eras
            eraIDs = {eraIDs}
            setEraIDs = {setEraIDs}
          />
        </div>

        <div>
          <h4>Cities</h4>
          <ul className="filter-set">
            { cities }
          </ul>
        </div>

        <div>
          <h4>Topic</h4>
          <Topics
            topicIDs = {topicIDs}
            setTopicIDs = {setTopicIDs}
          />
        </div>

        <div>
          <h4>Format</h4>
          <Formats
            formatIDs = {formatIDs}
            setFormatIDs = {setFormatIDs}
          />
        </div>

        <div>
          <h4>Search</h4>
          <Search
            setSearchTerm= {setSearchTerm}
          />
        </div>

      </div>

      <ImageList 
        loading = {loading}
        error = {error}
        data = {data}
        />
    </div> 
  );
}

export default Visuals;
