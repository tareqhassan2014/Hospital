import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import NavBar from "../Home/NaveBar/NavBar";
import "./ServiceDetail.css";

const data = [
  {
    id: 1,
    title: "Cardiology",
    logo: "heart.png",
    bannerImage: "https://i.ibb.co/HNCr7bd/department-img-1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 2,
    title: "Neurology",
    logo: "brainstorm.png",
    bannerImage: "https://i.ibb.co/RQcwyj4/department-img-3.jpg" ,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 3,
    title: "Urology",
    logo: "kidney.png",
    bannerImage: "https://i.ibb.co/GRxddJS/department-img-4.jpg" ,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 4,
    title: "Valve Diseases",
    logo: "microscope.png",
    bannerImage: "https://i.ibb.co/DM1kh8g/department-img-6.jpg" ,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 5,
    title: "Body Surgery",
    logo: "operation.png",
    bannerImage: "https://i.ibb.co/SNBHvK3/department-img-7.jpg" ,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    id: 6,
    title: "Children’s",
    logo: "child.png",
    bannerImage:"https://i.ibb.co/L6QM6pV/department-img-8.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const selected = data.find((item) => item.id == id);

  return (
    <>
      <NavBar />
      <div className="service-detail-container">
        <div className="service-detail-top">
          <div className="service-detail-top-data">
            <h2>{selected.title} Department</h2>
            <p>
              <i className="fas fa-home"></i> | Department | {selected.title}{" "}
              Department
            </p>
          </div>
        </div>

        <Container className="service-detail-data-container mt-5">
          <img src={selected.bannerImage} alt={selected.title} width="100%" height="100%"/>
          <p className="mt-5">{selected.description}</p>
          <p>{selected.description}</p>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
