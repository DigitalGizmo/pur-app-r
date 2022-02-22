import React, { useState, useEffect } from 'react';
import {
    useQuery,
    gql
} from "@apollo/client"; 
import './Visuals.css';
import ImageList from './ImageList';

const Visuals= () => {
  const [cityID, setCityID] = useState(0);
  const [formatIDs, setFormatIDs] = useState([]);
  const [numImages, setNumImages] = useState(0);

  const onCityChange = (event) => {
    setCityID(parseInt(event.target.value));
  }

  const onFormatChange = (event) => {
    event.preventDefault();
    let newFormatIDs = [...formatIDs];
    if (event.target.checked){
      newFormatIDs = [...formatIDs, parseInt(event.target.value)];
    } else {
      const indexToRemove = formatIDs.indexOf(parseInt(event.target.value));
      newFormatIDs.splice(indexToRemove, 1);
    }
    setFormatIDs(newFormatIDs);
  } 

  const isFormatChecked = (formatID) => 
    formatIDs.includes(formatID) ? true : false;

  const clearFormats = () => {
    setFormatIDs([]);
  }

  const GET_IMAGE_LIST = gql`
    query getImages ($city_id: Int, $media_format_ids: [Int]) {
      visualRecord (cityId: $city_id, mediaFormatIds: $media_format_ids) {
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
    GET_IMAGE_LIST, { variables: { city_id: cityID, media_format_ids: formatIDs } }
  );

  useEffect(() => {
    if (typeof data !== 'undefined') {
      setNumImages(data.visualRecord.length);
      // console.log('formatIDs: ' + formatIDs);
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

  const FORMATS = [
    { ID: "format-photo", value: 1, label: "Photographs"},
    { ID: "format-graphgic", value: 2, label: "Graphics/Ephemera"},
    { ID: "format-maps", value: 3, label: "Maps"},
    { ID: "format-personal", value: 6, label: "Personal Documents"},
    { ID: "format-published", value: 7, label: "Published Docuements"},
    { ID: "format-legal", value: 8, label: "Legal Documents"},
  ];

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
    <div> 
      <header className="basic-page">
        <h1>The Visual Record</h1>
        <h4>{numImages} Images | Filter Images</h4>
      </header>

      <div className="filters">

      <div>
        <h4>Era</h4>
        <ul className="filter-set">
          <li>
            <input type="checkbox" id="era-1940s" name="1940s"
              disabled/>
            <label htmlFor="era-1940s">1940s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1950s" name="1950s"
              disabled/>
            <label htmlFor="era-1950s">1950s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1960s" name="1960s"
              disabled/>
            <label htmlFor="era-1960s">1960s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1970s" name="1970s"
              disabled/>
            <label htmlFor="era-1970s">1970s</label>
          </li>
        </ul>
      </div>


        <div>
          <h4>Cities</h4>
          <ul className="filter-set">
            { cities }
          </ul>
        </div>

        <div>
          <h4>Topic</h4>
          <ul className="filter-set">
            <li>
              <input type="checkbox" id="topic-demolition" name="demolition"
              disabled/>
              <label htmlFor="topic-demolition">Demolition</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-plans"
              disabled/>
              <label htmlFor="topic-plans">Plans</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-people"
              disabled/>
              <label htmlFor="topic-people">People/Daily Life</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-arch"
              disabled/>
              <label htmlFor="topic-arch">Architecture</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-before"
              disabled/>
              <label htmlFor="topic-before">Before Redevelopment</label>
            </li>
          </ul>
        </div>

        <div>
          <h4>Format</h4>
          <ul className="filter-set">
            { formats }
            <li>
              <button 
                onClick={ clearFormats }
                className="don-button"
              >Clear (show all)</button>
            </li>           
          </ul>
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
