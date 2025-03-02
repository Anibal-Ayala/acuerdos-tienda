
import { Link } from 'react-router-dom';

function NavegacionSubcategorias({ subcategorias }) {
  return (
    <nav style={{backgroundColor:"#f0f0f0", padding:"10px", marginTop:"10px" }}>
      <ul style={{listStyle:"none", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
        {subcategorias.map((subcategoria) => (
          <li key={subcategoria} style={{marginRight:"10px", marginBottom:"5px"}}>
            <Link to={`/salon/${subcategoria}`} style={{padding:"5px 10px",backgroundColor:"#e0e0e0",borderRadius:"5px", textDecoration:"none"}}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavegacionSubcategorias;