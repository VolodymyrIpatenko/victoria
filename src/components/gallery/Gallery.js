import PageFooter from '../footer/Footer.js';
import { Main } from 'components/home/Home.styled.js';
import { GalleryListColumn, GalleryListRow } from './Gallery.styled';
import Typed from 'react-typed';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { Fragment } from 'react';

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
  const [row, setRow] = useState(true);

  const toggleDirection = () => {
    setRow(state => !state);
  };

  return (
    <>
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
          <Fragment>
            <button
              onClick={() => toggleDirection()}
              style={{
                fontSize: '30px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <FaExpandArrowsAlt></FaExpandArrowsAlt>
            </button>
          </Fragment>
        </Breakpoint>
        {row ? (
          <GalleryListRow>
            {photoGallery.map(photo => {
              return <Photo key={photo.id} photoGallery={photo} />;
            })}
          </GalleryListRow>
        ) : (
          <GalleryListColumn>
            {photoGallery.map(photo => {
              return <Photo key={photo.id} photoGallery={photo} />;
            })}
          </GalleryListColumn>
        )}
      </Main>
      <PageFooter />
    </>
  );
};

export default Gallery;
