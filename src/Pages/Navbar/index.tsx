import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container>
                    <Nav className="me-auto">
                        <Nav>
                            <Link className="nav-link" to={"/"}>About</Link>
                        </Nav>
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