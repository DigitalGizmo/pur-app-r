import React from 'react';
import { Link } from 'react-router-dom';

const PeopleMenu = () => {
  return (
    <div>
      <header className="basic-page">
        <h1>Personal Stories</h1>
      </header>
      <ul className="list-menu">
        <li><Link to="/people/haines-dauner">Bob Haines &amp; Gene Dauner, One Step Ahead of the Wrecking Ball</Link></li>
        <li><Link to="/people/carrie-wilson">Carrie Wilson, A Homeowner &ldquo;by Sufferance and Permission&rdquo;</Link></li>
        <li><Link to="/people/joseph-resnick">Joseph Y. Resnick, I&rsquo;m for Joe</Link></li>
        <li><Link to="/people/jimmy-strawn">Jimmy Strawn, The Sultan of Swing</Link></li>
        <li><Link to="/people/george-raymond">George M. Raymond, A Passionate Believer in Cities</Link></li>
      </ul>
    </div>
  )
}

export default PeopleMenu;