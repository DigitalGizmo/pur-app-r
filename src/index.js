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
import PlacesMenu from './components/places/PlacesMenu';
import Newburgh from './components/places/Newburgh';
// import Visuals from './components/archive/Visuals';
import GqlShell from './components/archive/GqlShell';
import ThemeMenu from './components/themes/ThemeMenu';
import Theme from './components/themes/Theme';
// import reportWebVitals from './reportWebVitals';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    // useQuery,
    // gql
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://admin.picturingurbanrenewal.org/archive/graphql/',
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
          <Route path="/archive/visuals" element={<GqlShell />} />
          <Route path="/places" element={<PlacesMenu />} />
          <Route path="/places/newburgh" element={<Newburgh />} />
          <Route path="/themes" element={<ThemeMenu />} />
            <Route path="/themes/theme" element={<Theme />} />
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
