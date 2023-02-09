import styled from 'styled-components';

export const GalleryListRow = styled.ul`
  display: grid;
  gap: 20px;
`;

export const GalleryListColumn = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const DirectionBtn = styled.button`
  font-size: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: orange;
`;
