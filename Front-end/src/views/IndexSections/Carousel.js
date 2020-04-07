
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/team-4-800x800.jpg"),
    altText: ``,
    caption: "",
    header: ``
  }
];

{/* <li style={mystyle}>
            <img
              alt="..."
              className="img-fluid rounded-circle align-items-center"
              src={require("assets/img/theme/team-4-800x800.jpg")}
              style={style}
            />
            <br/>
            <br/>
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Psicóloga
            </small>

            <small className="d-block text-uppercase font-weight-bold mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </small>
            </li> */}

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
         
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              
            <UncontrolledCarousel items={items} />
             
            </Row>
          </Container>
          {/* SVG separator */}
          {/* <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div> */}
        </section>
      </>
    );
  }
}

export default Carousel;
