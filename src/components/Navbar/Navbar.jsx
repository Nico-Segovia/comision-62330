/*
Una función se puede crear con 'function' o con 'función flecha'.

*/
import Navitem from "./Navitem/Navitem.jsx";

const Navbar = () => { 
    
    return (
    <>
        
        <ul>
            <Navitem/>
            <Navitem/>
            <Navitem/>
        </ul>
    </>
    );
}

export default Navbar;