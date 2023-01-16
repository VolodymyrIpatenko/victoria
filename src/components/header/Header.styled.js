import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  top: 0;
  padding: 30px;
  background: linear-gradient(
    90deg,
    rgba(255, 52, 0, 1) 0%,
    rgba(212, 128, 0, 1) 100%,
    rgba(238, 130, 238, 1) 100%
  );
  @media (max-width: 768px) {
    display: block;
    height: 200px;
  }
`;

export const InstaIcon = styled.a`
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  color: white;
  &:hover {
    color: #2196f3;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 30px;
  right: 10px;

  @media screen and (min-width: 1199px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 30px;
    right: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 1px 4px;
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 30px;
  border-radius: 7px;
  color: white;
  &:is(:hover, :active) {
    color: #2196f3;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Logo = styled(Link)`
  font-size: 30px;
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  font-family: 'Freestype Script';
  @media screen and(max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  } ;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MobileWrap = styled.div`
  @media screen and (max-width: 1199px) {
    display: flex;
    gap: 300px;
  }
  display: none;
`;
