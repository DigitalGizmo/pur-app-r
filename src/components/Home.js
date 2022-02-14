import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return (
      <div>
        <header className="basic-page">
          <h1>Home page</h1>
        </header>
        <ul className="list-menu">
          <li><Link to="/cities">4 Cities / 4 Stories</Link></li>
          <li><Link to="/people">Personal Stories</Link></li>
          <li><Link to="/archive/visuals">Visual Record</Link></li>
          <li><Link to="/places">Place-Based Explorations</Link></li>
        </ul>  
      </div>
    );
  } // end render
} // end class

export default Home;
