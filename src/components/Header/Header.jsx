import './Header.css';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
// Add a default export statement for Header component to use it in the other files