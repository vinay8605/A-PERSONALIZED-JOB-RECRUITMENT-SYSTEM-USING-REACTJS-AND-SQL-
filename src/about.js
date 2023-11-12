import "./about.css";

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const About = () => {

  const carouselItemStyle = {
    maxHeight: "100px", 
    
  };
  
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

  return (
    <div>
      <div className="about-container">
        <div className="background-image"></div>
        <h1 className="about-title">ABOUT US</h1>
      </div>
      <div className="content-container">
        <div className="text-container">
          <h2>Welcome To Rise software recruiting</h2>
          <p>
          RISE is a recruiting company that specializes in search and headhunting. They have a proactive approach towards finding the best and most dynamic candidates to help transform businesses. They offer executive search, recruitment, and placement services to help companies find the best personnel available. Their focus is on supporting both people and companies in finding what they need by helping locate, interview, and hire the best personnel available.
          </p>
          <h2>What do we do</h2>
          <p>
          RISE Recruiting & Consulting has the knowledge, experience, and commitment to serve all their clientele. Whether you are looking for a job or recruiting new employees for your company, their expert team members will offer you their full attention and guidance so that you can make the most out of their services. They are dedicated to providing the best possible service to their clients and helping them achieve their goals.
          </p>
        </div>
        <div className="image-container">
          <img src="https://www.ismartrecruit.com/upload/blog/main_image/Recruitment_Management_System.webp" alt="About Us" />
        </div>
      </div>
      <div className="vision-mission-container">
        <div className="vision-container">
          <h2>Vision</h2>
          <p>Elevating Futures, Enriching Ventures: RISE Recruiting envisions a world where exceptional talents and forward-thinking companies converge, propelling collective growth and innovation.</p>
        </div>
        <div className="mission-container">
          <h2>Mission</h2>
          <p>Forging Connections, Fueling Success: Our mission is to seamlessly unite exceptional individuals with purpose-driven organizations, fostering mutual success through precise placement and impactful partnerships.</p>
        </div>
      </div>
      
      <div>
        <Slider {...settings}>
          <div>
            <img src="data:image/jpeg;base64,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" alt="..." style={{ width: "400px", height: "150px" }} />
          </div>
          <div>
            <img src="data:image/png;base64,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" alt="..." style={{ width: "400px", height: "150px" }}/>
          </div>
          <div>
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/gmr-sixteen_nine_0-sixteen_nine.jpeg?size=948:533" alt="..." style={{ width: "400px", height: "150px" }}/>
          </div>
          <div>
            <img src="https://www.wipro.com/content/dam/nexus/en/site/anz/wipro-logo-sustainability-1100x560.png" alt="..." style={{ width: "400px", height: "150px" }}/>
          </div>
          <div>
            <img src="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg" alt="..." style={{ width: "400px", height: "150px" }}/>
          </div>
          <div>
            <img src="https://www.nobroker.in/blog/wp-content/uploads/2021/04/IBM_Bangalore.jpg" alt="..." style={{ width: "400px", height: "150px" }}/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
