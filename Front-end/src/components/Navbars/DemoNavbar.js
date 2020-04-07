import React, { useState } from 'react';
import classnames from "classnames";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import '../../assets/css/navBar.css'
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Label,
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


class DemoNavbar extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
    
  };
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Seu sabor favorito é: ' + this.state.value);
    event.preventDefault();
  }
    
  render() {
  
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
          
                {/* INITI */}
                
        <Row md="1" className="btn-wrapper mt-1" id='btn_container'>
          <Col >
           
            <Button
               className="btn-icon mt-2 mb-2"
               color="primary"
               size="md"
              type="button"
              onClick={() => this.toggleModal("BtnLogin")}
            >
              <span>Entrar</span>
            </Button>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.BtnLogin}
              toggle={() => this.toggleModal("BtnLogin")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Fazer Login</small>
                    </div>
                    <Form role="form">
                      <FormGroup
                        className={classnames("mb-3", {
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="E-mail"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.passwordFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Senha"
                            type="password"
                            autoComplete="off"
                            onFocus={e =>
                              this.setState({ passwordFocused: true })
                            }
                            onBlur={e =>
                              this.setState({ passwordFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                    
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          Fazer login
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
          </Col>

          <Col>
            <Button
               className="btn-icon mt-2 mb-2"
               color="primary"
               size="md"
              type="button"
              onClick={() => this.toggleModal("btnCadastro")}
            >
              <span>Cadastro</span>
            </Button>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.btnCadastro}
              toggle={() => this.toggleModal("btnCadastro")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Cadastro</small>
                    </div>
                    <Form role="form">
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nome completo"
                            type="text"
                            
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames("mb-3", {
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="E-mail"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.passwordFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Senha"
                            type="password"
                            autoComplete="off"
                            onFocus={e =>
                              this.setState({ passwordFocused: true })
                            }
                            onBlur={e =>
                              this.setState({ passwordFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.passwordFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <Input type="select" name="select" id="exampleSelect" alue={this.state.value} onChange={this.handleChange}>
                            <option>Selecionar...</option>
                            <option value="0">Cliente</option>
                            <option value="1">Profissional</option>
                          </Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.passwordFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                           
                          </InputGroupAddon>
                              <Input type="textarea" placeholder="Bio..." name="text" id="exampleText" />
                        </InputGroup>
                      </FormGroup>
                      
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                        Cadastre-se
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
          </Col>
        </Row>



                {/* END */}
            
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
