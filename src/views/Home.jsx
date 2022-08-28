import React, { useState, useEffect } from "react";
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
  CardFooter,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Select from "react-select";

import bgVideo from "assets/img/home-vid-bg.mp4";

// import img from "../assets/img/logo2.png";
import headerLogo from "../assets/img/msa-header-logo.png";

import "../assets/css/Home.css";

const Home = () => {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = useState(false);

  const [navbarColor, setNavbarColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [findLoanButtonColor, setFindLoanButtonColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );

  // const [homeButtonColor, setHomeButtonColor] = useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? "green"
  //     : "white"
  // );

  const [text, setText] = useState({
    showMore1: false,
    showMore2: false,
    showMore3: false,
  });

  const [first1Focus, setFirst1Focus] = useState(false);
  const [last1Focus, setLast1Focus] = useState(false);
  const [email1Focus, setEmail1Focus] = useState(false);
  const [modal, setModal] = useState(false);
  const [singleSelect, setSingleSelect] = useState(null);

  const [nucleoFocusInterest, setNucleoFocusInterest] = useState(false);

  const [nucleoFocusLoanAmount, setNucleoFocusLoanAmount] = useState(false);
  const [nucleoFocusTermYrs, setNucleoFocusTermYrs] = useState(false);
  const [nucleoFocusTermMths, setNucleoFocusTermMths] = useState(false);

  const toggleModal = () => setModal(!modal);

  const teamInfo = {
    dave: {
      name: "Dave Andrews",
      title: "Mortgage Load Broker / Originator",
      license: "NMLS # 305069",
      img: "../assets/img/dave-headshot.png",
      url: "https://dave.zipforhome.com/",
      desc: "As you consider selling, buying, refinancing, or even building your dream home, there is a lot riding on your mortgage banker. With mortgage programs and market conditions changing constantly, you need to make sure you are working with a skilled professional who can respond to you quickly. As an experienced mortgage banker, I understand everyone&#39;s financial situation is different and should be treated as such, I am committed to providing my customers with mortgage services that exceed their expectations. I have the knowledge and expertise you need to make the right choice for you and your family. I look forward to working with you!",
    },
    katelynn: {
      name: "Katelynn Frank",
      title: "Mortgage Load Originator",
      license: "NMLS # 2029470",
      img: "../assets/img/katelynn-headshot.png",
      url: "https://katelynn.zipforhome.com/",
      desc: "Hello, I am Katelynn Frank a born and raised resident of Mid Missouri. My husband and I moved our family to Eldon, Missouri in 2021 and we love our community! I have been in the mortgage industry since January of 2021 and am happy to say that I have finally found a career where my heart belongs. After years of a career in the medical field, it in ingrained in me to serve, help, and solve for people and families. My promise to you as my client is to listen, communicate, and work to find the best loan product for your individual needs, all while making the process of purchasing your dream home or refinancing your forever home as seamless and stress free as possible! I truly look forward to working with you and your family to make the dream of home ownership a reality. Let&#39;s get started! ",
    },
    ashley: {
      name: "Ashley Taillon",
      title: "Director of Marketing / Mortgage Loan Originator",
      license: "NMLS # 2375078",
      img: "../assets/img/ashley-headshot.png",
      url: "https://ashley.zipforhome.com/",
      desc: "My name is Ashley Taillon! I have been in the mortgage industry for 3 years now! I started as a loan officer assistant, and then moved to processing making me involved in all of the back end work that goes on with your mortgage! I am now a licensed mortgage loan originator!I am originally from upstate New York. I moved to Columbia, Missouri in September of 2018 and love it! Missouri is my new home. I am a cat mom to two big furballs named Ozzy and Lola. I like camping in tents, hiking, swimming, bike riding, singing, doing yoga, and of course, playing with my kitty cats! I am looking forward to helping you reach your dreams revolving around your home purchase or refinance! You deserve to feel at home and the help of an honest lender. My vow to you is just that.",
    },
    chad: {
      name: "Chad",
      url: "https://chad.zipforhome.com/",
      img: "../assets/img/chad-headshot.png",
    },
  };

  const { dave, katelynn, ashley } = teamInfo;

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setFindLoanButtonColor("info");
        // setHomeButtonColor("#000000");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setFindLoanButtonColor("danger");
        // setHomeButtonColor("#ffffff");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      <Modal style={{ marginTop: "10%" }} isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Loan Finder</ModalHeader>
        <ModalBody>
          <InputGroup
            className={nucleoFocusLoanAmount ? "input-group-focus" : ""}
          >
            <Input
              placeholder="Loan Amount"
              type="number"
              onFocus={() => setNucleoFocusLoanAmount(true)}
              onBlur={() => setNucleoFocusLoanAmount(false)}
            ></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup className={nucleoFocusTermYrs ? "input-group-focus" : ""}>
            <Input
              placeholder="Loan Term Years"
              type="number"
              onFocus={() => setNucleoFocusTermYrs(true)}
              onBlur={() => setNucleoFocusTermYrs(false)}
            ></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup
            className={nucleoFocusTermMths ? "input-group-focus" : ""}
          >
            <Input
              placeholder="Loan Term Months"
              type="number"
              onFocus={() => setNucleoFocusTermMths(true)}
              onBlur={() => setNucleoFocusTermMths(false)}
            ></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup
            className={nucleoFocusInterest ? "input-group-focus" : ""}
          >
            <Input
              placeholder="Interest Rate"
              type="number"
              onFocus={() => setNucleoFocusInterest(true)}
              onBlur={() => setNucleoFocusInterest(false)}
            ></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Select
            className="react-select react-select-info mt-2"
            onChange={(value) => setSingleSelect(value)}
            classNamePrefix="react-select"
            placeholder="Compounding Frequency"
            value={singleSelect}
            name="compound"
            options={[
              { value: "0", label: "ANNUALLY (APY)" },
              { value: "1", label: "SEMI-ANNUALLY" },
              { value: "2", label: "QUARTELY" },
              { value: "3", label: "MONTHLY (APR)" },
            ]}
          ></Select>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            CANCEL
          </Button>{" "}
          <Button color="success" onClick={toggleModal}>
            CALCULATE
          </Button>
        </ModalFooter>
      </Modal>
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
                <Nav className="mx-auto" navbar style={{ paddingLeft: "14%" }}>
                  <NavItem>
                    <Button className="nav-link" onClick={toggleModal}>
                      <p>Find a Loan</p>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="nav-link"
                      color="danger"
                      href="https://msusa.zipforhome.com/CompanySite/LoanOfficers"
                    >
                      <p>Apply Now</p>
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
            {/* <div style={{ height: "100vh" }}> */}
            <div className="overlay">
              <Container style={{ height: "100vh" }}>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <img src={headerLogo} alt="logo" style={{ width: "75%" }} />
                    <h3 className="description">
                      Brokering Loans for Better Solutions
                      <br />
                      NMLS #2116859
                    </h3>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* About Us Section */}

      <div className="cd-section" id="blogs">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Row className="mb-3 border-bottom">
                  <Col className="text-center">
                    <h2>
                      YOUR{" "}
                      <span className="text-success">
                        <strong>TRUSTED</strong>
                      </span>{" "}
                      MORTGAGE EXPERTS
                    </h2>
                    <p>
                      Buying a home is about more than interest rates. You need
                      knowledgeable, mortgage professionals who give you their
                      best-consistently. Whether you're a first-time home buyer
                      or looking to refinance an existing loan, our
                      professionally trained staff of Mortgage Advisors is ready
                      to help.
                    </p>
                  </Col>
                </Row>
                <Card className="card-plain card-blog mt-3">
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

      {/* Team Section */}

      <div
        className="team-5 section-image"
        style={{
          backgroundImage: "url(" + require("assets/img/bg9.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">
                MEET YOUR TEAM OF <br />
                <span className="text-success" style={{ fontSize: "250%" }}>
                  <strong>TRUSTED</strong>
                </span>{" "}
                <br />
                MORTGAGE EXPERTS
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-profile">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/dave-headshot.png")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h3">{dave.name}</CardTitle>
                  <h6 className="category text-info">
                    {dave.title} <br />{" "}
                    <span className="text-dark">{dave.license}</span>
                  </h6>
                  <p className="card-description">
                    {text.showMore1
                      ? dave.desc
                      : `${dave.desc.substring(0, 250)}`}{" "}
                    <Button
                      color="info"
                      className="btn-link pl-0"
                      onClick={() =>
                        setText({ ...text, showMore1: !text.showMore1 })
                      }
                    >
                      {text.showMore1 ? "show less" : "see more"}
                    </Button>
                  </p>
                  <a className="btn btn-danger" href={dave.url} color="danger">
                    Apply with Dave
                  </a>
                  <CardFooter>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/katelynn-headshot.png")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">{katelynn.name}</CardTitle>
                  <h6 className="category text-info">
                    {katelynn.title}
                    <br /> <span className="text-dark">{katelynn.license}</span>
                  </h6>
                  <p className="card-description">
                    {text.showMore2
                      ? katelynn.desc
                      : `${katelynn.desc.substring(0, 250)}`}{" "}
                    <Button
                      color="info"
                      className="btn-link pl-0"
                      onClick={() =>
                        setText({ ...text, showMore2: !text.showMore2 })
                      }
                    >
                      {text.showMore2 ? "show less" : "see more"}
                    </Button>
                  </p>
                  <a
                    className="btn btn-danger"
                    href={katelynn.url}
                    color="danger"
                  >
                    Apply with Katelynn
                  </a>
                  <CardFooter>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="ashley-headshot"
                      className="img img-raised"
                      src={require("assets/img/ashley-headshot.png")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">{ashley.name}</CardTitle>
                  <h6 className="category text-info">
                    {ashley.title} <br />{" "}
                    <span className="text-dark">{ashley.license}</span>
                  </h6>
                  <p className="card-description">
                    {text.showMore3
                      ? ashley.desc
                      : `${ashley.desc.substring(0, 250)}`}{" "}
                    <Button
                      color="info"
                      className="btn-link pl-0"
                      onClick={() =>
                        setText({ ...text, showMore3: !text.showMore3 })
                      }
                    >
                      {text.showMore3 ? "show less" : "see more"}
                    </Button>
                  </p>

                  <a
                    classoName="btn btn-danger"
                    href={ashley.url}
                    color="danger"
                  >
                    Apply with Ashley
                  </a>

                  <CardFooter>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-pinterest"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Us */}

      <div className="contactus-1 text-dark pb-0">
        <Container>
          <Row className="border-bottom">
            <Col md="5">
              <h2 className="title">Get in Touch</h2>
              <h4 className="description">
                Need to get in touch with us ? Either fill out the form with
                your inquiry or find the contact information below.
              </h4>
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i className="now-ui-icons location_pin"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p className="description">
                    714 State Hwy 248 <br></br>
                    Suite 531 Branson, <br></br>
                    MO 65616
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i className="now-ui-icons tech_mobile"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p className="description">
                    Mortgage Solutions USA <br></br>
                    417-544-0980 <br></br>
                    Dave@mortgagesolutions-usa.com
                  </p>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-contact card-raised">
                <Form id="contact-form1" method="post" role="form">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Contact Us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="pr-2" md="6">
                        <label>First name</label>
                        <InputGroup
                          className={first1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            autoComplete="given-name"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirst1Focus(true)}
                            onBlur={() => setFirst1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2" md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={last1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons text_caps-small"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              autoComplete="family-name"
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLast1Focus(true)}
                              onBlur={() => setLast1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={email1Focus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email Here..."
                          type="email"
                          onFocus={() => setEmail1Focus(true)}
                          onBlur={() => setEmail1Focus(false)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            I'm not a robot
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button
                          className="btn-round pull-right"
                          color="info"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Pre-Footer Section */}

      <div className="social-line social-line-big-icons social-line-white">
        <Container>
          <Row>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="twitter"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="facebook"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="google"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="dribbble"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-dribbble"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="youtube"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-youtube"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="instagram"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}

      <footer className="footer bg-dark text-light">
        <Container>
          <div>
            © {new Date().getFullYear()}, Mortgage Solutions USA - All Rights
            Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Home;
