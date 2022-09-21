import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import { useForm, ValidationError } from "@formspree/react";

import bgVideo from "assets/img/home-vid-bg.mp4";

import teamInfo from "../assets/data/team-info";
import socialMedia from "../assets/data/social-media";
import contact from "../assets/data/contact-us";

import headerLogo from "../assets/img/logo-white.png";

import "../assets/css/Home.css";

const Home = () => {
  const [navbarOpen1, setNavbarOpen1] = useState(false);
  const [formState, handleSubmit] = useForm("mlevgajo");
  const [checked, setChecked] = useState(false);
  const [navbarColor, setNavbarColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );

  const handleRobotCheck = () => {
    setChecked(!checked);
  };

  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };
  const videoParentRef = React.useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {}, []);

  const [text, setText] = useState({
    showMore1: false,
    showMore2: false,
    showMore3: false,
  });

  const [first1Focus, setFirst1Focus] = useState(false);
  const [email1Focus, setEmail1Focus] = useState(false);

  const { dave, ashley, katelynn } = teamInfo;

  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
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
  }, []);

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
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
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
            <Nav className="mx-auto" navbar style={{ paddingLeft: "9%" }}>
              <NavItem>
                <Link
                  className="nav-link btn"
                  to="/loans"
                  style={{ textDecoration: "none" }}
                >
                  Find a Loan
                </Link>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link"
                  color="danger"
                  href="https://msusa.zipforhome.com/CompanySite/LoanOfficers"
                >
                  Apply Now
                </Button>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href={socialMedia.facebook} target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={socialMedia.instagram} target="_blank">
                  <i className="fab fa-instagram"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <div className="cd-section" id="headers">
        <div className="header-2">
          <div className="page-header header-filter">
            <div className="page-header-image">
              <div className=".page-header-video-wrapper">
                {shouldUseImage ? (
                  <img alt="..." className="page-header-image" src={bgVideo} />
                ) : (
                  <div
                    ref={videoParentRef}
                    dangerouslySetInnerHTML={{
                      __html: `<video autoplay loop muted playsinline class="page-header-video">
                      <source src=${bgVideo} type="video/mp4" />
                    </video>`,
                    }}
                  />
                )}
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
                      <span className="text-danger">
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
                <span
                  className="text-danger trusted"
                  style={{ fontSize: "250%" }}
                >
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
                    className="btn btn-danger"
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
              <h2 className="title">{contact.title}</h2>
              <h4 className="description">{contact.description}</h4>
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i className="now-ui-icons location_pin"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">{contact.address.title}</h4>
                  <p className="description">
                    {contact.address.street1},<br />
                    {contact.address.street2},<br />
                    {contact.address.cityStateZip}
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-info">
                  <i className="now-ui-icons tech_mobile"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">{contact.phone.title}</h4>
                  <p className="description">
                    {contact.companyName} <br></br>
                    {contact.phone.description} <br></br>
                    {contact.phone.email}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-contact card-raised">
                {formState.succeeded ? (
                  <>
                    <div className="m-5 text-center text-success">
                      <i className="fas fa-6x fa-paper-plane"></i>
                    </div>
                    <h5 className="text-center">Sent</h5>
                    <p className="text-center">
                      Your message has been sent. We will be in touch shortly.
                    </p>
                  </>
                ) : (
                  <Form
                    onSubmit={handleSubmit}
                    id="contact-form1"
                    method="post"
                    role="form"
                  >
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Contact Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2">
                          <label htmlFor="name">Name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Full Name..."
                              autoComplete="given-name"
                              placeholder="Full Name..."
                              type="text"
                              id="name"
                              name="name"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                            <ValidationError
                              prefix="name"
                              field="name"
                              errors={formState.errors}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label htmlFor="email">Email address</label>
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
                            id="email"
                            name="email"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={formState.errors}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="message">Your message</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={formState.errors}
                        />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                checked={checked}
                                onChange={handleRobotCheck}
                              ></Input>
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
                            disabled={!checked || formState.isSubmitting}
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Pre-Footer Section */}

      <div className="social-line social-line-big-icons social-line-white">
        <Container>
          <Row>
            <Col md="4"></Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="facebook"
                href={socialMedia.facebook}
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </Col>
            <Col md="2">
              <Button
                className="btn-neutral btn-icon btn-footer"
                color="instagram"
                href={socialMedia.instagram}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </Col>
            <Col md="4"></Col>
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
          <div>
            Made With <i className="fas fa-heart text-danger"></i> by Invigorate
            Code LLC
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Home;
