import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import CitiesMenu from './components/cities/CitiesMenu';
import PeopleMenu from './components/people/PeopleMenu';
import PersonalStory from './components/people/PersonalStory';
import PersonalStoryCW from './components/people/PersonalStoryCW';
import PersonalStoryJR from './components/people/PersonalStoryJR';
import PersonalStoryJS from './components/people/PersonalStoryJS';
import PersonalStoryGR from './components/people/PersonalStoryGR';
import PlacesMenu from './components/places/PlacesMenu';
import Newburgh from './components/places/Newburgh';
import Kingston from './components/places/Kingston';
import StuyStroll from './components/places/stuy-stroll/StuyStroll';
import Visuals from './components/archive/Visuals';
import ThemeMenu from './components/themes/ThemeMenu';
import Theme from './components/themes/Theme';
import Timeline from './components/timeline/Timeline';
// import reportWebVitals from './reportWebVitals';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://admin.picturingurbanrenewal.org/graphql/',
  // uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
});

const rootElement = document.getElementById('root');

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/cities" element={<CitiesMenu />} />
          <Route path="/people" element={<PeopleMenu />} />
            <Route path="/people/haines-dauner" element={<PersonalStory />} />
            <Route path="/people/carrie-wilson" element={<PersonalStoryCW />} />
            <Route path="/people/joseph-resnick" element={<PersonalStoryJR />} />
            <Route path="/people/jimmy-strawn" element={<PersonalStoryJS />} />
            <Route path="/people/george-raymond" element={<PersonalStoryGR />} />
          <Route path="/archive/visuals" element={<Visuals />} />
          <Route path="/places" element={<PlacesMenu />} />
            <Route path="/places/newburgh" element={<Newburgh />} />
            <Route path="/places/kingston" element={<Kingston />} />
            <Route path="/places/stuy-stroll" element={<StuyStroll />} />
          <Route path="/themes" element={<ThemeMenu />} />
            <Route path="/themes/theme" element={<Theme />} />
          <Route path="/timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
