import { Footer, MailLink } from './Footer.styled';
import { LogoImg } from 'components/header/Header.styled';

const PageFooter = () => {
  return (
    <Footer>
      <a title="На головну" href="/">
        <LogoImg src={require('../images/logo.jpg')} alt="logo" />
      </a>
      <MailLink href="mailto:sport_club_victoria@gmail.com">
        sport_club_victoria@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
