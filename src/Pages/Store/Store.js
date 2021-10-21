import "./Store.css";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Home/NaveBar/NavBar";

const drags = [
  {
    id: 1,
    title: "RX Pharmacy",
    img: "1.jpg",
    price: 34.99,
  },
  {
    id: 2,
    title: "Injection Vial",
    img: "2.jpg",
    price: 29.0,
  },
  {
    id: 3,
    title: "3M Stethoscope",
    img: "3.jpg",
    price: 24.99,
  },
  {
    id: 4,
    title: "Levemir Drug",
    img: "4.jpg",
    price: 44.99,
  },
  {
    id: 5,
    title: "4 Temp Checker",
    img: "5.jpg",
    price: 19.99,
  },
  {
    id: 6,
    title: "Dietary Supplement",
    img: "6.jpg",
    price: 29.99,
  },
  {
    id: 7,
    title: "Glossy Iron Tablet",
    img: "7.jpg",
    price: 24.59,
  },
  {
    id: 8,
    title: "Dietary Supplement",
    img: "8.jpg",
    price: 34.99,
  },
  {
    id: 9,
    title: "3M Stethoscope",
    img: "5.jpg",
    price: 34.99,
  },
];

const Store = () => {
  return (
    <>
      <NavBar />
      <div className="store-container">
        <div className="store-hadar">
          <h2>Shop</h2>
        </div>
        <Container className="shop-cart-container">
          <Row>
            {drags.map((itm) => {
              return (
                <Col xs={12} md={4} key={itm.id}>
                  <div className="shop-cart">
                    <img src={itm.img} alt={itm.title} />
                    <div style={{display: "flex", justifyContent: "space-between",padding: "0 20px"}}>
                      <span>{itm.title}</span>
                      <span style={{color:"#F3C539"}}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                    <p style={{textAlign: "start",marginLeft: '20px'}}>${itm.price}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Store;
