import "./Doctors.css";
import Footer from "./../../Components/Footer/Footer";
import NavBar from "../../Components/Home/NaveBar/NavBar";
import DoctorsComponents from "../../Components/Home/DoctorsComponent/DoctorsComponents";

const Doctors = () => {
  return (
    <>
      <NavBar />
      <div className="doctors-header">
        <div className="doctors-header-data">
          <h2>Doctors</h2>
          <p>
            <i className="fas fa-home"></i> | Doctors
          </p>
        </div>
      </div>
      <DoctorsComponents />
      <Footer />
    </>
  );
};

export default Doctors;
