import React, { useState } from 'react';
import Menu from './data';
import {
  CategoryButton,
  ProductsVariety,
  ProductsGallery,
  ProductsGalleryItem,
  StyledDescription,
  SportbarMain,
} from './GalleryFilter.styled';

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [buttons] = useState([
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
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

  return (
    <>
      <SportbarMain>
        <section>
          <Buttons />
          <ProductsGallery>
            {items.map(elem => {
              const { id, image, description, price } = elem;

              return (
                <ProductsGalleryItem key={id}>
                  <img width="300" src={image} />
                  <div
                    style={{
                      padding: '15px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <StyledDescription>{description}</StyledDescription>
                    <StyledDescription>{price}</StyledDescription>
                  </div>
                </ProductsGalleryItem>
              );
            })}
          </ProductsGallery>
        </section>
      </SportbarMain>
    </>
  );
};

export default GalleryReact;
