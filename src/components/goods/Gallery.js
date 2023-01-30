import React, { useState } from 'react';
import Menu from './data';
import Footer from '../footer/Footer';
import {
  CategoryButton,
  ProductsVariety,
  ProductsGallery,
  ProductsGalleryItem,
} from './GalleryFilter.styled';

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [buttons] = useState([
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Все',
  ]);

  const filterItem = categItem => {
    if (categItem === 'Все') {
      return setItems(Menu);
    }
    const updatedItems = Menu.filter(category => {
      return category.category === categItem;
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
      <main style={{ margin: '100px' }}>
        <h3 style={{ textAlign: 'center' }}>Вибрати</h3>
        <section>
          <Buttons />
          <ProductsGallery>
            {items.map(elem => {
              const { id, name, image, description, price } = elem;

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
                    <span>{description}</span>
                    <p>{price}</p>
                  </div>
                </ProductsGalleryItem>
              );
            })}
          </ProductsGallery>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryReact;
