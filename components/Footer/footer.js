import React from "react";
const myFont = localFont({ src: "../../Fonts/Raleway-Medium.ttf" });
import localFont from "next/font/local";
import "../../app/globals.css";
import MainLogo from "../../public/rfces logo.png";
import LinkedIn from "../../public/linkedin.svg";
import Twitter from "../../public/social.svg";
import Facebook from "../../public/facebook.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="bckrnd-fr-ffotr">
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div className="flx-in-ftr-section-cntr">
              <div className="ftr-logo-section-area-for-respo">
                <Image src={MainLogo} className="footers-section-logo" />
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Quick Links</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <li className="links-at-ftr-st-sdjk">Home</li>
                  <li className="links-at-ftr-st-sdjk">About</li>
                  <li className="links-at-ftr-st-sdjk">Teachers</li>
                  <li className="links-at-ftr-st-sdjk">Contact</li>
                </div>
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Useful Links</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <li className="links-at-ftr-st-sdjk">Ask Question</li>
                  <li className="links-at-ftr-st-sdjk">Send Feedback</li>
                  <li className="links-at-ftr-st-sdjk">Privacy Policy</li>
                  <li className="links-at-ftr-st-sdjk">Terms and Condition</li>
                </div>
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Contact Us</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <li className="links-at-ftr-st-sdjk">Phone : 022-25429174</li>
                  <li className="links-at-ftr-st-sdjk">
                    Email : rfces@gmail.com
                  </li>
                  <li className="links-at-ftr-st-sdjk">
                    Address : REHMAT ALI ROAD, 1 RABODI ,THANE(W)
                  </li>
                  <li className="links-at-ftr-st-sdjk">
                    Opening Hours : 07:00am to 05:30pm
                  </li>
                </div>
              </div>
            </div>
            <div className="whit-line-at-kjsdklsd-jfvms"></div>
            <div className="flx-idsi-ioe">
              <h2 className="jek-eiwjksd-mustermedia">
                © Muster Media - 2024. All rights reserved.
              </h2>
              <div className="flx-in-setiojxkc-sejdka">
                <Image src={LinkedIn} className="scial-inks-siocdnd-dsc" />
                <Image src={Twitter} className="scial-inks-siocdnd-dsc" />
                <Image src={Facebook} className="scial-inks-siocdnd-dsc" />
              </div>
            </div>
            <div className="whit-line-at-kjsdklsd-jfvms"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
