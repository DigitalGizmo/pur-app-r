import React from "react";

const StuyTownVideo = () => {

  return (
    <div> 
      <header className="basic-page">
        <h1>Gas Town to Stuyvesant Town</h1>
        <h4></h4>
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