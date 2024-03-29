import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    useQuery,
    gql
} from "@apollo/client"; 
import Eras from './Eras';
import Cities from './Cities';
import Topics from './Topics';
import Formats from './Formats';
import Search from './Search';
import ImageList from './ImageList';

const Visuals= () => {
  const [cityIDs, setCityIDs] = useState([]);
  const [formatIDs, setFormatIDs] = useState([]);
  const [topicIDs, setTopicIDs] = useState([]);
  const [eraIDs, setEraIDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [numImages, setNumImages] = useState(0);
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('visuals');
    document.title = 'Visuals';
  }, [changePageName])

  // useEffect(() => {
  //   document.title = 'Visual Record';
  // }, [])
  
  const GET_IMAGE_LIST = gql`
    query getImages ($city_ids: [Int], 
      $media_format_ids: [Int],
      $topic_ids: [Int],
      $era_ids: [Int],
      $search_term: String
      ) {
      visualRecord (cityIds: $city_ids, 
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
        usedIn
        usedInTitle
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
      city_ids: cityIDs, 
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

  return (
    <div> 
      <header className="basic-page">
        <nav>
          <p>
            <Link to="/">
              <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
              alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
            </Link> &gt; Visuals
          </p>
        </nav>
      </header>
      <h4 className="visuals-count">{numImages} Images | Filter Images</h4>

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
          <Cities
            cityIDs = {cityIDs}
            setCityIDs = {setCityIDs}
          />
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
