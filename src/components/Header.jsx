import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile, logout } from "../redux/actions/auth";
import logo from "../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile(navigate));
    }
  }, [dispatch, isLoggedIn, navigate, token]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="nav"
    >
      <Container>
        <img
          src={logo}
          className="me-2"
          height="20"
          alt="Logo"
          loading="lazy"
        />
        <Navbar.Brand className="navTitle" as={Link} to="/">
          Movie App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/user/dashboard"}>
                  Dashboard ({user?.name})
                </Nav.Link>
                <Button
                  onClick={() => dispatch(logout(navigate))}
                  variant="danger"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to={"/login"}
                  variant="primary"
                  className="m-1"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to={"/register"}
                  variant="outline-primary"
                  className="m-1"
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
