
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Aplicación</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/salon">Salón</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/isla">Isla</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;