import { GiHamburgerMenu } from 'react-icons/gi';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link, InstaIcon, MobileMenu } from './Header.styled';
import { useState } from 'react';
import { Breakpoint } from 'react-socks';

export default function MobileMenuComponent() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onHandleShowMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <MobileMenu>
      <Breakpoint small down>
        <GiHamburgerMenu onClick={() => onHandleShowMenu()}></GiHamburgerMenu>
      </Breakpoint>
      {mobileMenu ? (
        <MobileMenu>
          <Link
            className={({ isActive }) => (isActive ? 'active' : null)}
            to="/"
          >
            Головна
          </Link>
          <Link to="/gallery">Наш зал</Link>
          <Link to="/contacts">Контакти</Link>
          <InstaIcon
            target="_blank"
            href="https://www.instagram.com/decorboutiquerental/"
          >
            <SlSocialInstagram></SlSocialInstagram>
          </InstaIcon>
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
