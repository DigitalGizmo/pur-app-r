import React from 'react';
import './StuyStroll.css';

const StrollMore = () => {

  return (
    <div className="strollbox" >
      <div id="stroll-pop-wrapper" className="entry-pop">

        <header>
          <h1>Title</h1>
        </header>
        <p>more text</p>
      </div>
    </div>
  )

}

export default StrollMore;

//   <div class="strollbox" :style="{left: hotspots[hiliteIndex].text_percent + '%'}">
//   <div id="stroll-pop-wrapper" class="entry-pop">
//     <p class="close">
//       <a href="#" @click="closeStrollMore">Close</a>
//     </p>

//     <header>
//       <h1>{{ hotspots[hiliteIndex].title }}</h1>
//     </header>
//     <p>{{ hotspots[hiliteIndex].more }}</p>


//   </div><!-- /#slippop-wrapper -->
// </div><!-- /.lightbox -->
