import "./HadarCart.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import ambulance from "./../../../images/ambulance.png";
import doctor from "./../../../images/doctor.png";
import injection from "./../../../images/injection.png";

const HadarCart = () => {
  return (
    <Container style={{ marginTop: "40px" }}>
      <Row>
        <Col xs={12} md={4}>
          <div className="hadar-cart">
            <Image width="50" src={ambulance} />
            <h3>100+ Ambulance</h3>
            <p>Super Fast Driving</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="hadar-cart">
            <Image width="50" src={doctor} />
            <h3>Qualified Doctors</h3>
            <p>Care and Best Treatment</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="hadar-cart">
            <Image width="50" src={injection} />
            <h3>Certified Tablets</h3>
            <p>Best and Healthy</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HadarCart;
