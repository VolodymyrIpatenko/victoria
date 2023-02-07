import styled from 'styled-components';

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

export const Coaches = styled.ul`
  display: grid;
  gap: 150px;
  margin: 100px;
  @media screen and (max-width: 1199px) {
    gap: 200px;
  }
`;

export const CoachDescription = styled.p`
  padding: 10px;
  text-align: left;
  line-height: 28px;
`;
