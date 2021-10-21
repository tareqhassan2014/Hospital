import React from "react";
import Footer from "../../Components/Footer/Footer";
import DoctorsComponents from "../../Components/Home/DoctorsComponent/DoctorsComponents";
import HadarCart from "../../Components/Home/HaderCart/HaderCart";
import Header from "../../Components/Home/Header/Header";
import NavBar from "../../Components/Home/NaveBar/NavBar";
import Services from "../../Components/Home/Services/Services";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <HadarCart />
      <DoctorsComponents />
      <Footer />
    </>
  );
};

export default Home;
