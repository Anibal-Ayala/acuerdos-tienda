
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <nav style={{backgroundColor: '#333', color:'white', padding: '10px', display: 'flex',justifyContent: 'space-between', alignItems:'center'}}>
  
<div style={{display: 'flex', alignItems: 'center'}}>


  <Link to="/" style={{color:'white', textDecoration: 'none', fontSize:'20px', fontWeight:'bold'}}>
Acuerdos Comerciales
  </Link>

</div>

<div>

  <ul style={{listStyle:'none', margin:'0', padding:'0', display:'flex'}}>


    <li style={{margin: '0 10px'}} >
    <Link to="/salon" style={{color: 'white', textDecoration:'none'}}>Salon</Link>
    
   </li>

   <li style={{margin: '0 10px'}} >
   <Link to="/exhibidores" style={{color: 'white', textDecoration:'none'}}>Exhibidores</Link>
    
   </li>


   <li style={{margin: '0 10px'}} >
   <Link to="/checkout" style={{color: 'white', textDecoration:'none'}}>Checkout</Link>
    
   </li>


  </ul>
</div>
  
  
  
  
  
   </nav>
  );
}

export default Navbar;