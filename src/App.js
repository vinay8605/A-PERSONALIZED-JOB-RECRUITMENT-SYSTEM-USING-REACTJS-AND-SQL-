import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function App() {
  const carouselItemStyle = {
    maxHeight: "650px",
  };
  return (
    <div>
      <MDBCarousel showIndicators showControls fade interval={1300}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://c1.wallpaperflare.com/preview/294/960/948/university-student-graduation-photo-hats.jpg"
          style={carouselItemStyle}
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg"
          style={carouselItemStyle}
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://t4.ftcdn.net/jpg/02/44/36/33/360_F_244363374_iCFxb5DouCxRb2MNnQLBZXILMOTRLR3t.jpg"
          style={carouselItemStyle}
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src="https://images.moneycontrol.com/static-mcnews/2022/11/stock-market-1.jpg?impolicy=website&width=1600&height=900"
          style={carouselItemStyle}
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={5}
          src="https://api.time.com/wp-content/uploads/2023/05/WAI-opener.jpg"
          style={carouselItemStyle}
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>
      <div className="aboutcont">
        <div className="cont1">
          <h2>About Rise</h2>
          <p>
            RISE specializes in next-gen enterprise solutions based on immersive
            technologies with optimized integration capabilities to transform,
            scale and drive performance for an integrated enterprise, while
            keeping a laser-focus on "user experience!" Our Core values are
            crucial to motivate and energize our team members to operate
            globally and deliver consistently
          </p>
        </div>
        <div className="cont2">
          <h2>About GMRIT</h2>
          <p>
            Welcome to GMR Institute of Technology (GMRIT). Established in the
            year 1997 by GMR Varalakshmi Foundation – the corporate social
            responsibility arm of GMR Group – GMRIT offers aspiring engineers
            high quality technical education.Located in Rajam, Vizianagaram
            district of Andhra Pradesh, GMRIT provides its learning community
            state-of-the-art facilities, infrastructure and a competent faculty.{" "}
          </p>
        </div>
        <div className="cont3">
          <h2>Contact us</h2>

          <strong>Address :</strong>
          <p>
            2nd floor, IT Building Landmarks: Opposite Eenadu Office,
            Seethammadara, Visakhapatnam, Andhra Pradesh 530013
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/vinay_vk._/"
              rel="noopener noreferrer"
              className="social-icon"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/MudapakaVinay"
              rel="noopener noreferrer"
              className="social-icon"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-kumar-mudapaka-053977217/"
              rel="noopener noreferrer"
              className="social-icon"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="tel:+918497908605" className="social-icon">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="mailto:email@example.com" className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://wa.me/7989813162"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2nd+floor,+IT+Building+Landmarks:+Opposite+Eenadu+Office,+Seethammadara,+Visakhapatnam,+Andhra+Pradesh+530013"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
