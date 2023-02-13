import { Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts.js';
import Home from './components/home/Home.js';
import Gallery from './components/gallery/Gallery.js';
import galleryList from './components/gallery/gallery.json';
import coachList from './components/home/coach.json';
import SharedLayout from './components/layout/Layout.js';
import GalleryReact from './components/sportbar/Sportbar.js';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home coachData={coachList} />} />
        <Route
          path="/gallery"
          element={<Gallery photoGallery={galleryList} />}
        />
        <Route path="/sportbar" element={<GalleryReact />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
