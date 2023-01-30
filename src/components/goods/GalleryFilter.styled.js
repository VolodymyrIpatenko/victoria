import styled from 'styled-components';

export const CategoryButton = styled.button`
  width: auto;
  padding: 17px;
  height: 30px;
  margin: 15px;
  display: grid;
  place-content: center;
  font-size: 20px;
  border: none;
  border-radius: 7px;
  background: black;
  box-shadow: 0 0 10px 2px #7065ff;
  cursor: pointer;
  color: white;
`;

export const ProductsVariety = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  justify-content: center;
  @media screen and (min-width: 1199px) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

export const ProductsGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  justify-content: center;

  @media screen and (min-width: 1199px) {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
  }
`;

export const ProductsGalleryItem = styled.li`
  height: 350px;
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;
