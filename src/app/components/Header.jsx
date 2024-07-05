"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import webDevImage from "../../../public/webdev300px.png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faPerson,
  faBrain,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const pathname = usePathname();
  const [navActive, setNavActive] = useState(false); // for mobile

  return (
    <>
      <div className="navMobileHeader">
        <div>
          <span>TheCrow95T&apos;s website</span>
          <FontAwesomeIcon
            icon={navActive ? faXmark : faBars}
            onClick={() => setNavActive(!navActive)}
          />
        </div>
      </div>
      <div
        className={navActive ? "darkTransparentBg" : "transparentBg"}
        onClick={() => setNavActive(!navActive)}
      ></div>
      <navbar className={navActive ? "nav-section-unhide" : "nav-section-hide"}>
        <Link
          href="/"
          className="webdevimg"
          onClick={() => setNavActive(false)}
        >
          <Image src={webDevImage} alt="webdev picture" priority />
        </Link>

        <Link
          href="/"
          className={`link ${pathname === "/" ? "nav-highlight" : ""}`}
          onClick={() => setNavActive(false)}
        >
          <div className="nav-grid">
            <FontAwesomeIcon
              icon={faHouse}
              className="nav-icon"
            ></FontAwesomeIcon>
            <div className="nav-text">Home</div>
          </div>
        </Link>
        <Link
          href="/about"
          className={`link ${pathname === "/about" ? "nav-highlight" : ""}`}
          onClick={() => setNavActive(false)}
        >
          <div className="nav-grid">
            <FontAwesomeIcon
              icon={faPerson}
              className="nav-icon"
            ></FontAwesomeIcon>
            <div className="nav-text">About</div>
          </div>
        </Link>
        <Link
          href="/skills"
          className={`link ${pathname === "/skills" ? "nav-highlight" : ""}`}
          onClick={() => setNavActive(false)}
        >
          <div className="nav-grid">
            <FontAwesomeIcon
              icon={faBrain}
              className="nav-icon"
            ></FontAwesomeIcon>
            <div className="nav-text">Skills</div>
          </div>
        </Link>
        <Link
          href="/contact"
          className={`link ${pathname === "/contact" ? "nav-highlight" : ""}`}
          onClick={() => setNavActive(false)}
        >
          <div className="nav-grid">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="nav-icon"
            ></FontAwesomeIcon>
            <div className="nav-text">Contact</div>
          </div>
        </Link>
        <div className="bottomText">
          TheCrow95T Website
          <br />
          Build with NextJS
        </div>
      </navbar>
    </>
  );
}
