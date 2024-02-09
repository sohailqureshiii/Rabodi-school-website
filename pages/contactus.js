import Navbar from "@/components/Navbar/navbar";
import React, { useState } from "react";
import "../app/globals.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import CallSvg from "../public/phone-call.svg";
import LinkedIn from "../public/linkedin.svg";
import Twitter from "../public/social.svg";
import Facebook from "../public/facebook.svg";
import Address from "../public/adress.svg";
import Email from "../public/mail.svg";
import Opening from "../public/time.svg";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
const Contactus = () => {
  const [show, setShow] = useState(false);

  // FAQ----
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  return (
    <>
      <>
        <Navbar />
      </>
      <div className="bckrnd-clrssdf" style={myFont.style}>
        <div className="bkrnd-img-at-cnt-section"></div>
      </div>
      <div className="dfgtgdf-bsdiuk-esdj" style={myFont.style}>
        <div className="displayflexat-ns">
          <div className="header-layout-at-main-section">
            <div className="flx-in-centr-hdr-at-ssdjk">
              <h3 className="fnt-hdr-snr-xjdk">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns mrgin-top-sijefj" style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="flx-in-for-frm-and-othr-left-details-section">
            <div>
              <div>
                <Image
                  src={CallSvg}
                  className="svg-at-sd-cntct-sectoi-dsjnmc"
                />
                <p className="secnd-aline-para-dkjsk">+91 98928 14653</p>
                <p className="asdf-cald-irjnascjnkwe-df">
                  Call us: Mon - Fri 9:00 - 19:00
                </p>
              </div>
              <div className="tp-mrgin-sectiom-sjfk">
                <Image
                  src={Address}
                  className="svg-at-sd-cntct-sectoi-dsjnmc"
                />
                <p className="secnd-aline-para-dkjsk">Thane</p>
                <p className="asdf-cald-irjnascjnkwe-df">
                  REHMAT ALI ROAD, 1st RABODI ,
                  <br />
                  THANE(W)
                </p>
              </div>
              <div className="tp-mrgin-sectiom-sjfk">
                <Image src={Email} className="svg-at-sd-cntct-sectoi-dsjnmc" />
                <p className="secnd-aline-para-dkjsk">rfces@gmail.com</p>
                <p className="asdf-cald-irjnascjnkwe-df">
                  Drop us a line anytime!
                </p>
              </div>
              <div className="tp-mrgin-sectiom-sjfk">
                <Image
                  src={Opening}
                  className="svg-at-sd-cntct-sectoi-dsjnmc"
                />
                <p className="secnd-aline-para-dkjsk">Working Hours</p>
                <p className="asdf-cald-irjnascjnkwe-df">07:00am to 05:30pm</p>
              </div>
              <div>
                <div className="flx-in-setiojxkc-sejdka">
                  <Image
                    src={LinkedIn}
                    className="scial-inks-siocdnd-dsc sdrtfd"
                  />
                  <Image src={Twitter} className="scial-inks-siocdnd-dsc" />
                  <Image src={Facebook} className="scial-inks-siocdnd-dsc" />
                </div>
              </div>
            </div>
            <div
              className="backfnd-andshadow-section-sfros-js"
              style={myFont.style}
            >
              <div>
                <h3 className="hedr-fr-lets-cnnect-section-sform-area">
                  Lets Connect
                </h3>
                <p className="para-at-form-section-inlur">
                  Don't let questions linger we're just a click or call away.
                </p>
                <div className="flx-in-frm-input-sectionsdo etra-tp-mrginsdf-df">
                  <div>
                    <label className="label-at-fom-rcntr-section-only">
                      First Name *
                    </label>
                    <input className="input-dsjkjn-form-only" />
                  </div>
                  <div>
                    <label className="label-at-fom-rcntr-section-only">
                      Last Name *
                    </label>
                    <input className="input-dsjkjn-form-only" />
                  </div>
                </div>
                <div className="flx-in-frm-input-sectionsdo ">
                  <div>
                    <label className="label-at-fom-rcntr-section-only">
                      Email
                    </label>
                    <input className="input-dsjkjn-form-only" />{" "}
                  </div>
                  <div>
                    <label className="label-at-fom-rcntr-section-only">
                      Phone Number *
                    </label>
                    <input className="input-dsjkjn-form-only" type={"number"} />{" "}
                  </div>
                </div>
                <div>
                  <label className="label-at-fom-rcntr-section-only">
                    Message
                  </label>
                  <textarea className="massage-teaxt-area-input-at-djkm" />
                </div>
                <button className="sned-mssge-btn-at-from-section">
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section pad-for-respo-area-onlydsj">
            <div className="section-center-at-faq-secjks-a">
              <h2 className="font-for-hedr-faq">FAQ</h2>
            </div>
            <div className="cntr-btwn-lines-at-faq-sec"></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq1(!faq1)}
            >
              <p className="white-txt-at-faq-sect">
                What Are The Admission Requirements For Rabodi Friends' Circle
                School?
              </p>
              {faq1 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq1 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Admission requirements vary depending on the grade level. Please
                visit the Admission section on our website for more information.
              </p>
            ) : null}
            <div className="cntr-btwn-lines-at-faq-sec"></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq2(!faq2)}
            >
              <p className="white-txt-at-faq-sect">
                What Extracurricular Activities Do You Offer?
              </p>
              {faq2 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq2 ? (
              <p className="faq-answer-at-faq-sectionsk">
                We offer a wide range of extracurricular activities including
                sports, drama, and more. Visit our Extracurricular section for
                more information.
              </p>
            ) : null}
            <div className="cntr-btwn-lines-at-faq-sec"></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq3(!faq3)}
            >
              <p className="white-txt-at-faq-sect">
                What Are The School Hours?
              </p>
              {faq3 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq3 ? (
              <p className="faq-answer-at-faq-sectionsk">
                School hours vary depending on the grade level. Please visit the
                Schedule section on our website for more information.
              </p>
            ) : null}
            <div className="cntr-btwn-lines-at-faq-sec"></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq4(!faq4)}
            >
              <p className="white-txt-at-faq-sect">
                What Is Your Teaching Approach?
              </p>
              {faq4 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq4 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Our teaching approach is student-centered, meaning we focus on
                the individual needs and learning styles of each student. We use
                a variety of teaching methods to engage students and foster a
                love for learning.
              </p>
            ) : null}
            <div className="cntr-btwn-lines-at-faq-sec"></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq5(!faq5)}
            >
              <p className="white-txt-at-faq-sect">
                How Do I Contact The School If I Have A Question Or Concern?
              </p>
              {faq5 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq5 ? (
              <p className="faq-answer-at-faq-sectionsk">
                You can contact us by phone or email. Visit our Contact section
                on our website for more information.
              </p>
            ) : null}
            <div className="cntr-btwn-lines-at-faq-sec"></div>
          </div>{" "}
        </div>
      </>
      <Footer />
    </>
  );
};

export default Contactus;
