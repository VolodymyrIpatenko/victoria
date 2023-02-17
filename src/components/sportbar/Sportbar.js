import React, { useState, useContext } from 'react';
import Menu from './data';
import { nanoid } from 'nanoid';
import {
  CategoryButton,
  ProductsVariety,
  ProductsGallery,
  ProductsGalleryItem,
  StyledPrice,
  SportbarMain,
  ProductCard,
} from './GalleryFilter.styled';
import { DarkModeContext } from '../context/DarkModeContext';
const id = nanoid();

const GalleryReact = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [items, setItems] = useState(Menu);
  const [buttons] = useState([
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
    'Протеїнові коктейлі',
  ]);

  const filterItem = categItem => {
    if (categItem === 'Все') {
      return setItems(Menu);
    }
    const updatedItems = Menu.filter(({ category }) => {
      return category === categItem;
    });
    setItems(updatedItems);
  };

  const Buttons = () => {
    return (
      <ProductsVariety>
        {buttons.map(button => {
          return (
            <li>
              <CategoryButton onClick={() => filterItem(button)}>
                {button}
              </CategoryButton>
            </li>
          );
        })}
      </ProductsVariety>
    );
  };
  const contentProvider = () => {
    return (
      <>
        <SportbarMain>
          <section>
            <Buttons />
            <ProductsGallery>
              {items.map(({ image, price, description }) => {
                return (
                  <ProductsGalleryItem key={id}>
                    <img src={image} />
                    <ProductCard>
                      <StyledPrice>{price}</StyledPrice>
                      <p>{description}</p>
                    </ProductCard>
                  </ProductsGalleryItem>
                );
              })}
            </ProductsGallery>
          </section>
        </SportbarMain>
      </>
    );
  };
  return (
    <>
      <div className={darkMode ? `Content-dark` : null}>
        {contentProvider()}
      </div>
    </>
  );
};

export default GalleryReact;
