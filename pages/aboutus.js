"use client";
import Image from "next/image";
import React from "react";
import "../app/globals.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import LeftImage from "../public/WhatsApp Image 2024-01-31 at 4.01.53 PM.jpeg";
import Calender from "../public/calendar.svg";
import Trophy from "../public/trophy.svg";
import Medal from "../public/medal.svg";
import Students from "../public/reading-book.svg";
import RightImage from "../public/380432a2-09af-4513-8403-7b4e29c62624.JPG";
import FourthImage from "../public/hisrtoryofschool.png";
import BackGrndimage from "../public/bg-kids2.jpg";
import CallSvg from "../public/phone-call.svg";
import WhiteNavbar from "@/components/Navbar/Whitelinks";
import Footer from "@/components/Footer/footer";
import LeftSchoolAdd from "../public/IMG_2577.jpg";
import BackGrndimagethree from "../public/IMG_2458 (1).jpg";
import BackGrndimagefour from "../public/IMG_2460 (2).jpg";
import BackGrndimagefive from "../public/IMG_2461 (1).jpg";
import BackGrndimagesix from "../public/IMG_2462 (1).jpg";
import BackGrndimageseven from "../public/IMG_2463 (1).jpg";
import BackGrndimageeight from "../public/IMG_2464 (1).jpg";

const aboutus = () => {
  return (
    <>
      <WhiteNavbar />

      <>
        <div className="video-section-at-top-down-navber-Ads">
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section" style={myFont.style}>
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/nqv3kHwDp2w?si=sKL3Q5y3b-XYpCwK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="esrthgrefsdv-ejhwk"
              ></iframe>
            </div>{" "}
          </div>{" "}
        </div>
      </>
      <div className="mrg-tp-from-nvbr-end-sfiej">
        <div className="displayflexat-ns">
          <div className="header-layout-at-main-section" style={myFont.style}>
            <div className="flx-in-for-ht-lne-area-djks">
              <div className="ht-lne-insd-abt-sjhs"></div>
            </div>
            <h2 className="abt-sch-sect-hdr-at-dskj">About School</h2>
            <p className="sendcd-para-at-abt-secnd-stiondlf">
              Journey So Far…….
            </p>
            <div className="dply-flx-in-at-lsrft-tifgt-sctiojn">
              <Image src={LeftImage} className="left-img-fr-abt-us-image" />
              <p className="para-at-left-ridgt-section-sinkj">
                Established in the year 1974 and duly registered in the year
                1976, under the Trust Board Act, was a small body which took
                face of an organization named Rabodi Friends’ Circle. The birth
                of this then small entity took place with a goal to serve the
                young minds of the under-developed locality named Rabodi, in
                Thane. Initiation was with a rough sketch of our thoughts of
                implementation which took a considerable shape and form with
                multiple structured campaigns and activities with the help of
                pioneers of this educational institution resulting in the
                appreciation from the multiple learned and intellects of the
                society. Thus, the journey had started, never to slow down or
                stop ever. Today, we are pleased to mention that we have tried
                our best to cover different areas of social, welfare and
                cultural education through our high-grade academic curriculum,
                in order to nurture the minds of the youths. We have tried to
                arrange volunteering camps and courses such as Blood Donation,
                Civil Defense, First Aid, Tailoring, Coaching Classes and
                General Welfare Programmes, in order to uplift the deserving
                members of the society. These efforts have helped us to promote
                a sense of unity and spirit of integrity at a National Level for
                our Beloved Country, India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns">
        <div className="header-layout-at-main-section" style={myFont.style}>
          <div className="jfkesiodf-reoijas-fgdflsa">
            <div className="flx-in-for-ht-lne-area-djks">
              <div className="ht-lne-insd-abt-sjhs"></div>
            </div>
            <h2 className="abt-sch-sect-hdr-at-dskj">Achievements</h2>
            <p className="sendcd-para-at-abt-secnd-stiondlf">
              Achievements So Far…….
            </p>
          </div>
          <div className="flx-fr-right-img-and-achibvments-sections-fj">
            <div>
              <h3 className="our-achient-ms-sefjkdnm">Our Achievements</h3>
              <p className="para-at-jksdd-esknma">
                The ones who are crazy enough to think they can change the
                world, are the ones that do.
              </p>
              <div className="flx-for-svgandimgdise">
                <div className="fx-ia-sdfhas-dfka">
                  <Image src={Calender} className="achivments-ssvg-slldj" />
                  <div>
                    <p className="hdr-nuber-of-acjievments-section">1974</p>
                    <p className="par-nuber-sof-azx-sa">Year of Foundation</p>
                  </div>
                </div>
                <div className="fx-ia-sdfhas-dfka">
                  <Image src={Trophy} className="achivments-ssvg-slldj" />
                  <div>
                    <p className="hdr-nuber-of-acjievments-section">06</p>
                    <p className="par-nuber-sof-azx-sa">
                      Primary School Awards
                    </p>
                  </div>
                </div>
              </div>
              <div className="flx-for-svgandimgdise marokdvc-sjkdm">
                <div className="fx-ia-sdfhas-dfka">
                  <Image src={Medal} className="achivments-ssvg-slldj" />
                  <div>
                    <p className="hdr-nuber-of-acjievments-section">04</p>
                    <p className="par-nuber-sof-azx-sa">High School Awards</p>
                  </div>
                </div>
                <div className="fx-ia-sdfhas-dfka">
                  <Image src={Students} className="achivments-ssvg-slldj" />
                  <div>
                    <p className="hdr-nuber-of-acjievments-section">750+</p>
                    <p className="par-nuber-sof-azx-sa">Students</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src={RightImage} className="flx-img-left-at-sbnt-sntom" />
            </div>
          </div>
          <div className="top-sect-dix-dhjblollloguyftuu">
            <h3 className="our-achient-ms-sefjkdnm">Top Rankers</h3>
            <div className="flx-of-number-oerp-high-sndvm">
              <div>
                <p className="flx-percentge-of-studnts-at-scjh">
                  {" "}
                  Ansari Haseena Bano Nazakat 93.64% (2011)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Afreen Khatoon Mohd Hadis 89.09 (2012)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Ansari Kehkashan Afroz Naseer Alalm 86.60 (2013)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Shaikh Arbaaz Malik 88.20 (2014)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Khan Aayesha Khatun Nabi Sarvar 88.60 (2015)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Ansari Kulsum Jahan Rizwan 91.20 (2016)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Shaikh Mohammed Kalimullah 92.60 (2017)
                </p>
              </div>
              <div>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Shaikh Mehmood Raza Islam Ali 94.60 (2018)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  {" "}
                  Shah aasiya chaand 78.20% (2019)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Yasmeen mujeeburrehman - 92.20% (2020)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Shaikh mushira masiulhaq - 89.40% (2021)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Shaikh aaliya altaf - 89.40% (2022)
                </p>
                <p className="flx-percentge-of-studnts-at-scjh">
                  Khan Zaid Arif - 90.20% (2023)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgrnd-nsdjk-aoieds-ask">
        <div className="displayflexat-ns">
          <div className="header-layout-at-main-section" style={myFont.style}>
            <div className="flx-in-ffr-tw-ier-sdjnm">
              <div className="clr-scetion-for-jdkvn clr-ornsjhdo">
                <div className="white-bckrnd-aect-abt-abt-sect">
                  <h3 className="hdr-for-box-at-bt-abt-sect">Overview</h3>
                  <p className="para-dfr-fore-sect-a-abt-sd">
                    Our educational era started with Pre-Primary school named
                    Rabodi Friends’ Circle Primary School in the year 1999 and
                    the Primary School got operational from June 7, 2001. Our
                    primary section was named Shafi Burondkar Primary School,
                    with just 30 headcounts back then, which has experienced a
                    tremendous growth over the ages. In 2018-19, the pupils in
                    the Primary section rose to 357, RFC Urdu High School too
                    witnessed a growth to 149 students in the year, 2017-18.
                    This was only achievable due to the sheer commitment and
                    dedication of the committee members of the organization. It
                    doesn’t matter how small we start, with perseverance and
                    courage, MILES can be covered…
                  </p>
                </div>
              </div>
              <div className="clr-scetion-for-jdkvn clr-bltius">
                <div className="white-bckrnd-aect-abt-abt-sect">
                  <h3 className="hdr-for-box-at-bt-abt-sect">
                    Vision & Mission
                  </h3>
                  <p className="para-dfr-fore-sect-a-abt-sd">
                    ➽ To provide students with superior quality education.
                    <br /> ➽ To promote self-discipline, motivation and
                    creativit. <br />➽ To assist students become independent
                    learners.
                    <br />➽ To forge the students with a strong character
                    comprised of integrity and leadership. The very vision has
                    been translated in to mission in term of disseminate
                    knowledge impart skills, provide information and create a
                    conducive environment for growth of a child in body, mind
                    and spirit. The task has been very well implemented by the
                    committed staff. Special thanks to our committed staff who
                    worked tirelessly for the betterment of the students through
                    the process of dissemination and by providing an environment
                    compatible and comfortable for the growth of the body, mind
                    and spirit of the students. Finally, it is the parents whose
                    trust in us has helped us cover such a long journey full of
                    countless obstacles and not give up on any roadblocks
                  </p>
                </div>
              </div>
            </div>
            <div className="flx-in-ffr-tw-ier-sdjnm top-maron-stduj">
              <div className="clr-scetion-for-jdkvn clr-drtfds">
                <div className="white-bckrnd-aect-abt-abt-sect">
                  <h3 className="hdr-for-box-at-bt-abt-sect">History</h3>
                  <p className="para-dfr-fore-sect-a-abt-sd">
                    The Rabodi Friends' Circle Education Society Commenced by
                    the name as Rabodi Friends’ Circle with a small gymnasium at
                    1 rabodi , thane. Formed by small group of youths in the
                    year 1974 and duly got registered by Government Charity Act
                    in the year 1976. Our educational era was started with
                    Pre-Primary school viz Rabodi Friends Circle Pre-Primary
                    school in the year 1999 and the primary school which was
                    started on 7th June 2001 which was named Shafi Burondkar
                    Primary School with just 31 students now which has
                    experienced tremendous growth over the years. It is like the
                    mustard seed, which is smallest of all seeds but when it
                    grows, to its full extent that the birds can make nest. At
                    present we are conducting from Nursery to std. X classes in
                    our school by employing qualified teaching staff and other
                    non-teaching support staff.
                  </p>
                </div>
              </div>
              <div className="clr-scetion-for-jdkvn clr-green">
                <div className="white-bckrnd-aect-abt-abt-sect ">
                  <Image src={FourthImage} className="fouth-image-sjhs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="fl-bakjc-weoundc-sdcbn">
        <div className="displayflexat-ns">
          <div className="header-layout-at-main-section" style={myFont.style}>
            <div className="flx-two-images-at-wabout-aectionsdll">
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimagethree}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimagefive}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>
            </div>
            <div className="flx-two-images-at-wabout-aectionsdll">
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimagefour}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimagesix}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>{" "}
            </div>
            <div className="flx-two-images-at-wabout-aectionsdll">
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimageseven}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>
              <div className="border-for-each-image-at-about-section-sdcjk">
                <Image
                  src={BackGrndimageeight}
                  className="image-as-galleryy-pics-oin-about-csk"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <>
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
      </>
      <>
        <Footer />
      </>
    </>
  );
};

export default aboutus;
