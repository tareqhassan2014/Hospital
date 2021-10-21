import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ProfilePopper from "../ProfilePopper/ProfilePopper";
import Logo from "./../../../images/viscareo-logo1.svg";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [collapsed, setCollapsed] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={isSticky || collapsed ? "shadow-sm bg-white py-2" : "py-4"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Logo"
            src={Logo}
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setCollapsed(!collapsed ? "show" : null)}
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse id="responsive-navbar-nav" className={collapsed}>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => window.scrollTo(500, 0)}
              className="me-md-5"
              active
            >
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard" className="me-md-5" active>
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/doctors" className="me-md-5" active>
              Doctors
            </Nav.Link>

            <Nav.Link as={Link} to="/store" className="me-md-5" active>
              Store
            </Nav.Link>

            {user ? (
              <div style={{ marginRight: "5.5rem" }}>
                <ProfilePopper />
              </div>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="me-md-5 px-4 btn btn-main"
                active
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
