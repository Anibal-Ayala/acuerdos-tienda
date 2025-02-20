
import { Link } from 'react-router-dom';

function NavegacionSubcategorias({ subcategorias }) {
  return (
    <nav>
      <ul>
        {subcategorias.map((subcategoria) => (
          <li key={subcategoria}>
            <Link to={`/salon/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavegacionSubcategorias;