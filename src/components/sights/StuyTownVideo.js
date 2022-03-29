import React from "react";

const StuyTownVideo = () => {

  return (
    <div> 
      <header className="basic-page">
        <h1>A Suburb in the City</h1>
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