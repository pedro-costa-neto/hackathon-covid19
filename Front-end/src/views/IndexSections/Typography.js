
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import '../../assets/css/global.css'

class Typography extends React.Component {
  render() {
    const mystyle = {
      width:"330px",
      height:"380px",
      color: "white",
      backgroundColor: "#8898aa",
      borderRadius:"15px",
      textAlign: "center",
    };

    const style = {
      width: "150px" ,
      marginLeft:"40px",
      position: "relative",
      left: "-20px",
      marginTop:"10px"

    };

    return (
      <>
          
       
      <div className="profile-container">
      <h2 className="mt-lg mb-5">
          <span>Profissionais</span>
        </h2>
        
      <ul>
            <li style={mystyle}>
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
            </li>

            <li style={mystyle}>
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
            </li>

            <li style={mystyle}>
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
            </li>

           
        </ul>

        <Row className="align-items-center justify-content-center" id="box">
          <Col className="text-center" sm="9">
              <div>
                <h2 className="display-3">Sobre</h2>
                <p className="lead text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
        </Row>
      </div>
      </>
    );
  }
}

export default Typography;
