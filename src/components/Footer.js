import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={()=>window.open("https://www.instagram.com/")} />
        <TwitterIcon onClick={()=>window.open("https://twitter.com/i/flow/login")} />
        <FacebookIcon onClick={()=>window.open("https://www.facebook.com/login/")}/>
        <LinkedInIcon onClick={()=>window.open("https://www.linkedin.com/in/sundara-krishna-penugonda-17712720b/")}/>
      </div>
      
    </div>
  );
}

export default Footer;