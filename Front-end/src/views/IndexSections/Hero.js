import React from "react";
//import Carousel from './Carousel'
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col,  
} from "reactstrap";

import classnames from "classnames";
import '../../assets/css/navBar.css'

class Hero extends React.Component {
    state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <div className="position-relative" >
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">

            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0" >
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6" >
                    <p className="lead text-white" >
                      Portal destinado para pessoas ajudarem outras pessoas.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
