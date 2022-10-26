import {Link} from "react-router-dom";
import CartWidget from "../CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import INavbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/logo.png"

import './NavBar.css';

const NavBar = () => {
    return (
        <>  
            <INavbar bg="light" variant="light">
                <Container>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                    <Nav className="me-auto">
                        <Link to='/'>Inicio</Link>
                        <Link to='/categoria/proyectos'>Proyectos</Link>
                        <Link to='/categoria/planos'>Planos</Link>
                        <Link to='/cart'><CartWidget /></Link>
                        
                    </Nav>
                </Container>
            </INavbar>        
        </>
    );
}

export default NavBar;