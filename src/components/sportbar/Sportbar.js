import React, { useState, useContext } from 'react';
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
import Menu from './data';

const id = nanoid();

const GalleryReact = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [items, setItems] = useState(Menu);
  const buttons = [
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
    'Протеїнові коктейлі',
  ];

  const filterItem = categItem => {
    if (categItem === 'Все') {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter(
        ({ category }) => category === categItem
      );
      setItems(updatedItems);
    }
  };

  const Buttons = () => (
    <ProductsVariety>
      {buttons.map(button => (
        <li key={id}>
          <CategoryButton onClick={() => filterItem(button)}>
            {button}
          </CategoryButton>
        </li>
      ))}
    </ProductsVariety>
  );

  const Products = () => (
    <ProductsGallery>
      {items.map(({ image, price, description }) => (
        <ProductsGalleryItem key={id}>
          <img src={image} alt={description} />
          <ProductCard>
            <StyledPrice>{price}</StyledPrice>
            <p>{description}</p>
          </ProductCard>
        </ProductsGalleryItem>
      ))}
    </ProductsGallery>
  );

  return (
    <div className={darkMode ? 'Content-dark' : null}>
      <SportbarMain>
        <section>
          <Buttons />
          <Products />
        </section>
      </SportbarMain>
    </div>
  );
};

export default GalleryReact;
