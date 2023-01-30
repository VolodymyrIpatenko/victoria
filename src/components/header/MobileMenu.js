import { GiHamburgerMenu } from 'react-icons/gi';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';
import { Link, Icon, MobileMenu } from './Header.styled';
import { useState } from 'react';
import { LogoImg } from 'components/common/Common.styled';
import { Breakpoint } from 'react-socks';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useState(false);

  const onHandleShowMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <MobileMenu>
      <Breakpoint style={{ display: 'flex', gap: '300px' }} small down>
        <a title="На головну" href="/">
          <LogoImg src={require('../images/logo.jpg')} alt="logo" />
        </a>
        <GiHamburgerMenu onClick={() => onHandleShowMenu()}></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
          <Link
            className={({ isActive }) => (isActive ? 'active' : null)}
            to="/"
          >
            Головна
          </Link>
          <Link to="/gallery">Наш зал</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/sportbar">Спортбар</Link>
          <Icon
            href="https://www.instagram.com/sport_club_victoria/"
            target="_blank"
          >
            <SlSocialInstagram></SlSocialInstagram>
          </Icon>
          <Icon
            href="https://www.facebook.com/VICTORIAclubsport/"
            target="_blank"
          >
            <BsFacebook></BsFacebook>
          </Icon>
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
