import Navbar from "@/components/Navbar/navbar";
import React from "react";
import "../app/globals.css";
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import ScienceLab from "../public/sciencelab.jpg";
import Camera from "../public/ccvtv.jpg";
import Elearn from "../public/E-LEARNING.jpg";
import Library from "../public/library1.jpg";
import ComputerLab from "../public/computer lab.jpg";
import Footer from "@/components/Footer/footer";

const Facilities = () => {
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
              <h3 className="fnt-hdr-snr-xjdk">Facilities</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="usfjd-senjs-cdjsk">
            <div className="flx-in-for-ht-lne-area-djks">
              <div className="ht-lne-insd-abt-sjhs"></div>
            </div>
            <h2 className="abt-sch-sect-hdr-at-dskj">Facilities</h2>
            <p className="sendcd-para-at-abt-secnd-stiondlf">
              We provide facilities
            </p>
            <div className="flx-of-faciliets-cnr-section-at-sekjcn">
              <div className="contrn-fr-img-dn-lab-oim-facilities">
                <Image
                  src={ScienceLab}
                  className="Science-lab-image-at-skdsj"
                />
                <div className="pad-sect-lab-area-sec-ksjd">
                  <h3 className="sect-lab-dhr-ksdol-dss">Science Laboratory</h3>
                  <p className="para-slds-alb-facilities-djk">
                    Scientific temper is of utmost importance for the progress
                    of the society. As the society is made of young individuals,
                    it is our responsibility to boost the young brains
                    capability to think and invent, by providing the best
                    science laboratory facilities. Theory without practical
                    application is not of much value and importance. To get the
                    most out of our books, we must bring the visuals in to
                    videos.
                  </p>
                </div>
              </div>
              <div className="contrn-fr-img-dn-lab-oim-facilities">
                <Image src={Camera} className="Science-lab-image-at-skdsj" />
                <div className="pad-sect-lab-area-sec-ksjd">
                  <h3 className="sect-lab-dhr-ksdol-dss">CCTV Cameras</h3>
                  <p className="para-slds-alb-facilities-djk">
                    As we are progressing in the modern and competitive age, the
                    threat to safety and security is increasing at a phenomenal
                    rate. We all are aware of the theft, terror and other
                    illegitimate activities causing harm to the students, staff
                    and society. Hence, it is a must to consider CCTV coverage
                    for our entire school premises including the floors and the
                    classrooms. Entire activities are monitored
                  </p>
                </div>
              </div>
              <div className="contrn-fr-img-dn-lab-oim-facilities">
                <Image src={Elearn} className="Science-lab-image-at-skdsj" />
                <div className="pad-sect-lab-area-sec-ksjd">
                  <h3 className="sect-lab-dhr-ksdol-dss">E-Learning</h3>
                  <p className="para-slds-alb-facilities-djk">
                    The world is changing with an astronomical speed. Technology
                    is changing at a supersonic rate. Hence, it is mandatory for
                    us to be with the modern age cutting edge technology to stay
                    connected. E-Learning is the approach that we take seriously
                    and adopted the same with a sheer goal to help the students
                    by giving best teaching experience to understand the
                    concepts with ease and remember
                  </p>
                </div>
              </div>
            </div>
            <div className="flx-of-faciliets-cnr-section-at-sekjcn">
              <div className="bigger-cntr-at-sectonsk">
                <Image
                  src={ComputerLab}
                  className="dewn-inmg-at-facilities-asjhd"
                />
                <div className="pad-sect-lab-area-sec-ksjd">
                  <h3 className="sect-lab-dhr-ksdol-dss">Computer Lab</h3>
                  <p className="para-slds-alb-facilities-djk">
                    We are living in an age of Globalization, which is backed by
                    hypersonic connectivity via Digitization. Take a moment and
                    look around yourself, almost everything has been digitized
                    for good reasons. Gone are the primitive days of standing
                    for hours for your native place train tickets booking. Don’t
                    you curse those stressed hours that you spent in the banks
                    just to get your passbook updated to get the bank statement?
                    Or think about the admission form queues after SSC, when you
                    had to visit each college just to get the admission form.
                    Now, things are available and possible on your fingertips
                    few clicks away.
                  </p>
                </div>
              </div>
              <div className="bigger-cntr-at-sectonsk">
                <Image
                  src={Library}
                  className="dewn-inmg-at-facilities-asjhd"
                />
                <div className="pad-sect-lab-area-sec-ksjd">
                  <h3 className="sect-lab-dhr-ksdol-dss">Library</h3>
                  <p className="para-slds-alb-facilities-djk">
                    What comes to our mind when we think of a source of
                    knowledge which can be touched and felt? Paperbacks and
                    Hardcopies. Books! We do get bucket loaded information and
                    the treasure of knowledge from internet and other electronic
                    platforms, but if you want to feel close to a world which
                    will take you away from the daily distractions and set your
                    free from the unwanted pollutants of the surroundings, books
                    are your true friends who will accompany you till your
                    destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Facilities;
