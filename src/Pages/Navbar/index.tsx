import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to={"/"}>About</Link>
                    <Nav className="me-auto">
                        <Nav>
                            <Link to="/rules" className="nav-link">Rules</Link>
                        </Nav>
                        <Nav>
                            <Link to="/game" className="nav-link">Game</Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;