import { Route, Routes } from 'react-router-dom';

import Contacts from './components/contacts/Contacts.js';
import Home from './components/home/Home.js';
import Gallery from './components/gallery/Gallery.js';
import galleryCollection from './components/gallery/gallery.json';
import coachList from './components/home/coach.json';
import { HeaderComponent } from './components/header/Header.js';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderComponent />}>
        <Route index element={<Home coachData={coachList} />} />
        <Route
          path="/gallery"
          element={<Gallery photoGallery={galleryCollection} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
