import React, { useState } from 'react'; // , { useState }
import {
    useQuery,
    gql
} from "@apollo/client"; // , makeVar
import './Visuals.css';
import ImageList from './ImageList';

const Visuals= () => {
  const [cityID, setCityID] = useState(0);
  // const [numImages, setNumImages] = useState(0);

  const onCityChange = (event) => {
    setCityID(parseInt(event.target.value));
  }

  const GET_IMAGE_LIST = gql`
    query getImages ($city_id: Int) {
      visualRecord (cityId: $city_id) {
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
    GET_IMAGE_LIST, { variables: { city_id: cityID } }
  );

  // console.log('num images: ' + data.visualRecord.length);

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
        <h4># Images | Filter Images </h4>
      </header>

      <div className="filters">
        <div>
          <p>Cities</p>
          <ul className="filter-set">
            { cities }
          </ul>
        </div>
      </div> {/* end filters */}

      <ImageList 
        loading = {loading}
        error = {error}
        data = {data}
        />
    </div> 
  );
}

export default Visuals;
