// import logo from './logo.svg';
import './people.css';

function getImgUrl() {
  return 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';
}

function HainesDauner() {
// const imgUrl = 'http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-mcmillan-bldg.jpg';

  return (
    <div>
      <header className="basic-page">
        <h1>Bob Haines &amp; Gene Dauner, Photographers</h1>
        <h4>Kingston, NY</h4>
      </header>

      <section className="basic-grid">

        <div className="image-full">
          <img 
            src= {getImgUrl()}
            alt='meaningful alt text'/>
        </div>

        <div className="image-full-caption">
          <p className="caption">Kingston&rsquo;s McMillan Buiding during demolition. January, 1966. By Bob Haines, used with permission from Kingson Daily Freeman.</p>
        </div>

        <article className="text-side">
          <p className="intro">One day, photographers Bob Haines and Gene Dauner decided to take a closer look at the McMillan Building, an old ship chandlery. Attracted by the building&rsquo;s elegance, they asked the demolition foreman if they could take a look inside. For $10, the foreman agreed to look the other way and let them salvage stained glass and other features. The next day, wrecking crews started to tear down the building.</p>

          <p>Bob refined his photography skills in the Navy. He spent two years as an aerial photographer, taking reconnaissance photos in Vietnam. He returned to Kingston in 1965. Two years later, he began a career as an assignment photographer for the Kingston Daily Freeman, retiring in 2006. His camera of choice was a Graflex, the standard press camera of the day. It used large 4x5 inch negatives for higher resolution.</p>

          <p>At the same time, Gene Dauner, decided to document the buildings in Broadway East before and during demolition. His family owned a florist shop. He often delivered flowers in downtown Kingston, and decided to bring his camera with him on his trips. He later recalled that he wanted to find the right lighting conditions before taking his photos. He often visited a building, didn&rsquo;t like the lighting, and returned later to take the perfect shot. He also had to &ldquo;keep one step ahead of the wrecking ball.&rdquo;</p>

          <p>Soon, Bob and Gene began taking photos together, Bob in black and white, Gene in color. Downtown Kingston&rsquo;s rich architectural details drew them to the soon-to-be demolished area.</p>

          <p>On one trip, Bob brought an 8-millimeter movie camera. He filmed wrecking crews tearing down buildings in 1967. As his film documents, crews used two methods to demolish buildings. For those that were easy to raze, like frame buildings, a bulldozer simply undermined the first floor and gravity did the rest. For more substantial brick buildings, wrecking crews used two bulldozers and a cable. The cable extended through the length of a building, say the front and rear doors, and each end connected to each bulldozer. As the bulldozers pulled away from the building, the cable tightened and sliced through the load bearing wall.</p>
        </article>

        <div className="first-col">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/dauner-on-roof.jpg"
            alt='meaningful alt text'
           />
          <p className="caption">Gene Dauner with his camera on a rooftop, looking toward the Broadway East Urban Renewal Project area. Courtesy of Gene Dauner.</p>
        </div>

        <div className="second-col">
          <img 
            src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/dauner-mcmillan-bldg-b4-demo.jpg"
            alt='meaningful alt text'
          />
          <p className="caption">McMillan Building before demolition. Photo courtesy of Gene Dauner.<br/>
          <strong><a href="/">View a slideshow of photos by Dauner and Haines</a></strong></p>
        </div>

        <div className="second-col">
          <video width="480" height="320" controls> 
            <source src="http://dev.picturingurbanrenewal.org/prod-assets/people/storypics/haines-demo-footage.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>      
          <p className="caption">Bob Haines filmed the tragic demolition of these stately brick buildings along Water street with his 8mm movie camera. Courtesy of Bob Haines</p>
        </div>

      </section>

    </div>
  );
}

export default HainesDauner;
