import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componient/Header/Header";
import Error from "./componient/Pages/Error";
import Feature from "./componient/Pages/Feature/feature";
import LiveScore from "./componient/Pages/Livescore/livescore";
import News from "./componient/Pages/News/news";
import Series from "./componient/Pages/Series/series";
import Stats from "./componient/Pages/Stats/stats";
import Team from "./componient/Pages/Teams/team";
import Video from "./componient/Pages/Videos/video";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Card from "./componient/Card/Card";
import Hero from "./componient/Hero/hero";
function App() {
  return (
    <> 


      <BrowserRouter>
     
     
        <Routes>
          <Route>
            <Route path="/" element={<LiveScore />} />
            <Route path="/series" element={<Series />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/video" element={<Video />} />
            <Route path="/stats" element={<Stats />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
     
        <Header />
      </BrowserRouter>
      <Card/>
      <Hero/>
    </>
  );
}

export default App;
