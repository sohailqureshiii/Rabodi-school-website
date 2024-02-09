import Image from "next/image";
import React, { useState } from "react";
import MainLogo from "../../public/WhatsApp_Image_2024-02-09_at_6.26.38_PM-removebg-preview.png";
const myFont = localFont({ src: "../../fonts/Raleway-Medium.ttf" });
import localFont from "next/font/local";
import Link from "next/link";
import NavModal from "../NavBarModal/NavBarModal";
import Hamburger from "../../public/hamburgerig.svg";
import { useRouter } from "next/navigation";
import DropdownMenu from "../DropdownService/DropdownService";
const WhiteNavbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        style={myFont.style}
        className="flx-in-fr-navbar-one-lloney justify-and-other-navbar backdcoscjl"
      >
        <div className="flx-in-fr-navbar-one-lloney etra-gap-for-navabr-pages-link">
          <Link href={"/"}>
            <li className="list-links-for-pages-atdds">Home</li>
          </Link>
          <Link href={"/aboutus"}>
            <li className="list-links-for-pages-atdds">About Us</li>
          </Link>
          <Link href={"/facilities"}>
            <li className="list-links-for-pages-atdds">Facilities</li>
          </Link>
        </div>
        <div className="jrhds-oeiwklmadc">
          <Image src={MainLogo} className="mainlogo-for-school-rafces" />
        </div>
        <div className="flx-in-fr-navbar-one-lloney etra-gap-for-navabr-pages-link">
          <DropdownMenu
            menu={<li className="list-links-for-pages-atdds">Committee</li>}
          >
            <div className="list-of-dkrjm-rkrmdm">
              <Link href={"/abouttrust"}>
                <li className="list-navifgation-slind-sdjsa">About Trust</li>
              </Link>
              <Link href={"/members"}>
                <li className="list-navifgation-slind-sdjsa">Trust Member</li>
              </Link>
              <Link href={"/outribute"}>
                <li className="list-navifgation-slind-sdjsa">Our Tribute</li>
              </Link>
            </div>
          </DropdownMenu>
          <Link href={"/teacher"}>
            <li className="list-links-for-pages-atdds">Teachers</li>
          </Link>
          <Link href={"/contactus"}>
            <li className="list-links-for-pages-atdds">Contact</li>
          </Link>
        </div>
      </div>
      <div className="flx-nvbar-respo-at-asjdkp-s">
        <Link href={"/"}>
          <Image
            src={MainLogo}
            className="navbar-logo-for-respo-view-only-at-tp"
          />
        </Link>
        <Image
          src={Hamburger}
          className="shumahje-view-djks"
          onClick={() => setShow(true)}
        />
      </div>
      <NavModal visible={show} onClose={() => setShow(false)}></NavModal>
    </>
  );
};
export default WhiteNavbar;
