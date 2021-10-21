import { Col, Container, Image, Row } from "react-bootstrap";
import SocialIcons from "../Icons/SocialIcons/SocialIcons";
import "./footer.css";
import footerLogo from "./../../images/viscareo-logo-white2.svg";
import footerLogoSmall from "./../../images/icon-white.svg";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="footer-item">
              <Image src={footerLogo} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p>
                <i className="fas fa-tty"></i> +1 202 555 0191
              </p>
              <p>
                <i className="fas fa-phone-square-alt"></i> +1 (201) 555-0123
              </p>
              <p>
                <i className="fas fa-envelope"></i> tareqhassan2014@gmail.com
              </p>
              <p>
                <i className="fas fa-map-marker"></i> Govt BL college,
                Daulotpour,Khulna
              </p>
              <SocialIcons />
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="footer-item">
              <Image src={footerLogoSmall} className="footer-small-icon" />{" "}
              <span className="footer-item-title">Departments</span>
              <div className="departments">
                <p>Blood Test Department</p>
                <p>Body Surgery Department</p>
                <p>Cardiology Department</p>
                <p>Corona Test Department</p>
                <p>Children’s Emergency</p>
                <p>Neurology Department</p>
                <p>Urology Department</p>
                <p>Valve Diseases Department</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="footer-item">
              <Image src={footerLogoSmall} className="footer-small-icon" />
              <span className="footer-item-title"> Opening Ours</span>
              <div className="opening-hours mt-md-5">
                <p>
                  <i className="fas fa-check"></i> Mon : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-check"></i> Tues : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-check"></i> Wed : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-check"></i> Thurs : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-check"></i> Fri : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-check"></i> Sat : 9:00 AM - 9:00 PM
                </p>
                <p>
                  <i className="fas fa-times"></i> Sunday : Closed
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
