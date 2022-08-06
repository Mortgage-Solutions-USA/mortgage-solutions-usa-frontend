import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);


  return (
    <>
      {navbarOpen1 || navbarOpen2 || navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
            setNavbarOpen2(false);
            setNavbarOpen3(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-2">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen2}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen2);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <Collapse navbar isOpen={navbarOpen2}>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#blogs" onClick={(e) => e.preventDefault()}>
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find a Loan
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav navbar-right" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/bg14.jpg") + ")"
              }}
            ></div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h1 className="title">You should be here!</h1>
                  <h5 className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </h5>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Card
                    className="card-raised card-form-horizontal card-plain"
                    data-background-color=""
                  >
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="family-name"
                                defaultValue=""
                                placeholder="Full Name"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="email"
                                placeholder="Your Email"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Join Us
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headers;
