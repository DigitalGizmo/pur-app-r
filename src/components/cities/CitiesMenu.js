import React, {useEffect, useContext, useState} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import PopShell from './PopShell';
import SubPopShell from './SubPopShell';

const CitiesMenu = () => {
  const { changePageName } = useContext(GlobalContext);
  const [popIsShowing, setPopIsShowing] = useState(false);
  const [bubblesToShow, setBubblesToShow] = useState("whammy")
  // City intros lead directlky to subPops
  const [subPopIsShowing, setSubPopIsShowing] = useState(false);
  const [popToShow, setPopToShow] = useState("whammy")

  useEffect(() => {
    changePageName('cities');
    document.title = '4 Cities / 4 Stories';
  }, [changePageName])

  
  const onPopLinkClick = (bubbleName) => {
    // event.preventDefault();
    setBubblesToShow(bubbleName)
    setPopIsShowing(true);
  }
  
  const onPopClose = (event) => {
    event.preventDefault();
    setPopIsShowing(false);
  }

  const onSubPopLinkClick = (popName) => {
    setPopToShow(popName)
    setSubPopIsShowing(true);
  }
  
  const onSubPopClose = (event) => {
    event.preventDefault();
    setSubPopIsShowing(false);
  }

  return (
    <div className="city-story">
      <header className="basic-page">
        <nav>
          <p>
            <Link to="/">
              <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
              alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
            </Link> &gt; 4 Cities / 4 Stories
          </p>
        </nav>
      </header>

      <div className="city-story-grid">
        <ul>
          {/*top row*/}
          <li className="toprow intro"><span className="story-title">Intro:</span> <span className="story-subtitle">What Was Urban Renewal?</span>
            <span className="show-blurb">Do we want or need a rollover blurb here?<br/><a href="#">Link to popup intro?</a></span>
          </li>

          <li className="toprow nyc"><span className="story-title">New York City</span> <span className="story-subtitle">A Suburb in the City</span>
            <span className="show-blurb">Designed for World War II veterans, Stuyvesant Town remade lower Manhattan. From the beginning, this massive apartment complex was controversial. But it served as a model for the federal urban renewal program.<br/>
            <a href="#" onClick={e => { e.preventDefault(); onSubPopLinkClick("intro-nyc");}}>
              <span className="asterisk">*</span>View Visual Intro
            </a></span>
          </li>

          <li className="toprow newburgh"><span className="story-title">Newburgh</span> <span className="story-subtitle">Demolition Without Redevelopment</span>
            <span className="show-blurb">City leaders targeted Black neighborhoods for demolition. In so doing, they exacerbated a racial rift that continues to haunt Newburgh’s efforts to rebuild.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="toprow kingston"><span className="story-title">Kingston</span> <span className="story-subtitle">A Tale of Two Neighborhoods</span>
            <span className="show-blurb">The renewal of uptown and downtown Kingston proceeded along different tracks. Much of downtown was demolished, while the uptown shopping district was rehabilitated. Disparities of wealth and power help explain this difference.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="toprow albany"><span className="story-title">Albany</span> <span className="story-subtitle">Brasilia on the Hudson</span>
            <span className="show-blurb">Construction of the Empire State Plaza was unusual for being State planned and funded. It was the brainchild of Gov. Nelson Rockefeller, who sought to beautify and reinvigorate New York's shabby state capital.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>


          {/*roots*/}
          <li className="roots intro"><span className="story-title">The Roots of Renewal</span>
            <span className="show-blurb">After World War II, American cities suffered losses of population and wealth. Proponents of urban renewal argued that these conditions called for dramatic change.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="roots nyc"><span className="story-title">Precursor to Urban Renewal</span>
            <span className="show-blurb">City government empowered Metropolitan Life Insurance Co. to seize land for construction of Stuyvesant Town. Lawsuits followed.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="roots newburgh"><span className="story-title">"Negro Removal"</span>
            <span className="show-blurb">Newburgh's urban renewal plan targeted Black neighborhoods for demolition.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="roots kingston"><span className="story-title">Demolition vs Rehabilitation</span>
            <span className="show-blurb">Planners recommended demolition of a downtown residential area. For an uptown shopping district, they proposed a pedestrian mall.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="roots albany"><span className="story-title">The Temporary Commission</span>
            <span className="show-blurb">State officials proposed building a new capitol complex in downtown Albany.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>


          {/*lost places*/}
          <li className="lost intro"><span className="story-title">Lost Places, Displaced People</span>
            <span className="show-blurb">Urban renewal destroyed whole communities. Nationwide, hundreds of thousands of people lost homes and businesses. They suffered both economic losses and psychological pain.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="lost nyc"><span className="story-title">Tenant Relocation Bureau, Inc.</span>
            <span className="show-blurb">Real estate developer James Felt pioneered the tenant relocation process. He would later head the City’s Planning Commission. 
            <br/><a href="#" 
              onClick={e => { e.preventDefault(); onPopLinkClick("nyc-lost");}}
            ><span className="asterisk">*</span> Preview this story</a></span>
          </li>

          <li className="lost newburgh"><span className="story-title">The Fight Over Public Housing</span>
            <span className="show-blurb">A years-long battle over housing for displaced families delayed Newburgh’s renewal.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="lost kingston"><span className="story-title">Protesting Demolition</span>
            <span className="show-blurb">Protests against demolition temporarily brought urban renewal to a halt.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>


          <li className="lost albany"><span className="story-title">Reaction to Redevelopment</span>
            <span className="show-blurb">The mayor sued to prevent the seizure of land. But most area residents responded with resignation. 
            <a href="#"
             onClick={e => { e.preventDefault(); onPopLinkClick("albany-lost");}}
            ><br/><span className="asterisk">*</span> Preview this story</a></span>
          </li>


          {/*reconstruction*/}
          <li className="recon intro"><span className="story-title">Reconstruction</span>
            <span className="show-blurb">On urban renewal land, developers built modern civic structures, housing complexes, and office buildings. But in some places, nothing was built to replace lost neighborhoods.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="recon nyc"><span className="story-title">Modern-day Walled City</span>
            <span className="show-blurb">Stuyvesant Town attracted much criticism. But all that criticism did little to discourage tenant applications.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="recon newburgh"><span className="story-title">No Panacea</span>
            <span className="show-blurb">Conflict among political leaders prevented the City from reaching an agreement with private developers.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="recon kingston"><span className="story-title">Plans Change</span>
            <span className="show-blurb">Changing attitudes about historic architecture led the City to revise redevelopment plans.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="recon albany"><span className="story-title">"Beautiful, Brilliant, Efficient, and Electrifying"</span>
            <span className="show-blurb">Despite promises to the contrary, construction of the Empire State Plaza was costly and chaotic.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>


          {/*mixed legacy*/}
          <li className="legacy intro"><span className="story-title">A Mixed Legacy</span>
            <span className="show-blurb">Urban renewal transformed our nation’s cities. The altered urban geography reinforced racial and economic divisions. It also motivated some communities to organize.<br/><a href="#">View Visual Intro<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="legacy nyc"><span className="story-title">Activist Tenants</span>
            <span className="show-blurb">Rules preventing black families from moving into Stuyvesant Town were designed to promote social stability. Instead, they provoked resistance.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="legacy newburgh"><span className="story-title">A Blank Canvas</span>
            <span className="show-blurb">A large swath of land cleared for renewal remains undeveloped.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="legacy kingston"><span className="story-title">Preservationists and Gentrifiers</span>
            <span className="show-blurb">The decision to rehabilitate rather than demolish historic structures facilitated gentrification.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>

          <li className="legacy albany"><span className="story-title">Community Building</span>         
            <span className="show-blurb">In response to the Empire State Plaza, activists organized to oppose highway construction and to promote historic preservation.<br/><a href="#">Preview this story<span className="not-done">Not yet implemented</span></a></span>
          </li>
        </ul>

        {popIsShowing && 
          <PopShell
            bubblesToShow = {bubblesToShow}
            onPopClose = {onPopClose}
        />}

        {subPopIsShowing && 
          <SubPopShell
            popName={popToShow}
            onSubPopClose = {onSubPopClose}
        />}        

      </div> {/* End city-story-grid */}
    </div>
  )
}

export default CitiesMenu;