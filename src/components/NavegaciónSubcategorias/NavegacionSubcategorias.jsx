
import { Link } from 'react-router-dom';

function NavegacionSubcategorias({ subcategorias }) {
  return (
    <nav>
      <ul style={{listStyle:"none", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
        {subcategorias.map((subcategoria) => (
          <li key={subcategoria}>
            <Link to={`/salon/${subcategoria}`} style={{margin:"10px", textDecoration:"none", color:"#333", fontWeight:"bolder"}}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavegacionSubcategorias;