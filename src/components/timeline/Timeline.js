import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {
  return (
    <div> 
      <header className="basic-page">
        <h1>Timeline</h1>
      </header>

      <div className="timeline-page">

        <section className="thru-lines">
          <ul>
            <li className="title">Through Lines</li>
            <li>Urban Planning</li>
            <li>Demolition and Displacement</li>
            <li>Housing</li>
            <li>Reconstruction</li>
            <li>Preservation</li>
            <li>Protest</li>
            <li>Civil Rights</li>
            <li>Support for Urban Renewal</li>
          </ul>
        </section>

        <table className="timeline-content">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>1950</th>
              <th>1951</th>
              <th>1952</th>
              <th>1953</th>
              <th>1954</th>
            </tr>
          </thead>

          <tbody>
            <tr className="row-nyc">
              <th>New York City</th>
              <td>The obvious rejoinder to this spin is that Trump got impeached for withholding military aid to strongarm Ukrainian President into manufacturing propaganda to help Trump’s reelection. This came even as Zelensky pleaded for help against Russian aggression, which the world is now witnessing unfold in all its horror.</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>

            <tr className="row-newburgh">
              <th>Newburgh</th>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>

            <tr className="row-kingston">
              <th>Kingston</th>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>


            <tr className="row-albany">
              <th>Albany</th>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>

            <tr className="row-nystate">
              <th>NY State</th>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>

            <tr className="row-us">
              <th>US</th>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>lorem ipsum</td>
              <td>acet dorcit</td>
              <td>fodus rotim</td>
            </tr>                     
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Timeline;