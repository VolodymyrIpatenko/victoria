import HeaderComponent from '../header/Header.js';
import PageFooter from '../footer/Footer.js';

const SharedLayout = ({ children }) => (
  <>
    <HeaderComponent />
    {children}
    <PageFooter />
  </>
);

export default SharedLayout;
