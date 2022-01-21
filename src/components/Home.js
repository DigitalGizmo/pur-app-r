import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return (
      <div>
      <h2>Home page</h2>
        <ul>
            <li><Link to="/people">Personal Stories</Link></li>
            <li><Link to="/places">Place-Based Explorations</Link></li>
            <li><Link to="/archive/visuals">Visuals</Link></li>
          </ul>  
      </div>
    );
  } // end render
} // end class

export default Home;
