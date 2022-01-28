import React, { useState } from 'react'; // , { useState }
import {
    // ApolloClient,
    // InMemoryCache,
    // ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"; // , makeVar
import MainNav from '../common/MainNav';
import './Visuals.css';
import ImageList from './ImageList';

const Visuals= () => {
  const [cityID, setCityID] = useState(0);

  const onCityChange = (event) => {
    setCityID(parseInt(event.target.value));
  }

  const GET_IMAGE_LIST = gql`
    query getImages ($city_id: Int) {
      all_images(city_id: $city_id) {
        id
        slug
        title
        description
        creation_year
        source_title
        city
        district_title
        street_address
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_IMAGE_LIST, { variables: { city_id: cityID } }
  );

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
      <MainNav />
      <h2>The Visual Record</h2>
      <h3># Images | Filter Images </h3>

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
