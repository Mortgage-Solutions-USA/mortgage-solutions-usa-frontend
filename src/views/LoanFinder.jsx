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
  CardBody,
  Card,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import "../assets/css/Home.css";

const Loanfinder = () => {
  const [conModal, setConModal] = useState({
    modal: false,
    backdrop: true,
  });
  const [fhaModal, setFhaModal] = useState({
    modal: false,
    backdrop: true,
  });
  const [vaModal, setVaModal] = useState({
    modal: false,
    backdrop: true,
  });
  const [usdaModal, setUsdaModal] = useState({
    modal: false,
    backdrop: true,
  });

  const [navbarOpen1, setNavbarOpen1] = useState(false);
  const [navbarColor, setNavbarColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const toggleConModal = () => {
    setConModal({ ...conModal, modal: !conModal.modal });
  };

  const toggleFhaModal = () => {
    setFhaModal({ ...fhaModal, modal: !fhaModal.modal });
  };

  const toggleVaModal = () => {
    setVaModal({ ...vaModal, modal: !vaModal.modal });
  };

  const toggleUsdaModal = () => {
    setUsdaModal({ ...usdaModal, modal: !usdaModal.modal });
  };

  return (
    <div style={{ height: "100%", backgroundColor: "#b9b9b9" }}>
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
                <i className="fas fa-chevron-left text-light"></i>
              </Link>
            </button>
          </div>
          <Collapse navbar isOpen={navbarOpen1}>
            <NavbarBrand>
              <Link to="/">
                <img
                  src={require("../assets/img/logo-white.png")}
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
                <NavLink href="#pablo" target="_blank">
                  <i className="fab fa-twitter text-dark"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" target="_blank">
                  <i className="fab fa-facebook-square text-dark"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" target="_blank">
                  <i className="fab fa-instagram text-dark"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <div className="projects-1">
        <Container fluid>
          <Row>
            <Col className="mx-auto text-center" md="8">
              <h2
                className="title text-light"
                style={{ textShadow: "2px 2px 4px #484747", fontSize: "50px" }}
              >
                Loan Programs
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="px-0" md="6">
              <Card
                className="card-background card-background-product card-no-shadow"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/project1.jpg") + ")",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={toggleConModal}
              >
                <CardBody>
                  <h1 className="category">Conventional Loan</h1>
                </CardBody>
              </Card>
            </Col>
            <Col className="px-0" md="6">
              <Card
                className="card-raised card-background card-background-product card-no-shadow"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/project18.jpg") + ")",
                  cursor: "pointer",
                }}
                onClick={toggleFhaModal}
              >
                <CardBody>
                  <h1 className="category">FHA LOAN</h1>
                </CardBody>
              </Card>
            </Col>
            <Col className="px-0" md="6">
              <Card
                className="card-background card-background-product card-no-shadow"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/project20.jpg") + ")",
                  cursor: "pointer",
                }}
                onClick={toggleUsdaModal}
              >
                <CardBody>
                  <h1 className="category">USDA LOAN</h1>
                </CardBody>
              </Card>
            </Col>
            <Col className="px-0" md="6">
              <Card
                className="card-background card-background-product card-no-shadow"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/project19.jpg") + ")",
                  cursor: "pointer",
                }}
                onClick={toggleVaModal}
              >
                <CardBody>
                  <h1 className="category">VA LOAN</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Modals Start */}

      <Modal
        isOpen={conModal.modal}
        toggle={toggleConModal}
        backdrop={conModal.backdrop}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleConModal}>Conventional Loan</ModalHeader>
        <ModalBody>
          Conventional loans are an excellent match for a buyer with a decent
          credit score and some savings for a down payment. Conventional loans
          offer home buyers many benefits, including down payment options, the
          option to cancel mortgage insurance, and the option to finance
          multiple property types (e.g., investment, vacation, or primary
          residences)
        </ModalBody>
      </Modal>

      <Modal
        isOpen={fhaModal.modal}
        toggle={toggleFhaModal}
        backdrop={fhaModal.backdrop}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleFhaModal}>FHA LOAN</ModalHeader>
        <ModalBody>
          FHA loans are a flexible financing option for first-time and repeat
          home buyers. FHA loans accept down payments as low as 3.5%. There’s
          also flexibility in the source of the mortgage down payment, allowing
          greater mortgage and payment flexibility. FHA allows higher qualifying
          debt to income ratios, co-signers that do not have to live in the
          home, seller assistance towards buyer closing costs, and more. You can
          work with your loan officer to determine the source of your mortgage
          and how it will impact your FHA loan rate.
        </ModalBody>
      </Modal>

      <Modal
        isOpen={usdaModal.modal}
        toggle={toggleUsdaModal}
        backdrop={usdaModal.backdrop}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleUsdaModal}>USDA LOAN</ModalHeader>
        <ModalBody>
          The USDA loan program offers several benefits, including no down
          payment, low mortgage insurance premiums, competitive interest rates,
          and the option for the seller to pay up to 6% in closing costs and
          pre-paids for the buyer. Additionally, most U.S. properties are
          eligible, and middle-income families often meet income requirements.
          To qualify for a USDA rural development loan, you must be a US citizen
          that plans to purchase a primary residence in a USDA-eligible area.
          Your household income must be less than 115% of the median income in
          your area. You’ll also need a steady employment history, a healthy
          debt-to-income ratio, and a minimum credit score of 640.
        </ModalBody>
      </Modal>

      <Modal
        isOpen={vaModal.modal}
        toggle={toggleVaModal}
        backdrop={vaModal.backdrop}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleVaModal}>VA LOAN</ModalHeader>
        <ModalBody>
          We want to help our military community finance their dream homes!
          .Active military members, veterans, and surviving, un-remarried
          spouses of military members may be eligible for this type of loan.VA
          loans have a variety of benefits available. When you get a VA loan,
          there is no down payment, competitive interest rates, seller-paid
          closing costs, and NO PMI. Your loan officer can explain the VA
          Funding fee given your loan amount and mortgage down payment.
        </ModalBody>
      </Modal>

      {/* Modals End */}
    </div>
  );
};

export default Loanfinder;
