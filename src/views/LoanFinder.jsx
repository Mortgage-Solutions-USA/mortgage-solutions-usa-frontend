import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
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

import socialMedia from "../assets/data/social-media";

import "../assets/css/Home.css";

const Loanfinder = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [navbarOpen1, setNavbarOpen1] = useState(false);
  const [navbarColor, setNavbarColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor(" navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <div>
      {navbarOpen1 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <button
              aria-expanded={navbarOpen1}
              className="navbar-toggler"
              data-toggle="collapse"
              type="button"
            >
              <Link to="/">
                <i className="fas fa-chevron-left text-dark"></i>
              </Link>
            </button>
          </div>
          <Collapse navbar isOpen={navbarOpen1}>
            <NavbarBrand>
              <Link to="/">
                <img
                  src={require("../assets/img/MSU_Logo_Long_Black.png")}
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </Link>
            </NavbarBrand>
            {/* <Nav className="mx-auto" navbar style={{ paddingLeft: "19%" }}>
              <NavItem>
                <Button
                  className="nav-link"
                  color="danger"
                  href="https://msusa.zipforhome.com/CompanySite/LoanOfficers"
                >
                  Apply Now
                </Button>
              </NavItem>
            </Nav> */}
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href={socialMedia.facebook} target="_blank">
                  <i className="fab fa-facebook-square text-dark"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={socialMedia.instagram} target="_blank">
                  <i className="fab fa-instagram text-dark"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <div className="projects-1">
        <Container fluid>
          <Row
            className="loan-finder-pre-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/loan-finder-header.jpg") + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              maxHeight: "50vh",
              marginTop: "3%",
            }}
          >
            <div className="d-flex align-items-center loan-finder-header">
              <Col className="container mx-auto text-center " md="8">
                <h2
                  className="title text-light"
                  style={{
                    textShadow: "2px 2px 4px #484747",
                    fontSize: "50px",
                  }}
                >
                  Loan Programs
                </h2>
              </Col>
            </div>
          </Row>
          <div className="row">
            {/* setup tabs */}
            <div className="col-md-12 px-0">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-neutral justify-content-center py-0">
                    <li>
                      <a
                        className={`${
                          activeTab === 1 ? "tabs-active" : ""
                        } nav-link tabs-loans px-5 py-3`}
                        data-toggle="tab"
                        href="#link1"
                        style={{ fontSize: "20px" }}
                        onClick={() => setActiveTab(1)}
                      >
                        Conventional Loans
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${
                          activeTab === 2 ? "tabs-active" : ""
                        } nav-link tabs-loans px-5 py-3`}
                        data-toggle="tab"
                        href="#link2"
                        style={{ fontSize: "20px" }}
                        onClick={() => setActiveTab(2)}
                      >
                        FHA Loans
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${
                          activeTab === 4 ? "tabs-active" : ""
                        } nav-link tabs-loans px-5 py-3`}
                        data-toggle="tab"
                        href="#link3"
                        style={{ fontSize: "20px" }}
                        onClick={() => setActiveTab(4)}
                      >
                        VA Loans
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${
                          activeTab === 3 ? "tabs-active" : ""
                        } nav-link tabs-loans px-5 py-3`}
                        data-toggle="tab"
                        href="#link4"
                        style={{ fontSize: "20px" }}
                        onClick={() => setActiveTab(3)}
                      >
                        USDA Loans
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {activeTab === 1 ? (
            <div className="row py-5">
              <div className="col-md-12 py-5 my-5">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 py-5">
                    <h1 style={{ color: "#5083c6" }}>Conventional Loan</h1>
                    <p>
                      Conventional loans are an excellent match for a buyer with
                      a decent credit score and some savings for a down payment.
                    </p>
                    <h5>Conventional loans offer home buyers many benefits:</h5>
                    <ul className="loans-list">
                      <li>Down Payment Options</li>
                      <li>Option to Cancel Mortage Insurance</li>
                      <li>Option to Finance Multiple Property Types</li>
                    </ul>
                  </div>
                  <div className="col-md-5 text-center">
                    <img
                      className="pt-5"
                      src={require("../assets/img/conventional-loan.jpg")}
                      alt="conventional"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeTab === 2 ? (
            <div className="row py-5">
              <div className="col-md-12 py-5 my-5">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 py-5">
                    <h1 style={{ color: "#5083c6" }}>FHA LOAN</h1>
                    <p>
                      FHA loans are a flexible financing option for first-time
                      and repeat home buyers.
                    </p>
                    <h5>FHA loans offer home buyers many benefits:</h5>
                    <ul className="loans-list">
                      <li>FHA loans accept down payments as low as 3.5%.</li>
                      <li>
                        flexibility in the source of the mortgage down payment,
                        allowing greater mortgage and payment flexibility.
                      </li>
                      <li>
                        FHA allows higher qualifying debt to income ratios,
                        co-signers that do not have to live in the home, seller
                        assistance towards buyer closing costs, and more.
                      </li>
                      <li>
                        You can work with your loan officer to determine the
                        source of your mortgage and how it will impact your FHA
                        loan rate.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 text-center">
                    <img
                      className="pt-5"
                      src={require("../assets/img/fha-loan.jpg")}
                      alt="conventional"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeTab === 3 ? (
            <div className="row py-5">
              <div className="col-md-12 py-5 my-5">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 py-5">
                    <h1 style={{ color: "#5083c6" }}>USDA LOAN</h1>
                    <p>
                      Most U.S. properties are eligible, and middle-income
                      families often meet income requirements. To qualify for a
                      USDA rural development loan, you must be a US citizen that
                      plans to purchase a primary residence in a USDA-eligible
                      area. Your household income must be less than 115% of the
                      median income in your area. You’ll also need a steady
                      employment history, a healthy debt-to-income ratio, and a
                      minimum credit score of 640.
                    </p>
                    <h5>USDA loans offer home buyers many benefits:</h5>
                    <ul className="loans-list">
                      <li>No down payment</li>
                      <li>Low mortgage insurance premiums</li>
                      <li>Competitive interest rates</li>
                      <li>
                        The option for the seller to pay up to 6% in closing
                        costs and pre-paids for the buyer
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 text-center">
                    <img
                      className="pt-5"
                      src={require("../assets/img/usda-loan.jpg")}
                      alt="conventional"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeTab === 4 ? (
            <div className="row py-5">
              <div className="col-md-12 py-5 my-5">
                <div className="row d-flex justify-content-between">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 py-5">
                    <h1 style={{ color: "#5083c6" }}>VA LOAN</h1>
                    <p>
                      We want to help our military community finance their dream
                      homes! .Active military members, veterans, and surviving,
                      un-remarried spouses of military members may be eligible
                      for this type of loan.
                    </p>
                    <h5>VA loans have a variety of benefits available:</h5>
                    <ul className="loans-list">
                      <li>No down payment</li>
                      <li>Competitive interest rates</li>
                      <li>Seller-paid closing costs</li>
                      <li>NO PMI</li>
                    </ul>
                    <h5>
                      Your loan officer can explain the VA Funding fee given
                      your loan amount and mortgage down payment.
                    </h5>
                  </div>
                  <div className="col-md-5 text-center">
                    <img
                      className="pt-5"
                      src={require("../assets/img/va-loan.jpg")}
                      alt="conventional"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Container>
      </div>

      {/* Footer Section */}

      <footer className="footer bg-dark text-light">
        <Container>
          <div>
            © {new Date().getFullYear()}, Mortgage Solutions USA - All Rights
            Reserved.
          </div>
          <div>
            Made With <i className="fas fa-heart text-danger"></i> by Invigorate
            Code LLC
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Loanfinder;
