import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import smallLogo from "./../../../images/icon-1.svg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Cardiology",
    logo: "heart.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 2,
    title: "Neurology",
    logo: "brainstorm.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 3,
    title: "Urology",
    logo: "kidney.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 4,
    title: "Valve Diseases",
    logo: "microscope.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 5,
    title: "Body Surgery",
    logo: "operation.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 6,
    title: "Children’s",
    logo: "child.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
];

const Services = () => {
  return (
    <Container fluid className="services-container ">
      <div className="service-top">
        <h4>Services</h4>
        <h1>
          <img src={smallLogo} alt=""  width="40"/> Our Departments
        </h1>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic <br /> typesetting, remaining essentially unchanged.
        </p>
      </div>

      <Container className="service-cart-container">
        <Row>
          {data.map((ser) => {
            return (
              <Col xs={12} md={4} key={ser.id}>
                <div className="service-cart">
                  <img src={ser.logo} alt={ser.title} width="40" />
                  <h2>{ser.title}</h2>
                  <p>{ser.description.substring(0, 100)}</p>
                  <Link to={`/service/${ser.id}`} className="service-detail-btn">
                    Learn more  <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
