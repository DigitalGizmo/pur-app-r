import React from 'react'; // , { useState }
import {
    // ApolloClient,
    // InMemoryCache,
    // ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"; // , makeVar
import './Visuals.css';
import ImageList from './ImageList';

const Visuals= () => {
  // const [cityID, setCityID] = useState(0);
  // const cityIdVar = makeVar([]);
  // cityIdVar([2]);
  // console.log(cityIdVar);

  const { loading, error, data } = useQuery(gql`
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
  `, {city_id: 1}
  );

  return (
    <div>
      <h2>The Visual Record</h2>
      <h3># Images | Filter Images </h3>

      <div className="filters">
        <div>
          <p>Cities</p>
          <ul className="filter-set">
            <li>
              <input type="radio" id="city-albany" name="city" value="5"
                v-model="city_id_ref" />
              <label htmlFor="city-albany">Albany</label>
            </li>
            <li>
              <input type="radio" id="city-kingston" name="city" value="3"
                v-model="city_id_ref" />
              <label htmlFor="city-kingston">Kingston</label>
            </li>
            <li>
              <input type="radio" id="city-newburgh" name="city" value="2"
                v-model="city_id_ref" />
              <label htmlFor="city-newburgh">Newburgh</label>
            </li>
            <li>
              <input type="radio" id="city-stuytown" name="city" value="4"
                v-model="city_id_ref" />
              <label htmlFor="city-stuytown">Stuyvesant Town</label>
            </li>
            <li>
              <input type="radio" id="city-other" name="city" value="6"
                v-model="city_id_ref" />
              <label htmlFor="city-other">Other</label>
            </li>
            <li>
              <input type="radio" id="city-other" name="city" value="null"
                v-model="city_id_ref" />
              <label htmlFor="city-other">All</label>
            </li>
          </ul>
        </div> {/* end cities */}
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
