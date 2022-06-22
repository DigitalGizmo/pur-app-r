import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const PlacesMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('places');
  }, [])

  return (
    <div className="short-page">
      <header className="basic-page">
        <h1>Place-Based Explorations</h1>
      </header>
      <ul className="list-menu">
        <li><Link to="/places/stuy-stroll">Stroll By: The Gas House District - 1st Avenue &amp; 14th Street</Link></li>
        <li><Link to="/places/newburgh">Newburgh from the Planner&rsquo;s Perspective</Link></li>
        <li><Link to="/places/kingston">Kingston: Best Laid Plans&hellip;</Link> <span>(NB: this feature is still in the early stages of development)</span></li>
        <li><a href="http://dev.picturingurbanrenewal.org/wireframe/city-stories/then-now.html">Kingston: Before and After</a></li>
        <li className='dim-some'>Stroll By: Albany</li>
        <li className='dim-some'>Stroll By: Newburgh</li>
        <li className='dim-some'>Stroll By: Kingston</li>
        {/* <li className='dim-some'>Albany: Construction Stop-action Animation</li> */}
        {/* <li className='dim-some'>Stuyvesant Town: Construction Stop-action Animation</li> */}
        <li className='dim-some'>Albany: Who Built the Empire State Plaza?</li>
        <li className='dim-some'>Where Did They Go?: Displaced Tenants and Businesses</li>
      </ul>
    </div>
  )
}

export default PlacesMenu;