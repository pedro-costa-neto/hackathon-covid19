
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Carousel from "../IndexSections/Carousel";
import Inputs from "../IndexSections/Inputs";

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      <div className="position-relative" >
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">

            </div>
            
          </section>
        </div>
        
        <DemoNavbar />
        
        <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={e => this.setState({ searchFocused: true })}
                      onBlur={e => this.setState({ searchFocused: false })}
                    />
                  </InputGroup>
        
        <main ref="main">
          <section className="section section-shaped section-lg">
            <Container className="pt-lg-7">
            <img
              alt="..."
              className="img-fluid rounded-circle align-items-center"
              src={require("assets/img/theme/team-4-800x800.jpg")}
              style={{width: "150px" }}
            />
            </Container>
          </section>
        </main>
        <Carousel/>
        <label>
          Escolha seu sabor favorito:
          <select>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
        </label>

        <label>
          Parceiros
          </label>

          <label>
          Conteudo
          </label>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
