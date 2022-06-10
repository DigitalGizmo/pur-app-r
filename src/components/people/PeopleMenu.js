import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const PeopleMenu = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('people');
  }, [])

  return (
    <div>
      <header className="basic-page">
        <h1>Personal Stories</h1>
        <h4>Browse by: <span className="selected">Perspective</span> / <Link to="/people/people-menu-cities">City</Link></h4>         
        <p className="blurb">Learn about the people who transformed the four cities, along with those whose lives were changed by renewal. Select a Story from the Perspectives Menu below or <Link to="/people/people-menu-cities">Browse by City.</Link></p>
      </header>

      <section className="basic-grid ps-full-menu">
        <div className="ps-menu politicians">
          <h2>Politicians &amp; Government Officials</h2>
          <ul className="">
            <li className="icon-kingston"><Link to="/people/joseph-resnick">Joseph Y. Resnick: I&rsquo;m for Joe</Link></li>
            <li className="icon-albany">Nelson A. Rockefeller: America's "Buildingest" Governor</li>
            <li className="icon-newburgh">George McKneally: "Let's Have Some Answers, Mr. Mayor"</li>
            <li className="icon-newburgh">George Shaw: An "Analytical" Mind</li>
            <li className="icon-albany">Erastus Corning 2d: The O'Connell-Corning Machine</li>
            <li className="icon-kingston">John Schwenk: Renewing Uptown</li>
            <li className="icon-kingston">Edwin Radel: An Advocate for Renewal</li>
            <li className="icon-albany">Michael Nardolillo: "A Good Man for a Tough Job"</li>
            <li className="icon-stuytown">Fiorello La Guardia: Impeach the Mayor</li>
            <li className="icon-kingston">Eric Hemphill: Urban Renewal &ldquo;Is Not a Painless Process&rdquo;</li>
            <li className="icon-newburgh">Joseph X. Mullin: Mayor Mullin and the Fight over Public Housing</li>
            <li className="icon-newburgh">Jack Present: The Bureaucratic Survivor</li>
          </ul>
        </div>

        <div className="ps-menu displaced">
          <h2>The Displaced</h2>
          <ul className="">
            <li className="icon-newburgh"><Link to="/people/carrie-wilson">Carrie Wilson: A Homeowner &ldquo;by Sufferance and Permission&rdquo;</Link></li>
            <li className="icon-albany"><Link to="/people/jimmy-strawn">Jimmy Strawn: The Sultan of Swing</Link></li>
            <li className="icon-kingston">Joe Epstein: An Alderman and Business Owner</li>
            <li className="icon-kingston">Sophie Miller: Do You Remember?</li>
            <li className="icon-albany">John and Vivian Robinson: No Down Payment</li>
            <li className="icon-newburgh">Elizabeth Patton: Elizabeth Patton &ldquo;Does Not Intend To Move&rdquo;</li>
            <li className="icon-albany">Mae Carlson: Albany's Rooming House Queen</li>
            <li className="icon-albany">Frederick Binseel: Mr. Binseel and the Temporary Commission</li>
            <li className="icon-kingston">James Roberts: The Last Store Standing</li>
            <li className="icon-stuytown">Harry Delman: The Last to Leave</li>
            <li className="icon-stuytown">Connie Zimmardo: Dear Mr. Mayor</li>
            <li className="icon-stuytown">May Springer: My Neighborhood is not a Slum</li>
            <li className="icon-newburgh">Nellie ("Big Nell") Williams: The Brothel and the Dutch Church</li>
            <li className="icon-albany">Ken Hunter: Hunter's Pharmacy</li>
            <li className="icon-newburgh">Gilbert and Sally Sharpe: &ldquo;Pushed from One Slum to Another&rdquo;</li>
          </ul>
        </div>

        <div className="ps-menu organizers">
          <h2>Community Organizers</h2>
          <ul className="">
            <li className="icon-albany">Harold Rubin: Preserving Center Square</li>
            <li className="icon-albany">Elinor Hemstead Posner: An Old Neighborhood Doesn't Have to be Ugly</li>
            <li className="icon-kingston">Leon VanDyke: The Brothers vs. the Construction Trades</li>
            <li className="icon-albany">Harry Vodery: The Firebrand</li>
            <li className="icon-kingstonc">Annie Jackson: "We're People, We're Citzens"</li>
            <li className="icon-kingston">Ed Ford: Saving City Hall</li>
            <li className="icon-newburgh">Frank E. Jones: Rev. Jones and Gov. Rockefeller</li>
            <li className="icon-albany">Randolph Nugent: Minister to the Displaced</li>
            <li className="icon-stuytown">Eliot D. Pratt: Suing Stuy Town</li>
            <li className="icon-stuytown">William Yurich: Peter Stuyvesant Landowners' Group</li>
            <li className="icon-stuytown">Raphael Hendrix: "All I Want Is a Nice, Clean Apartment"</li>
            <li className="icon-stuytown">Leo and Diana Miller: "Without Struggle There Is No Progress"</li>
            <li className="icon-stuytown">Esther and David Smith: Tenants Committee to End Discrimination in Stuyvesant Town</li>
            <li className="icon-newburgh">Samuel A. T. Hodge: "No Negro Asked for 'Urban Removal'"</li>
            <li className="icon-stuytown">Charles Abrams: "Threat to Our Liberties"</li>
          </ul>
        </div>

      <div className="ps-menu builders">
        <h2>Planners &amp; Builders</h2>
          <ul className="">
            <li className="icon-kingston"><Link to="/people/george-raymond">George M. Raymond: A Passionate Believer in Cities</Link></li>
            <li className="icon-newburgh">Edward J. Logue: "New York's Mr. Urban Renewal"</li>
            <li className="icon-kingston">Daniel Shuster: Six Decades of Planning</li>
            <li className="icon-stuytown">James Felt: The Tenant Relocation Bureau, Inc.</li>
            <li className="icon-stuytown">Robert Moses: You Can't Make an Omelet without Breaking Eggs</li>
            <li className="icon-kingston">Elmore Yallum: Planning, Not Parking</li>
            <li className="icon-newburgh">Robert Litke: The Man to &ldquo;Move&rdquo; the Project</li>
            <li className="icon-newburgh">David Rosen: Planning a "New Neighborhood"</li>
            <li className="icon-albany">Hank Landau: The Labor Leader</li>
            <li className="icon-stuytown">Frederick Ecker: "Negroes and Whites Don't Mix"</li>
            <li className="icon-stuytown">Vincent Pasquale and Eddie O'Brien: "I Wasn't Cut out for a Cop"</li>
            <li className="icon-albany">Gerry and Mary Dwileski: Gerry's Gamble</li>
            <li className="icon-albany">Wallace K. Harrison: The Governor's Architect</li>
            <li className="icon-newburgh">Jeh V. Johnson: The Pathbreaker</li>
            <li className="icon-kingston">Gus Ose: The Carpenter</li>
            <li className="icon-stuytown">Arthur J. Eken: MetLife's Builder</li>
            <li className="icon-newburgh">William Zeckendorf: "I Make Grapefruits out of Lemons"</li>
          </ul>
        </div>

        <div className="ps-menu arrivals">
          <h2>New Arrivals</h2>
          <ul className="">
            <li className="icon-stuytown">Sedell Rand: 70 Years in Stuyvesant Town</li>
            <li className="icon-stuytown">Jesse Kessler: Evicted!</li>
            <li className="icon-stuytown">Lee and Grace Lorch: Teachers and Activists</li>
            <li className="icon-kingston">Geoffrey Miller: Preserving Kingston's Immigrant Heritage</li>
            <li className="icon-newburgh">Libby Lyon: In the Lyon's Den</li>
            <li className="icon-newburgh">Tom Porfidio: Plastered for Six Years</li>
            <li className="icon-stuytown">Corrinne Demas: Growing Up in "Rabbit Town"</li>
          </ul>
        </div>

        <div className="ps-menu reporters">
          <h2>Reporters &amp; Photographers</h2>
          <ul className="">
            <li className="icon-kingston"><Link to="/people/haines-dauner">Gene Dauner and Bob Haines: One Step Ahead of the Wrecking Ball</Link></li>
            <li className="icon-albany">Grant Van Patten: Hoax or Hope?</li>
            <li className="icon-newburgh">Tom Daley: Preserving Newburgh's Lost Architecture</li>
            <li className="icon-stuytown">Mark Stuart: Chronicling the Stuy Town Story</li>
            <li className="icon-albany">Scott Christianson:  The "Typewriter Guerilla"</li>
            <li className="icon-albany">William Kennedy: Albany's Bard</li>
            <li className="icon-kingston">Hugh Reynolds: An Insider in an "Insider's Town"</li>
            <li className="icon-newburgh">Joseph Ritz: Joseph Ritz and "The Despised Poor"</li>
            <li className="icon-kingston">Herman Boyle: The Collector</li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default PeopleMenu;