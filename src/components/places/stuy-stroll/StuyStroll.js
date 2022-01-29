import React, { useState } from 'react'; // , { useState }
import {
    useQuery,
    gql,
} from "@apollo/client"; 
import StuyFirst from './StuyFirst';
import "./StuyStroll.css";

const StuyStroll = () => {
  const [partID, setPartID] = useState(2);

  const GET_HOTSPOTS = gql`
    query getHotspots ($interactive_part_id: Int){
      hotspots(interactive_part_id: $interactive_part_id){
        title
        blurb
        text_percent
        hotspot_x
        hotspot_y
        hotspot_r
        more
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_HOTSPOTS, { variables: { interactive_part_id: partID } }
  );

  return (
    <div className="menu-page"> {/*Don cheating and borrowing menu-page */}
      <header>
        <h2>Stroll By: 1st Avenue and 14th Street</h2>
      </header>

      <StuyFirst 
        loading = {loading}
        error = {error}
        data = {data}
      />

    </div>
  );
}

export default StuyStroll;