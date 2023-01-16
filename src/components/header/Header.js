import { SlSocialInstagram } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import { Header, Logo, Link, Nav, Wrap, InstaIcon } from './Header.styled';
import MobileMenuComponent from './MobileMenu.js';
import './header.css';
import { LogoImg } from 'components/common/Common.styled';

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Wrap>
          <a href="/">
            <LogoImg src={require('../images/logo.jpg')} alt="logo" />
          </a>
          <Nav>
            <Link to="/">Головна</Link>
            <Link
              className={({ isActive }) => (isActive ? 'active' : null)}
              to="/gallery"
            >
              Наш зал
            </Link>

            <Link to="/contacts">Зв'язатися з нами</Link>
          </Nav>

          <div>
            <InstaIcon
              target="_blank"
              href="https://www.instagram.com/sport_club_victoria/"
            >
              <SlSocialInstagram></SlSocialInstagram>
            </InstaIcon>
          </div>
        </Wrap>
      </Header>
      <MobileMenuComponent />
      <Outlet />
    </>
  );
};
