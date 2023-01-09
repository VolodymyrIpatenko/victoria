import { Logo } from '../header/Header.styled';
import { Footer, MailLink } from './Footer.styled';

const PageFooter = () => {
  return (
    <Footer>
      <a href="/">Victoria</a>
      <MailLink href="mailto:sport_club_victoria@gmail.com">
        sport_club_victoria@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
