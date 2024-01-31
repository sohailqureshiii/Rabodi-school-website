import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";
import styles from "./page.module.css";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import BackGorundImage from "../public/red-buildings-households.jpg";
import FacultyBack from "../public/IMG_2566.JPG";
import LeftSchoolAdd from "../public/IMG_2577.jpg";
import CallSvg from "../public/phone-call.svg";
import Math from "../public/square-root-of-x-mathematical-signs.svg";
import Microscope from "../public/microscope.svg";
import Teaching from "../public/teach.svg";
import Language from "../public/language.svg";
import Computer from "../public/computer.svg";
import Personality from "../public/man.svg";
import localFont from "next/font/local";
import "../app/globals.css";
import Footer from "@/components/Footer/footer";
import ReactPlayer from "react-player";
import BackgroundImage from "../public/WhatsApp Image 2024-01-31 at 4.01.53 PM.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="navbr-backdjs-ehbckas">
        <Navbar />
      </div>
      <div>
        <Image src={BackgroundImage} className="hjdfeokfl-sdfded" />
        <div className="overlay-section-br-blackishinsh" style={myFont.style}>
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section">
              <div className="top-fr-bckrnd-sections-jkdf">
                <h3 className="whte-first-hdr-welcome-secjkm">
                  Hello! Welcome to
                </h3>
                <h1 className="hdr-section-one-areas-top-schl-name">
                  Rabodi Friends' Circle Urdu High School
                </h1>
                <p className="para-at-section-ablout-us-riekljm">
                  Our educational era started with Pre-Primary school named
                  Rabodi Friends’ Circle Primary School in the year 1999 and the
                  Primary School got operational from June 7, 2001. Our primary
                  section was named Shafi Burondkar Primary School, with just 30
                  headcounts back then, which has experienced a tremendous
                  growth over the ages.
                </p>
                <Link href={"/contactus"}>
                  <button className="cntc-us-btn-at-abt-sct-pge">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <>
        <div>
          <div className="bur-colr-section-at-ssecound-sct">
            <div className="displayflexat-ns " style={myFont.style}>
              <div className="header-layout-at-main-section">
                <p className="section-main-hdr-fr-wht-sec">Who We Are</p>
                <h1 className="hone-section-at-rodn-skk">
                  Rabodi Friends' Circle
                  <br /> Education Society
                </h1>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div className="flx-nin-two-compo-at-sbic">
              <div className="widht-for-para-section-at-secound-sect">
                <p className="first-para-at-schl-sectio-sjkdjs">
                  Rabodi Friends' Circle is a dedicated educational organization
                  that has been serving the community for decades. Founded in
                  1974 by a group of like-minded individuals with a common goal
                  of benefiting humanity, the organization has evolved into a
                  leading educational institution known as Rabodi Friends'
                  Circle education Society. With a strong commitment to the
                  overall development of the youth in Rabodi, Thane, the
                  organization has gradually and effectively implemented its
                  aims and objectives. Through its unwavering dedication and
                  tireless efforts, Rabodi Friends' Circle has become a
                  respected and reputable institution that is admired by many
                  for its outstanding services and contributions to society.
                </p>
              </div>
              <div className="third-left-top-minus-sect" style={myFont.style}>
                <div className="back-rnd-white-at-left-section">
                  <p className="fc-facts-for-ajdksn">Achievements So Far</p>
                  <div className="diply-cemntr-at-sction-for-whitelisb">
                    <div className="color-line-at-center-of-left-section"></div>
                  </div>
                  <div>
                    <p className="number-achienved-by-shools-sdjk">1997</p>
                    <p className="secound-line-of-sleft-sdide">
                      Year of Foundation
                    </p>
                    <p className="para-at-side-ltions">
                      Year of our
                      <br />
                      School Foundation
                    </p>
                  </div>
                  <div>
                    <p className="number-achienved-by-shools-sdjk">06</p>
                    <p className="secound-line-of-sleft-sdide">
                      PRIMARY AWARDS
                    </p>
                    <p className="para-at-side-ltions">
                      primary school
                      <br />
                      awards
                    </p>
                  </div>
                  <div>
                    <p className="number-achienved-by-shools-sdjk">04</p>
                    <p className="secound-line-of-sleft-sdide">HIGH AWARDS</p>
                    <p className="para-at-side-ltions">
                      high school
                      <br />
                      awards
                    </p>
                  </div>
                  <div>
                    <p className="number-achienved-by-shools-sdjk">750+</p>
                    <p className="secound-line-of-sleft-sdide">STUDENTS</p>
                    <p className="para-at-side-ltions">
                      studenst currentlly
                      <br />
                      studing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="scrolling_text" style={myFont.style}>
          <div className="text">
            <span>Opening Hours : 07:00am to 05:30pm</span>
            <span> Phone : 022-2542-9174</span>
            <span> Email : rfces@gmail.com</span>
            <span> Address : Rehmat Ali Road, 1 Rabodi ,Thane(W)</span>
          </div>
          <div className="text">
            <span>Opening Hours : 07:00am to 05:30pm</span>
            <span> Phone : 022-2542-9174</span>
            <span> Email : rfces@gmail.com</span>
            <span> Address : REHMAT ALI ROAD, 1 RABODI ,THANE(W)</span>
          </div>
        </div>
      </>
      <>
        <div className="backrnd-dff-wih-ot-ht-sd">
          <div className="displayflexat-ns" style={myFont.style}>
            <div className="header-layout-at-main-section">
              <p className="section-main-hdr-fr-wht-sec">Our Expertise</p>
              <div className="flx-ns-for-hdr-and-para-sect-skj">
                <h2 className="clr-wht-in-exper-t-sect-arns-asd">
                  We Have Excellent
                  <br /> Expertise In
                </h2>
                <p className="para-t-ns-left-frth-sect-ksdsn">
                  At Rabodi Friends' Circle Education Society, we boast
                  excellent expertise in a range of subjects, including
                  Mathematics, Teaching, Science, and more. Our dedicated team
                  of educators brings passion and proficiency to each
                  discipline, ensuring a comprehensive and enriching learning
                  experience for our students.
                </p>
              </div>
              <div className="dis-flx-six-cntr-area">
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Math} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Mathemetics</h3>
                  <p className="para-sectios-jkdms">
                    Precision in numbers, mastering the language of logic and
                    patterns.
                  </p>
                </div>
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Teaching} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Teaching</h3>
                  <p className="para-sectios-jkdms">
                    Inspiring minds, fostering growth, one lesson at a time.
                  </p>
                </div>
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Microscope} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Science</h3>
                  <p className="para-sectios-jkdms">
                    Exploring the wonders of the world through curiosity and
                    discovery.
                  </p>
                </div>
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Language} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Language</h3>
                  <p className="para-sectios-jkdms">
                    Words connect cultures, weaving stories in linguistic
                    artistry.
                  </p>
                </div>
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Computer} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Computers</h3>
                  <p className="para-sectios-jkdms">
                    Code breathes life, shaping digital realms in binary
                    whispers.
                  </p>
                </div>
                <div className="cntrnr-fr-sub-sectios">
                  <div className="t-cntr-img-sct-sdhj">
                    <Image src={Personality} />
                  </div>
                  <h3 className="cntr-of-hdr-scoisd">Personality</h3>
                  <p className="para-sectios-jkdms">
                    Confidence blooms, nurturing growth in the journey of
                    self-discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="back-toop-section-onlysjd">
          <Image
            src={FacultyBack}
            className="background-image-at-section-part-skj"
          />
          <div className="back-rnd-at-image-section-asosij">
            <div
              className="displayflexat-ns cntr-fc-xkjsjdn"
              style={myFont.style}
            >
              <div className="header-layout-at-main-section">
                <h3 className="headr-in-front-of-image-section-inly">
                  We Have <br /> Experienced Faculty
                  <br />
                  {/* investing in yourself */}
                </h3>
                <div className="srdf-efno-wonvsd-vjs">
                  <p className="parar-in-fnrt-of-img-section">
                    Our teachers are highly qualified and experienced, providing
                    students with quality instruction and guidance.
                  </p>
                </div>
                <div>
                  <Link href={"/teacher"}>
                    <button
                      className="btn-at-mange-secionsdk"
                      style={myFont.style}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </>
      <>
        <div
          className="section-fourth-backgrnd-blckush-tyoe-sjnd"
          style={myFont.style}
        >
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section">
              <p className="section-main-hdr-fr-wht-sec">Our Deparments</p>
              <div className="flx-ns-for-hdr-and-para-sect-skj">
                <h2 className="clr-wht-in-exper-t-sect-arns-asd">
                  We Have Excellent
                  <br /> Deparments In
                </h2>
                <p className="para-t-ns-left-frth-sect-ksdsn">
                  At Rabodi Friends' Circle Education Society, our commitment to
                  education is reflected in our excellent departments. We take
                  pride in fostering a strong foundation for learning with our
                  Primary Urdu School. As students progress, our High Urdu
                  School equips them with the skills and knowledge needed for
                  success.
                  {/* These departments are a testament to our dedication
                  to providing quality education at every stage of a student's
                  journey, ensuring a comprehensive and enriching academic
                  experience. */}
                </p>
              </div>
              <div className="flx-and-mrgin-tp-sfoir-sd">
                <div className="wdht-fr-clr-back-sectkls">
                  <div className="white-backgrnd-atflx-er-sdhb">
                    <h3 className="hdr-at-box-section-in-lin-boxss-skj">
                      Shafi Burondkar Pre- Primary Urdu School
                    </h3>
                    <p className="parase-at-ds-loew-dsect-s">
                      Providing a nurturing and playful environment for young
                      learners to develop their cognitive and social skills.
                    </p>
                  </div>
                </div>
                <div className="wdht-fr-clr-back-sectkls clr-red">
                  <div className="white-backgrnd-atflx-er-sdhb">
                    <h3 className="hdr-at-box-section-in-lin-boxss-skj">
                      Rabodi Friends Circle Urdu High School
                    </h3>
                    <p className="parase-at-ds-loew-dsect-s">
                      long established fact that a reader will be distracted by
                      the readable content
                    </p>
                  </div>
                </div>
                <div className="wdht-fr-clr-back-sectkls clr-blue">
                  <div className="white-backgrnd-atflx-er-sdhb">
                    <h3 className="hdr-at-box-section-in-lin-boxss-skj">
                      Shafi Burondkar Primary Urdu School
                    </h3>
                    <p className="parase-at-ds-loew-dsect-s">
                      Offering a strong foundation in core subjects to prepare
                      students for academic success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-for-bottom-tooasm">
            <p className="testinmoai-sibcjse">TESTIMONIALS</p>
            <h3 className="secound-hdr-at-ieronlsdh">
              Explore the students experience
            </h3>
            <div className="flx-in-fr-testimonial-parts-at-sectio">
              <div className="container-at-testimon-white-badck">
                <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                  Rabodi Friends' Circle Education Society has been a
                  game-changer for my child. The school's commitment to
                  excellence and nurturing environment have significantly
                  impacted my child's growth. Dedicated educators and
                  comprehensive programs make Rabodi Friends' Circle a great
                  choice for any parent.
                </p>
                {/* <div className="flxin-scntr-img-of-studnet">
                  <Image src={StudentsOne} className="sdfghjdsrtgfdsdfghb" />
                </div> */}
                <p className="student-name-in-testimonial">Zainab Ahmed</p>
                <p className="nsajke-oieh-ascmkl">Parent</p>
              </div>
              <div className="container-at-testimon-white-badck">
                <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                  Rabodi Friends' Circle Education Society is more than a
                  school; it's a second home. Engaging lessons, supportive
                  teachers, and diverse opportunities have enriched my academic
                  journey. The emphasis on holistic development equips students
                  with skills and confidence for the future.
                </p>
                {/* <div className="flxin-scntr-img-of-studnet">
                  <Image src={Studenttwo} className="sdfghjdsrtgfdsdfghb" />
                </div> */}
                <p className="student-name-in-testimonial">Ahmed Khan</p>
                <p className="nsajke-oieh-ascmkl">Student</p>
              </div>
              <div className="container-at-testimon-white-badck">
                <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                  Rabodi Friends' Circle Education Society played a pivotal role
                  in my academic and professional journey. The solid foundation,
                  dynamic learning environment, and values-driven education
                  shaped my character. Proud to be an alum of a school that
                  genuinely cares about its students' success and well-being.
                </p>
                {/* <div className="flxin-scntr-img-of-studnet">
                  <Image src={Studentsthree} className="sdfghjdsrtgfdsdfghb" />
                </div> */}
                <p className="student-name-in-testimonial">Fatima Ali</p>
                <p className="nsajke-oieh-ascmkl">Student</p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="mrgin-tp-fixd-pt-o">
          {/* <Image src={BackGrndimage} className="fix-aoblsute-image-at-secoit" /> */}
          <div className="displayflexat-ns" style={myFont.style}>
            <div className="header-layout-at-main-section">
              <div className="flx-fr-addmision-area-section-sond">
                <div className="mrgin-tp-sections-dier">
                  <h3 className="hdr-with-back-imhg-saection">
                    Rolling admissions
                    <br />
                    now open
                  </h3>
                  <p className="parra-for-smdf-oejS">
                    Get in touch with us to discuss it:
                  </p>
                  <div className="button-at-sjkbnsd">
                    <Image src={CallSvg} className="sertre-oriklf-aznsm" />
                    <p className="number-phn-nmbr-sect-ssdjk">022-2542-9174</p>
                  </div>
                </div>
                <div>
                  <Image
                    src={LeftSchoolAdd}
                    className="roling-admisoon-schol-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <Footer />
      </>
    </>
  );
}
