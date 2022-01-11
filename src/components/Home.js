import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return (
      <div>
      <h2>Home page</h2>
        <ul>
            <li><Link to="/people/haines-dauner">Haines-Dauner</Link></li>
            <li><Link to="/places/newburgh">Newburgh</Link></li>
            <li><Link to="/archive/visuals">Visuals</Link></li>
          </ul>  
      </div>
    );
  } // end render
} // end class

export default Home;
