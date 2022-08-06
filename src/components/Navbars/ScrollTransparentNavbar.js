import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              Now Ui Kit PRO React
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              
              <NavItem>
                <Button
                  className="nav-link btn-default"
                  color={buyButtonColor}
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nuk-pro-react-scroll-transparent-navbar"
                  target="_blank"
                >
                  <p>Buy Now</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
