import React, { useState } from "react";
import "../css/footer.css";
import { data } from "../data";
import logo from "../images/logo_text.png";
const Footer = () => {
  const [socialHover, setSocialHover] = useState(false);
  //Social Media Component
  const SocialMediaIicon = (props) => {
    const { icon, iconHover, url } = props;
    const [socialIcon, setSocialIcon] = useState(icon);
    return (
      <img
        className="social-icon"
        src={socialIcon}
        alt=""
        onMouseEnter={() => setSocialIcon(iconHover)}
        onMouseLeave={() => setSocialIcon(icon)}
        onClick={() => window.open(url, "blank")}
      />
    );
  };
  //Social Media Component
  return (
    <footer>
      <img src={logo} alt="" />
      <div className="footer-text-container">
        <p>
          “If you know the enemy and know yourself, you need not fear the result
          of a hundred battles.” ― Sun Tzu, The Art of War
        </p>
        <hr />
      </div>
      <div className="footer-info">
        {data.footer.info.map((item) => {
          return (
            <div className="info-container">
              <img src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="social-media">
        {data.footer.social_media.map((item, index) => {
          return (
            <SocialMediaIicon
              icon={item.icon}
              iconHover={item.icon_hover}
              url={item.url}
            />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
