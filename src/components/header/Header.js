import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav, Wrap, Icon, LogoImg } from './Header.styled';
import MobileMenuComponent from './MobileMenu.js';
import './header.css';

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Wrap>
          <a title="На головну" href="/">
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
            <Link to="/sportbar">Спортбар</Link>
          </Nav>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Icon
              target="_blank"
              href="https://www.instagram.com/sport_club_victoria/"
            >
              <SlSocialInstagram></SlSocialInstagram>
            </Icon>
            <Icon
              href="https://www.facebook.com/VICTORIAclubsport/"
              target="_blank"
            >
              <BsFacebook></BsFacebook>
            </Icon>
          </div>
        </Wrap>
      </Header>
      <MobileMenuComponent />
      <Outlet />
    </>
  );
};

export default HeaderComponent;
