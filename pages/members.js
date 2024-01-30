import Navbar from "@/components/Navbar/navbar";
import React from "react";
import "../app/globals.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Raleway-Medium.ttf" });
import Tearchers from "../public/hijab_icon.png";
import TeSir from "../public/teacher_boy_icon.png";
import Asimjaved from "../public/asimjaved.jpg";
import Hamid from "../public/Hamid.jpg";
import Saeeds from "../public/Saeeds.jpg";
import Mateen from "../public/Mateens.jpg";
import Faiz from "../public/Faizs.jpg";
import Mukhtars from "../public/Mukhtars.jpg";
import Rameez from "../public/Rameezghawte.jpg";
import Ziya from "../public/Ziya.jpg";
import Sohel from "../public/Sohelsk.jpg";
import Munir from "../public/Munirsk.jpg";
import Atifshak from "../public/Aatifshaikkj.jpg";
import Shanuqureshi from "../public/Shanuqureshi.jpg";
import Hamidmansoori from "../public/Hamidmansoori.jpg";
import Abdulh from "../public/Abdul hai (1).jpg";
import Anisghawte from "../public/Anisghawte.jpg";
import Majeeb from "../public/MajeedB.jpg";
import TeacherBoy from "../public/teacher_boy_icon.svg";
import Image from "next/image";
import Footer from "@/components/Footer/footer";

const Members = () => {
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
              <h3 className="fnt-hdr-snr-xjdk">Members</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns " style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="flx-in-for-ht-lne-area-djks mrgin-ytp-fr-respo-idjjkd">
            <div className="ht-lne-insd-abt-sjhs"></div>
          </div>
          <h2 className="abt-sch-sect-hdr-at-dskj">Members</h2>
          <p className="sendcd-para-at-abt-secnd-stiondlf">Members of School</p>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Majeeb}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr.Abdul Majeed Burondkar
              </h2>
              <p className="tecjr-gradutaion-seuhrk">President</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Asimjaved}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>

              <h2 className="texher-name-asec-tkdjs">Mr. Asim Javed Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">vice president</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image src={Hamid} className="tesgeres-sdijdksmadoe-sodksm" />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr. Hamidullah Ajmain Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Vice president</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Saeeds}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr. Abdussaeed Moosa Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Vice president</p>
            </div>
          </div>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image src={Faiz} className="tesgeres-sdijdksmadoe-sodksm" />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Faiz Ahmed Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Joint secretary</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Hamidmansoori}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr. Danish Hamid Mansoori
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Joint secretary</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image src={Munir} className="tesgeres-sdijdksmadoe-sodksm" />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr. Mohsin Muneer Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Joint treasurer</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Mateen}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mohd. Matin Jamaluddin Shaikh
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
          </div>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={TeacherBoy}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. kabiruddin Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={TeacherBoy}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. Iqbal Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Abdulh}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr.Abdul Hai Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Atifshak}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. Atif Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
          </div>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Mukhtars}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. Mukhtar Shaikh</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Shanuqureshi}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. Sheru Qureshi</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={Rameez}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">Mr. Rameez Ghawte</h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image src={Ziya} className="tesgeres-sdijdksmadoe-sodksm" />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mr.Ziya Azmat Jamal Aazmi
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
          </div>
          <div className="flx-in-images-of-teahers-st-akjs">
            <div className="cntr-a-dhjs-ewoiknxz-zsd">
              <div className="flx-in-for-responcve-view-only">
                <div className="wsdhjed-weojmzs-skadf">
                  <Image
                    src={TeacherBoy}
                    className="tesgeres-sdijdksmadoe-sodksm"
                  />
                </div>
              </div>
              <h2 className="texher-name-asec-tkdjs">
                Mohammed bilal Mohammed qasim Qureshi
              </h2>
              <p className="tecjr-gradutaion-seuhrk">Member</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Members;
