import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHandHoldingHeart } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { handleLogout, user } = useAuth();

  return (
    <div>
      <Navbar variant="dark" bg="secondary" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand to="#">
            <FaHandHoldingHeart></FaHandHoldingHeart> Medicare <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-link "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/doctors">Doctors</Link>
              <Link to="/book">Book</Link>
              <Link to="/review">Review</Link>
              <Link to="/blogs">Blogs</Link>
              {user.email ? (
                <button onClick={handleLogout} className="btn btn-primary">
                  Log out
                </button>
              ) : (
                <Link to="/login">Login</Link>
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
