import React, { useState } from 'react';
import TimelineTable from './TimelineTable';
import ThrulineButton from './ThrulineButton';

const Timeline = () => {
  const BASE_THRULINES = [
    false, false, false, false, false, false, false, false, 
  ];
  /*
  * 0 U Planning #fb5e5e, 1 D Demo #a8fb5e, 2 H Housing #ffea39, 3 R Reconstruction #39f3ff, 
  * 4 P Preservation #fb88ff, 5 O Protest #fce95f, 6 C CivilRights #33ffb5, 7 M PublicRelations #b05ff6
  */
  const [thrulines, setThrulines] = useState(BASE_THRULINES);
  const setThruline = (index) => {
    let newThrulines = [...thrulines];
    newThrulines[index] = !newThrulines[index];
    setThrulines(newThrulines);
  }

  return (
    <div> 
      <header className="basic-page">
        <h1>Timeline</h1>
      </header>

      <div className="timeline-page">

        <section className="thru-lines">
          <ul>
            <li className="title">Through Lines</li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={0}
                lineName="urban"
                label = "Urban Planning" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={1}
                lineName="demo"
                label = "Demolition" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={2}
                lineName="housing"
                label = "Housing" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={3}
                lineName="recon"
                label = "Reconstruction" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={4}
                lineName="preserv"
                label = "Preservation" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={5}
                lineName="protest"
                label = "Protest" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={6}
                lineName="civil"
                label = "Civil Rights" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={7}
                lineName="public"
                label = "Support for Urban Renewal" 
              />
            </li>
          </ul>
        </section>

        <TimelineTable
          thrulines = {thrulines}
        />

      </div>
    </div>
  )
}

export default Timeline;