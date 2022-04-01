import React from "react";

const StuyTownVideo = () => {

  return (
    <div> 
      <header className="basic-page">
        <h1>A Suburb in the City</h1>
        <p className="blurb">Designed for World War II veterans, Stuyvesant Town remade lower Manhattan. From the beginning, this massive apartment complex was controversial. But it served as a model for the federal urban renewal program.</p>
      </header>  

      <div>
        <video width="1280" height="720" controls> 
            <source src="http://dev.picturingurbanrenewal.org/prod-assets/sights/gastown-stuytown.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>    
      </div>


    </div>
  );
}

export default StuyTownVideo;