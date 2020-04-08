
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/team-1-800x800.jpg"),
    altText: ``,
    caption: "",
    header: ``
  },{
    src: require("assets/img/theme/team-2-800x800.jpg"),
    altText: ``,
    caption: "",
    header: ``
  },{
    src: require("assets/img/theme/team-3-800x800.jpg"),
    altText: ``,
    caption: "",
    header: ``
  },{
    src: require("assets/img/theme/team-4-800x800.jpg"),
    altText: ``,
    caption: "",
    header: ``
  }
];


class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
         
          <Container className="py-md" style={{width: "150px"}}>
            <Row className="justify-content-between align-items-center">
              
            <UncontrolledCarousel items={items}/>
             
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
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
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
