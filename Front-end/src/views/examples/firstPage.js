
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
import '../../assets/css/global.css'

const items = [
  'require("assets/img/theme/team-1-800x800.jpg")',
  'require("assets/img/theme/team-2-800x800.jpg")',
  'require("assets/img/theme/team-3-800x800.jpg")',
  'require("assets/img/theme/team-4-800x800.jpg")',
];

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
          <section className="section section-hero section-shaped" >
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default" style={{height:"150px"}}>    
            </div>
             <section className="section section-shaped section-lg">
                  <Container className="pt-md-7">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle align-items-center"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                    style={{width: "150px",marginLeft:'90%',marginTop:'-260px' }}
                  />
                  </Container>
                </section>
               
          </section>
        </div>
        
        {/* <DemoNavbar /> */}
        <div style={{width: "50%",marginLeft:'20%',marginTop:'-370px'}}>
          <InputGroup className="mb-4" >
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
        </div>
        <main ref="main">
        <section className="section align-itens section-shaped section-lg">
                  <Container className="pt-md-7" style={{marginTop:'50px'}}>
                  <img
                    alt="..."
                    className="img-fluid  align-items-center"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{width: "150px",marginLeft:'10%',marginTop:'-160px' }}
                  />
                  </Container>
                  <Container className="pt-md-7">
                  <img
                    alt="..."
                    className="img-fluid  align-items-center"
                    src={require("assets/img/theme/team-2-800x800.jpg")}
                    style={{width: "150px",marginLeft:'30%',marginTop:'-400px' }}
                  />
                  </Container>
                  <Container className="pt-md-7">
                  <img
                    alt="..."
                    className="img-fluid  align-items-center"
                    src={require("assets/img/theme/team-3-800x800.jpg")}
                    style={{width: "150px",marginLeft:'49%',marginTop:'-640px' }}
                  />
                  </Container>
                  <Container className="pt-md-7">
                  <img
                    alt="..."
                    className="img-fluid  align-items-center"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                    style={{width: "150px",marginLeft:'70%',marginTop:'-880px'  }}
                  />
                  </Container>
                </section>
                <div style={{marginTop:'-400px',marginLeft:'10%'}}>
                <div>
                  <label>
                  Escolha seu 
                  <select>
                  <option value="profissional">Profissional</option>
                    <option value="professor">Professor</option>
                    <option value="medico">Médico</option>
                    <option value="nutricionista">Nutricionista</option>
                    <option value="personal">Personal Trainer</option>
                  </select>
                </label>
              </div>
              <div >
                <label>Conteudo</label>
              </div>
              </div>
        </main>
      
        
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
