import { SlSocialInstagram } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import { Header, Logo, Link, Nav, Wrap, InstaIcon } from './Header.styled';
import MobileMenuComponent from './MobileMenu.js';
import './header.css';

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Wrap>
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
