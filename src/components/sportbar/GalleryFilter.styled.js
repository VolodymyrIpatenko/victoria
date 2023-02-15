import styled from 'styled-components';

export const CategoryButton = styled.button`
  width: 150px;
  padding: 17px;
  height: 50px;
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
  gap: 30px;
  @media screen and (min-width: 1199px) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

export const SportbarMain = styled.main`
  padding: 50px;
`;

export const ProductsGallery = styled.ul`
  display: grid;
  justify-content: center;
  margin: 50px;

  @media screen and (min-width: 1199px) {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
    margin: 50px;
  }
`;

export const StyledPrice = styled.p`
  font-size: 20px;
  color: white;
`;

export const ProductCard = styled.div`
  display: grid;
  place-content: center;
  height: 70px;
`;

export const ProductsGalleryItem = styled.li`
  width: 200px;
  @media screen and (min-width: 1199px) {
    width: 300px;
    border: 1px solid black;
    background: black;
    border-radius: 5px;
    cursor: pointer;
  }
`;
