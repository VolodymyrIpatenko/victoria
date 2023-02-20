import { Main } from 'components/home/Home.styled.js';
import {
  GalleryListColumn,
  GalleryListRow,
  DirectionBtn,
} from './Gallery.styled';
import Typed from 'react-typed';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useToggle } from '../customHooks/CustomHooks';
import { Breakpoint } from 'react-socks';
import { DarkModeContext } from '../context/DarkModeContext';
import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

const id = nanoid();

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Photo = ({ photoGallery: { photo, alt } }) => {
  return (
    <li>
      <img src={photo} alt={alt} loading="lazy" />
    </li>
  );
};

const Gallery = ({ photoGallery }) => {
  const [row, setToggleDirection] = useToggle(true);
  const { darkMode } = useContext(DarkModeContext);

  const GalleryDirection = row ? GalleryListColumn : GalleryListRow;

  return (
    <div className={darkMode ? `Content-dark` : null}>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Наші фото']}
          typeSpeed={100}
          showCursor={false}
        />
        <Breakpoint
          style={{
            display: 'flex',
            gap: '20px',
            marginLeft: 'auto',
            fontSize: '30px',
            cursor: 'pointer',
          }}
          xlarge
          up
        >
          <>
            <DirectionBtn onClick={() => setToggleDirection.toggle()}>
              <FaExpandArrowsAlt title="Змінити напрям"></FaExpandArrowsAlt>
            </DirectionBtn>
          </>
        </Breakpoint>
        <GalleryDirection>
          {photoGallery.map(photo => (
            <Photo key={id} photoGallery={photo} />
          ))}
        </GalleryDirection>
      </Main>
    </div>
  );
};

export default Gallery;
