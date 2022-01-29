import React from "react";
import "./StuyStroll.css";

const CaptionBand = ({loading, error, data}) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  // return data.all_images.map(({ id, slug, title }) => (
  const captions = data.hotspots.map((hotspot) => {
    return (
      <div
        key={hotspot.title}
        className="cap"
        style={{ left: hotspot.text_percent + '%' }}
      >
        <h4>{hotspot.title}</h4>
        <p>{hotspot.blurb}
          more..
        </p>
      </div>
    )
  });

  return (
    <div id="caption-band">
      { captions }
    </div> 
  );
}

export default CaptionBand;