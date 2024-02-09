import Navbar from "@/components/Navbar/navbar";
import React from "react";
import "../app/globals.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import Tearchers from "../public/hijab_icon.png";
import TeSir from "../public/teacher_boy_icon.png";
import LeftSchoolAdd from "../public/IMG_2577.jpg";
import Shehbaz from "../public/Shehbaz sir.jpg";
import Naseeb from "../public/Naseeb mulla.JPG";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import CallSvg from "../public/phone-call.svg";

const Teacher = () => {
  return (
    <>
      <>
        <Navbar />
      </>
      <div className="bckrnd-clrssdf" style={myFont.style}>
        <div className="bkrnd-img-at-cnt-section"></div>
      </div>
      <div
        className="dfgtgdf-bsdiuk-esdj cla-tofpos-djksfssam"
        style={myFont.style}
      >
        <div className="displayflexat-ns">
          <div className="header-layout-at-main-section">
            <div className="flx-in-centr-hdr-at-ssdjk">
              <h3 className="fnt-hdr-snr-xjdk">Faculty</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns " style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="flx-in-for-ht-lne-area-djks mrgginsd-vkj-apsoe">
            <div className="ht-lne-insd-abt-sjhs"></div>
          </div>
          <h2 className="abt-sch-sect-hdr-at-dskj">High School</h2>
          <p className="sendcd-para-at-abt-secnd-stiondlf">
            Higher School Faculties
          </p>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Naseeb}
                    className="teacher-ghrapic-imageskdsk brdr-radius-stkjsm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Dr. Mulla Nasibuddin Zainuddin (Principal)
              </h2>
              <p className="tecjr-gradutaion-seuhrk">M.A.B.ED PH.D (Marathi)</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Sualeha Azhar Khan</h2>
              <p className="tecjr-gradutaion-seuhrk">
                M.A, B.ED, M.phil (Urdu)
              </p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                khan Nazia Tarannum Ayyub
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Bsc.B.ED</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Shaikh Husna Ziauddin</h2>
              <p className="tecjr-gradutaion-seuhrk">
                M.A, B.ED, M.ED ,(PET Exam Qualified), PHD Enterance Test
              </p>
            </div>
          </div>
          <div className="flx-in-for-ht-lne-area-djks">
            <div className="ht-lne-insd-abt-sjhs"></div>
          </div>
          <h2 className="abt-sch-sect-hdr-at-dskj">Primary School</h2>
          <p className="sendcd-para-at-abt-secnd-stiondlf">
            Primary School Faculties
          </p>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Farhana Firoz Shaikh (H/M)
              </h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A, B.ed</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Noorjahan Shakil Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A, B.ed</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mehfooza Hamid Qazi</h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Anjum Aara Mohammed Irshad Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A, B.ed</p>
            </div>
          </div>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Rehana Adam Chiplunkar</h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Shehbaz}
                    className="teacher-ghrapic-imageskdsk brdr-radius-stkjsm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Shahebaz Abdul Khalique Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Iram Saba Asad Mukri</h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.A</p>
            </div>

            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Zareena Mushir Khan</h2>
              <p className="tecjr-gradutaion-seuhrk">H.S.C, D.ed, B.com, B.A</p>
            </div>
          </div>
          <div className="flx-in-for-ht-lne-area-djks">
            <div className="ht-lne-insd-abt-sjhs"></div>
          </div>
          <h2 className="abt-sch-sect-hdr-at-dskj">Pre-Primary School</h2>
          <p className="sendcd-para-at-abt-secnd-stiondlf">
            Pre-Primary School Faculties
          </p>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Shabina Altaf Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">SSC. Montassory</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="flxin-cnt-tchr-img-sjjd">
                  <Image
                    src={Tearchers}
                    className="teacher-ghrapic-imageskdsk"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mubina Sayed Rizwan</h2>
              <p className="tecjr-gradutaion-seuhrk">HSC. EC. Ced</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bckrnd-fbr-message-section-btn" style={myFont.style}>
        <div className="flx-in-for-ht-lne-area-djks">
          <div className="cxbnsa-sjkdsm-wjskmns-asd"></div>
        </div>
        <h2 className="oisd-asjkm-seoiasds">Message</h2>
        <p className="ssdhj-qaioas-emcksdlf">Messages From School</p>
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div className="flx-in-ffr-tw-ier-sdjnm top-maron-stduj">
              <div className="clr-scetion-for-jdkvn clr-green">
                <div className="white-bckrnd-aect-abt-abt-sect">
                  <p className="udr-words-jfdoa-dkjs">
                    چمنزار محبت میں ا سی نے با غبا نی کی <br />
                    کہ جس نے ا پنی محنت ہی کو محنت کا ثمر جانا
                  </p>
                  <p className="paras-at-sect-siijd-sokes-fjkm">
                    {" "}
                    Peace and blessings to all my students, their parents and
                    the management. I, Principal of Rabodi Friends’ Circle (RFC)
                    Urdu High School welcome you graciously to take a sneak peek
                    of our small family. It is an absolute honour to lead such a
                    visionary foundation and I am extremely humble to thank the
                    pioneers of this school to consider me eligible for this
                    extraordinary responsibility. This is a foundation which
                    values educational opportunities for the new generation of
                    our society. The value of Education is beyond measure and
                    it's impact beyond imagination. The scope is limitless, and
                    the efforts are less, no matter how much you put. But we
                    believe that even a drop in the ocean can make a huge
                    difference in the society if not today,
                  </p>
                  <h3 className="name-of-thr-messenger-at-sod">
                    Dr. Mulla Nasibuddin Zainuddin (Principal)
                  </h3>
                  <p className="edut-of-the-mesenger-atfjjkdst">Principle</p>
                </div>
              </div>
              <div className="clr-scetion-for-jdkvn clr-drtfds">
                <div className="white-bckrnd-aect-abt-abt-sect">
                  <p className="udr-words-jfdoa-dkjs">Assalamu Alaikum</p>
                  <p className="paras-at-sect-siijd-sokes-fjkm">
                    Allow me to begin this conversation by thanking the Almighty
                    Allah, who is the Controller and Sustainer of this Universe.
                    I thank Him for giving me this opportunity to work as a Head
                    Mistress in this well established and robust foundation
                    named Shafi Burondkar Primary Urdu School for the last 12
                    years. These 12 years have been years of learning, guidance,
                    encouragement and happiness, by being in the vicinity of
                    shining angels and bright minds in the form of students and
                    our management. I am immensely proud and pleased to be a
                    part of this organization. Post the students and management,
                    it is the parents who believed in us by handing us not just
                    their kids, but their kids’ future. My respect and gratitude
                    lie with them as well. Now, it is our responsibility to
                    mould them in the best form we can, just like clay.
                  </p>
                  <h3 className="name-of-thr-messenger-at-sod">
                    Shaikh Farhana Firoz
                  </h3>
                  <p className="edut-of-the-mesenger-atfjjkdst">
                    Head Mistress
                  </p>
                </div>
              </div>
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
                  <p className="number-phn-nmbr-sect-ssdjk">+91 98928 14653</p>
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

      <Footer />
    </>
  );
};

export default Teacher;
