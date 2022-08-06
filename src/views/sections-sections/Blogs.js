import React from "react";

// reactstrap components
import {
  Card,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Blogs() {
  return (
    <>
      <div className="cd-section" id="blogs">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/examples/card-blog4.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">Enterprise</h6>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Warner Music Group buys concert discovery service
                          Songkick
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Warner Music Group announced today it’s acquiring the
                        selected assets of the music platform Songkick,
                        including its app for finding concerts and the company’s
                        trademark. Songkick has been involved in a lawsuit
                        against the major…{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <p className="author">
                        by{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <b>Sarah Perez</b>
                        </a>
                        , 2 days ago
                      </p>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <h6 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                        Startup
                      </h6>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Insticator raises $5.2M to help publishers
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Insticator is announcing that it has raised $5.2 million
                        in Series A funding. The startup allows online
                        publishers to add quizzes, polls and other interactive
                        elements (either created by Insticator or by the
                        publisher themselves) to their stories.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <p className="author">
                        by{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <b>Anthony Ha</b>
                        </a>
                        , 5 days ago
                      </p>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/examples/card-blog6.jpg")}
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
}

export default Blogs;
