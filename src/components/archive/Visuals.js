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
        <h4># Images | Filter Images</h4>
      </header>

      <div className="filters">

      <div>
        <h4>Era</h4>
        <ul class="filter-set">
          <li>
            <input type="checkbox" id="era-1940s" name="1940s"/>
            <label for="era-1940s">1940s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1950s" name="1950s"/>
            <label for="era-1950s">1950s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1960s" name="1960s"/>
            <label for="era-1960s">1960s</label>
          </li>
          <li>
            <input type="checkbox" id="era-1970s" name="1970s"/>
            <label for="era-1970s">1970s</label>
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
          <ul class="filter-set">
            <li>
              <input type="checkbox" id="topic-demolition" name="demolition"/>
              <label for="topic-demolition">Demolition</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-plans"/>
              <label for="topic-plans">Plans</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-people"/>
              <label for="topic-people">People/Daily Life</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-arch"/>
              <label for="topic-arch">Architecture</label>
            </li>
            <li>
              <input type="checkbox" id="" name="topic-before"/>
              <label for="topic-before">Before Redevelopment</label>
            </li>
          </ul>
        </div>

        <div>
          <h4>Format</h4>
          <ul class="filter-set">
            <li>
              <input type="checkbox" id="format-photos" name="photos"/>
              <label for="format-photos">Photographs</label>
            </li>
            <li>
              <input type="checkbox" id="format-graphics" name="graphics"/>
              <label for="format-graphics">Graphics/Ephemera</label>
            </li>
            <li>
              <input type="checkbox" id="format-drawings" name="drawings"/>
              <label for="format-drawings">Architectural Drawings</label>
            </li>
            <li>
              <input type="checkbox" id="format-maps" name="maps"/>
              <label for="format-maps">Maps</label>
            </li>
            <li>
              <input type="checkbox" id="format-docs" name="documents"/>
              <label for="format-docs">Documents</label>
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
