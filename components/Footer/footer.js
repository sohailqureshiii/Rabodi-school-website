import React from "react";
const myFont = localFont({ src: "../../fonts/Raleway-Medium.ttf" });
import localFont from "next/font/local";
import "../../app/globals.css";
import MainLogo from "../../public/CC30B003-B5CE-4D25-B856-6A0FCD174D53 (1).PNG";
import LinkedIn from "../../public/linkedin.svg";
import Youtube from "../../public/youtube (2).svg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram (1).svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bckrnd-fr-ffotr">
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div className="flx-in-ftr-section-cntr">
              <div className="ftr-logo-section-area-for-respo">
                <div className="bckrd-wht-fr-logods-ftr">
                  <Image src={MainLogo} className="footers-section-logo" />
                </div>
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Quick Links</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <Link href={"/"}>
                    <li className="links-at-ftr-st-sdjk">Home</li>
                  </Link>
                  <Link href={"/aboutus"}>
                    <li className="links-at-ftr-st-sdjk">About</li>
                  </Link>

                  <Link href={"/teacher"}>
                    <li className="links-at-ftr-st-sdjk">Teachers</li>
                  </Link>

                  <Link href={"/contactus"}>
                    <li className="links-at-ftr-st-sdjk">Contact</li>
                  </Link>
                </div>
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Useful Links</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <Link href={"/facilities"}>
                    <li className="links-at-ftr-st-sdjk">Facilities</li>
                  </Link>
                  <Link href={"/abouttrust"}>
                    <li className="links-at-ftr-st-sdjk">Committee</li>
                  </Link>
                  <Link href={"/contactus"}>
                    <li className="links-at-ftr-st-sdjk">Ask Question</li>
                  </Link>

                  <Link href={"/contactus"}>
                    <li className="links-at-ftr-st-sdjk">FAQ</li>
                  </Link>
                </div>
              </div>
              <div>
                <p className="hedr-ilsjnnd-links-sdc">Contact Us</p>
                <div className="btm-line-s-fhjjns-rjk"></div>
                <div className="cntr-for-link-section-dje">
                  <li className="links-at-ftr-st-sdjk">
                    Phone : +91 98928 14653
                  </li>
                  <li className="links-at-ftr-st-sdjk">
                    Email : Rfces.manage@gmail.com
                  </li>
                  <li className="links-at-ftr-st-sdjk">
                    Address : REHMAT ALI ROAD, 1st Rabodi ,THANE(W)
                  </li>
                  <li className="links-at-ftr-st-sdjk">
                    Working Hours : 07:00am to 05:30pm
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
                <a href="https://www.facebook.com/shafi.burondkar.school?mibextid=ZbWKwL">
                  <Image src={Facebook} className="scial-inks-siocdnd-dsc" />
                </a>
                <a href="https://www.linkedin.com/in/shafi-burondkar-school-b00a822b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <Image src={LinkedIn} className="scial-inks-siocdnd-dsc" />
                </a>
                <a href="https://www.instagram.com/shafi_burondkar_school?utm_source=qr&igsh=OHIxcTZjYTZ6c2sw">
                  <Image src={Instagram} className="scial-inks-siocdnd-dsc" />
                </a>
                <a href="https://youtube.com/@shafiburondkarprimaryurdus3205?si=gskM9HRvapwBvPFg">
                  <Image src={Youtube} className="scial-inks-siocdnd-dsc" />
                </a>
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
