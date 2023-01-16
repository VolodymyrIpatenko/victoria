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
