import React from "react";
import {
  Button,
  Card,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  NavbarBrand,
} from "reactstrap";

import bgVideo from "assets/img/columbia-skyline.mp4";

import img from "../assets/img/logo2.png";

import "../assets/css/Home.css";

const Home = () => {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);

  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [findLoanButtonColor, setFindLoanButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );

  const [homeButtonColor, setHomeButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "green"
      : "white"
  );

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setFindLoanButtonColor("info");
        setHomeButtonColor("#000000");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setFindLoanButtonColor("neutral");
        setHomeButtonColor("#ffffff");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {navbarOpen1 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-2">
          <Navbar
            className={"fixed-top" + navbarColor}
            color="white"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen1}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen1);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <Collapse navbar isOpen={navbarOpen1}>
                <NavbarBrand to="/" id="navbar-brand">
                  <img src={img} alt="logo" style={{ width: "125px" }} />
                </NavbarBrand>
                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <Button
                      className="nav-link"
                      color={findLoanButtonColor}
                      href="#find-loan-not-ready"
                      target="_blank"
                    >
                      <p>Find a Loan</p>
                    </Button>
                  </NavItem>
                </Nav>
                <Nav className="nav navbar-right" navbar>
                  <NavItem>
                    <NavLink href="#pablo" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" target="_blank">
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div className="page-header-image">
              <div className=".page-header-video-wrapper">
                <video
                  playsInline
                  autoPlay
                  loop
                  muted
                  poster="../assets/img/columbia-skyline.png"
                >
                  <source src={bgVideo} type="video/mp4" />
                  browser not supported
                </video>
              </div>
            </div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h1 className="h1-seo">Mortgage Solutions USA</h1>
                  <h3 className="description">
                    Brokering Loans for Better Solutions
                    <br />
                    NMLS #2116859
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className="cd-section" id="blogs">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/purchase.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">
                        <i className="now-ui-icons now-ui-icons shopping_shop"></i>{" "}
                        PURCHASING A HOME ?
                      </h6>
                      <p className="card-description">
                        The home of your dreams is waiting for you. By offering
                        personalized service, we quickly help secure the right
                        home loan for our clients. We make the loan process
                        simple, straightforward, and fast. Our team of
                        knowledgeable originators are on staff and ready to work
                        for you, give us a call today.{" "}
                      </p>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <h6 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons business_money-coins"></i>{" "}
                        LOOKING TO REFINANCE ?
                      </h6>
                      <p className="card-description">
                        If you're considering refinancing your current mortgage,
                        we can help you understand your options. We listen to
                        your specific needs then present personalized mortgage
                        options for you in real-time. Your needs can change, so
                        can your mortgage loan. Let us help.{" "}
                      </p>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/refinance.jpg")}
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
