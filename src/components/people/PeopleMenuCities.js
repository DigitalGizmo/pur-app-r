import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

const PeopleMenuCities = () => {
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('people');
    document.title = 'People - By City';
  }, [changePageName])

  return (
    <div>
      <header className="basic-page">
        <h1>Personal Stories</h1>
        <h4>Browse by: <Link to="/people">Perspective</Link> / <span className="selected">City</span></h4>
        <p className="blurb">Learn about the people who transformed the four cities, along with those whose lives were changed by renewal. Select a Story from the City Menu below or <Link to="/people">Browse by Perspective.</Link></p>
      </header>

      <section className="basic-grid ps-full-menu">
        <div className="ps-city-menu city-stuytown">
          <h2 className="stuytown-icon">New York City</h2>
          <ul className="">
            <li className="">James Felt: The Tenant Relocation Bureau, Inc.</li>
            <li className="">Robert Moses: You Can't Make an Omelet without Breaking Eggs</li>
            <li className="">Fiorello La Guardia: Impeach the Mayor</li>
            <li className="">Harry Delman: The Last to Leave</li>
            <li className="">Connie Zimmardo: Dear Mr. Mayor</li>
            <li className="">May Springer: My Neighborhood is not a Slum</li>
            <li className="">Eliot D. Pratt: Suing Stuy Town</li>
            <li className="">William Yurich: Peter Stuyvesant Landowners' Group</li>
            <li className="">Raphael Hendrix: "All I Want Is a Nice, Clean Apartment"</li>
            <li className="">Leo and Diana Miller: "Without Struggle There Is No Progress"</li>
            <li className="">Esther and David Smith: Tenants Committee to End Discrimination in Stuyvesant Town</li>
            <li className="">Charles Abrams: "Threat to Our Liberties"</li>
            <li className="">Frederick Ecker: "Negroes and Whites Don't Mix"</li>
            <li className="">Vincent Pasquale and Eddie O'Brien: "I Wasn't Cut out for a Cop"</li>
            <li className="">Arthur J. Eken: MetLife's Builder</li>
            <li className="">Sedell Rand: 70 Years in Stuyvesant Town</li>
            <li className="">Jesse Kessler: Evicted!</li>
            <li className="">Lee and Grace Lorch: Teachers and Activists</li>
            <li className="">Corrinne Demas: Growing Up in "Rabbit Town"</li>
            <li className="">Mark Stuart: Chronicling the Stuy Town Story</li>
          </ul>
        </div>

        <div className="ps-city-menu city-newburgh">
          <h2 className="newburgh-icon">Newburgh</h2>
          <ul className="">
            <li className=""><Link to="/people/carrie-wilson">Carrie Wilson: A Homeowner &ldquo;by Sufferance and Permission&rdquo;</Link></li>
            <li className="">Joseph X. Mullin: Mayor Mullin and the Fight over Public Housing</li>
            <li className="">George McKneally: "Let's Have Some Answers, Mr. Mayor"</li>
            <li className="">George Shaw: An "Analytical" Mind</li>
            <li className="">Robert Litke: The Man to “Move” the Project</li>
            <li className="">David Rosen: Planning a "New Neighborhood"</li>
            <li className="">Jack Present: The Bureaucratic Survivor</li>
            <li className="">Elizabeth Patton: Elizabeth Patton &ldquo;Does Not Intend To Move&rdquo;</li>
            <li className="">Nellie ("Big Nell") Williams: The Brothel and the Dutch Church</li>
            <li className="">Gilbert and Sally Sharpe: &ldquo;Pushed from One Slum to Another&rdquo;</li>
            <li className="">Frank E. Jones: Rev. Jones and Gov. Rockefeller</li>
            <li className="">Samuel A. T. Hodge: "No Negro Asked for 'Urban Removal'"</li>
            <li className="">Jeh V. Johnson: The Pathbreaker</li>
            <li className="">William Zeckendorf: "I Make Grapefruits out of Lemons"</li>
            <li className="">Libby Lyon: In the Lyon's Den</li>
            <li className="">Tom Porfidio: Plastered for Six Years</li>
            <li className="">Tom Daley: Preserving Newburgh's Lost Architecture</li>
            <li className="">Joseph Ritz: Joseph Ritz and "The Despised Poor"</li>
          </ul>
        </div>

        <div className="ps-city-menu city-kingston">
          <h2 className="kingston-icon">Kingston</h2>
          <ul className="">
            <li className=""><Link to="/people/joseph-resnick">Joseph Y. Resnick: I&rsquo;m for Joe</Link></li>
            <li className=""><Link to="/people/haines-dauner">Gene Dauner and Bob Haines: One Step Ahead of the Wrecking Ball</Link></li>
            <li className=""><Link to="/people/george-raymond">George M. Raymond: A Passionate Believer in Cities</Link></li>
            <li className="">Daniel Shuster: Six Decades of Planning</li>
            <li className="">John Schwenk: Renewing Uptown</li>
            <li className="">Edwin Radel: An Advocate for Renewal</li>
            <li className="">Elmore Yallum: Planning, Not Parking</li>
            <li className="">Eric Hemphill: Urban Renewal &ldquo;Is Not a Painless Process&rdquo;</li>
            <li className="">Joe Epstein: An Alderman and Business Owner</li>
            <li className="">Sophie Miller: Do You Remember?</li>
            <li className="">Leonard Van Dyke: The Voice of Opposition</li>
            <li className="">Annie Jackson: "We're People, We're Citzens"</li>
            <li className="">Ed Ford: Saving City Hall</li>
            <li className="">Geoffrey Miller: Preserving Kingston's Immigrant Heritage</li>
            <li className="">Hugh Reynolds: An Insider in an "Insider's Town"</li>
            <li className="">Herman Boyle: The Collector</li>
            <li className="">James Roberts: The Last Store Standing</li>
            <li className="">Gus Ose:Ose The Carpenter</li>
            <li className="">Edward J. Logue: "New York's Mr. Urban Renewal"</li>
          </ul>
        </div>

        <div className="ps-city-menu city-albany">
          <h2 className="albany-icon">Albany</h2>
          <ul className="">
              <li className=""><Link to="/people/jimmy-strawn">Jimmy Strawn: The Sultan of Swing</Link></li>
              <li className="">Michael Nardolillo: "A Good Man for a Tough Job"</li>
              <li className="">John and Vivian Robinson: No Down Payment</li>
              <li className="">Mae Carlson: Albany's Rooming House Queen</li>
              <li className="">Frederick Binseel: Mr. Binseel and the Temporary Commission</li>
              <li className="">Ken Hunter: Hunter's Pharmacy</li>
              <li className="">Harold Rubin: Preserving Center Square</li>
              <li className="">Elinor Hemstead Posner: An Old Neighborhood Doesn't Have to be Ugly</li>
              <li className="">Harry Vodery: The Firebrand</li>
              <li className="">Randolph Nugent: Minister to the Displaced</li>
              <li className="">Hank Landau: The Labor Leader</li>
              <li className="">Gerry and Mary Dwileski: Gerry's Gamble</li>
              <li className="">Wallace K. Harrison: The Governor's Architect</li>
              <li className="">Grant Van Patten: Hoax or Hope?</li>
              <li className="">Scott Christianson: The "Typewriter Guerilla"</li>
              <li className="">William Kennedy: Albany's Bard</li>
              <li className="">Erastus Corning 2d: The O'Connell-Corning Machine</li>
              <li className="">Nelson A. Rockefeller: America's "Buildingest" Governor</li>
          </ul>
        </div>  
      </section>
    </div>
  )
}

export default PeopleMenuCities;