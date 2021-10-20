import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHandHoldingHeart } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { handleLogout, user } = useAuth();

  return (
    <div>
      <Navbar variant="dark" bg="secondary" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <FaHandHoldingHeart></FaHandHoldingHeart> Medicare <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/doctors">Doctors</Nav.Link>
              <Nav.Link href="/book">Book</Nav.Link>
              <Nav.Link href="/review">Review</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              {user.email ? (
                <button onClick={handleLogout} className="btn btn-primary">
                  Log out
                </button>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
              <p>{user.displayName}</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
