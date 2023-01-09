import styled from 'styled-components';

export const Img = styled.img`
  @media screen and (min-width: 1199px) {
    display: block;
    height: auto;
    width: 700px;
    height: 500px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const Description = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  font-style: italic;
`;

export const Coaches = styled.div`
  display: flex;
  gap: 50px;
  margin: 100px;
`;
