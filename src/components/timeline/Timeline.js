import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import {
  useQuery,
  gql,
} from "@apollo/client"; 
import TimelineTable from './TimelineTable';
import ThrulineButton from './ThrulineButton';
import MoreTime from './MoreTime';

const Timeline = () => {
  const BASE_THRULINES = [
    false, false, false, false, false, false, false, false, 
  ];
  /*
  * 0 U Planning #fb5e5e, 1 D Demo #a8fb5e, 2 H Housing #ffea39, 3 R Reconstruction #39f3ff, 
  * 4 P Preservation #fb88ff, 5 O Protest #fce95f, 6 C CivilRights #33ffb5, 7 M PublicRelations #b05ff6
  */
  const [thrulines, setThrulines] = useState(BASE_THRULINES);
  const [showingMore, setShowingMore] = useState(false);
  const [yearEntry, setYearEntry] = useState(null);
  const [rowSlug, setRowSlug] = useState(null);
  const setThruline = (index) => {
    let newThrulines = [...thrulines];
    newThrulines[index] = !newThrulines[index];
    setThrulines(newThrulines);
  }
  const { changePageName } = useContext(GlobalContext);

  useEffect(() => {
    changePageName('timeline');
    document.title = 'Timeline';
  }, [changePageName])


  function showMore(event, yearEntry, rowSlug) {
    event.preventDefault();
    setYearEntry(yearEntry);
    setRowSlug(rowSlug);
    setShowingMore(true);
    console.log('showing more');
  }

  // Prevent click on (non-link) FullEntry from closing window
  function closeMore (event) {
    // console.log(event.target.className)
    event.preventDefault()
    event.stopPropagation()
    // Close if click was on lightbox (background) or close
    // if (event.target.className === 'timeline-content' ||
    // event.target.id === 'close-link') {
      setShowingMore(false);
    // }
  }
   
  const GET_TIMELINE_ENTRIES = gql`
    query {
      timelineLayers {
        edges {
          node {
            slug
            title
            timelineEntries {
              edges {
                node {
                  year
                  blurb
                  hasCellImage
                  priority
                  hasMore
                  moreText
                  usedIn
                  usedInTitle
                  thrulines{
                    edges {
                      node {
                        slug
                        ordinal
                      }
                    }
                  }
                }
              }
            }
          }
      }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_TIMELINE_ENTRIES
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message } </p>;

  return (
    <div>
      <div className="timeline-top">
        <header className="basic-page">
          <nav>
            <p>
              <Link to="/">
                <img src="http://dev.picturingurbanrenewal.org/prod-assets/common/pur-logo.png" 
                alt="Picturing Urban Renewal logo"/>Picturing Urban Renewal
              </Link> &gt; Timeline
            </p>
          </nav>
        </header>

        <section className="thru-lines">
          <ul>
            <li className="title">Through Lines:</li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={0}
                lineName="urban"
                label = "Planning" 
              />
            </li>
            <li>
              <ThrulineButton
                setThruline={setThruline}
                thrulines={thrulines}
                thruIndex={1}
                lineName="demo"
                label = "Demolition &amp; Displacement" 
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
                label = "Rebuilding" 
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
                label = "Gentrification" 
              />
            </li>

          </ul>
        </section>
      </div>

      <TimelineTable
        thrulines = {thrulines}
        loading = {loading}
        error = {error}
        timelineLayers = {data.timelineLayers.edges}
        showMore = {showMore}
        closeMore = {closeMore}
      />

      { showingMore && 
        <MoreTime
          closeMore = {closeMore}
          yearEntry = {yearEntry}
          rowSlug = {rowSlug}
        />
      }

    </div>
  )
}

export default Timeline;