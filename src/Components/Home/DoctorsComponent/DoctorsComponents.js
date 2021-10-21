import { Col, Container, Row } from "react-bootstrap";
import smallLogo from "./../../../images/icon-1.svg";
import "./DoctorsComponents.css";

const doctors = [
  {
    id: 1,
    department: "Cardiology",
    name: "Dr. Rony K",
    logo: "heart.png",
    image: "https://i.ibb.co/xFfD8mS/doctor-img-1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 2,
    department: "Neurology",
    logo: "brainstorm.png",
    name: "Dr. Eva A",
    image: "https://i.ibb.co/3YBMJQN/doctor-img-2.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 3,
    department: "Urology",
    logo: "kidney.png",
    name: "Dr. Sonia K",
    image: "https://i.ibb.co/8MS947k/doctor-img-3.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 4,
    department: "Valve Diseases",
    logo: "microscope.png",
    name: "Dr. Fillmore E",
    image: "https://i.ibb.co/YkbTYPv/doctor-img-5.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 5,
    department: "Body Surgery",
    logo: "operation.png",
    name: "Dr. Danielle L",
    image: "https://i.ibb.co/h1x5hH1/doctor-img-6.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 6,
    department: "Children’s",
    logo: "child.png",
    name: "Dr. David C",
    image: "https://i.ibb.co/wLvLFJ8/doctor-img-4.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
];

const DoctorsComponents = () => {
  return (
    <Container>
      <div className="doctor-top">
        <h4>Doctors</h4>
        <h1>
          <img src={smallLogo} alt="" width="40" /> Our Certified Doctors
        </h1>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic <br /> typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="doctor-card-container">
        <Row>
          {doctors.map((doctor) => {
            return (
              <Col xs={12} md={4} key={doctor.id}>
                <div className="doctor-card">
                  <img src={doctor.image} alt={doctor.name} className="image" />
                  <div className="doctor-info">
                    <h2>{doctor.name}</h2>
                    <p>{doctor.department}</p>
                    <p>{doctor.description.substring(0, 100)}</p>
                    <button className="doctor-detail-btn">
                      Learn more <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default DoctorsComponents;
