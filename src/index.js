import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import PersonalStory from './components/people/PersonalStory';
import Newburgh from './components/places/Newburgh';
import Visuals from './components/archive/Visuals';
import Home from './components/Home';
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
          <Route path="/people/haines-dauner" element={<PersonalStory />} />
          <Route path="/archive/visuals" element={<Visuals />} />
          <Route path="/places/newburgh" element={<Newburgh />} />
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
