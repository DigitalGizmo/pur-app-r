import React from 'react';

const HomePop = ({closeHomePop}) => {

  return (
    <div className="lightbox" onClick={closeHomePop}>
      <div className="slimpop-wrapper entry-pop">
        <div className="pop-nav">
          <p>
            <a
              id="close-link" 
              href="/" 
              onClick={closeHomePop}
            >Close</a>
          </p>
        </div>

        <header>
          <h1>What Was Urban Renewal?</h1>
        </header>
 
        <article>
          <img 
            alt="some hard-wired visual?"
            src={`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/haines-fischer-street.jpg`}
            />

          <p>Urban renewal was the seizure of large swathes of private land for the purpose of demolition and redevelopment. The goals were to eliminate blight, improve infrastructure, and make room for new construction.</p>
          <p>In the U.S., urban renewal typically refers to projects planned and implemented locally using federal funds. Federal urban renewal grants were intended to help cities address the losses of population and wealth associated with suburbanization. Almost one thousand cities across the nation, including Newburgh and Kingston, received such grants. The theory was that urban renewal would spark private development by reducing land acquisition and clearance costs. </p>
          <p>Not all renewal projects were federally funded.</p>
          <p>Some predated the Housing Act of 1949. Best known is the Stuyvesant Town apartment complex in New York City. In 1943, the city government gave the Metropolitan Life Insurance Co. the power to seize and clear 18 city blocks.</p>
          <p>The South Mall redevelopment project in Albany was directed and funded by the State of New York. In place of over a thousand homes and small businesses, the State built a new government office complex, the Gov. Nelson A. Rockefeller Empire State Plaza. </p>
          <p>Despite differences, all of these projects depended on the power of eminent domain. They all required the displacement of property owners and tenants. And they all led to the demolition of some of the oldest buildings in North America.</p>
          <p>Preservationists criticized urban renewal for destroying whole blocks of historic structures. But the human consequences were even more disastrous. Across the nation, urban renewal led to the displacement of hundreds of thousands of families. It was responsible for closing uncounted small businesses. For many of our nation’s poorest (and disproportionately Black) families, urban renewal was a tragedy and injustice. It was a loss of home and community. </p>
          <p>Initially, support for urban renewal united business interests and housing reformers, Republicans and Democrats. By the late 1960s, the federal program had become controversial. City residents, who had seen or experienced the losses and disruptions of urban renewal, protested further demolition. Local officials, weary of construction expenses and delays, became increasingly willing to listen to protesters.</p>
          <p>Federal funding for urban renewal ended in 1974.</p>
          <p>At its best, urban renewal helped prop up struggling cities by facilitating new construction. In addition to construction workers, it meant jobs for planners, engineers, appraisers, architects, and photographers.</p>
          <p>At its worst, urban renewal left empty fields and parking lots in its wake.</p>
        </article>
      </div> {/* /#slimpop-wrapper */}
    {/* end lightbox: */}
    </div>
  )
}

export default HomePop;
