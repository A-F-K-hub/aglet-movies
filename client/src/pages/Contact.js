import React from "react";
import "./Contact.css";
import contactImg from "../../src/images/AvatarMaker.png";

import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "../Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact-container">
        <img className="contact-img" src={contactImg} alt="" />
        <h1 className="contact-h1">hello</h1>
        <p className="contact-p">
          my name is <b>Amanda Khumalo</b>,
          <br />
          and I am currently watching <br /> a series called <b>Euphoria</b>.
          <br />
          <br />
          <br />
          you can reach me on:
          <br />
          <b>tel:</b> <a href="">065 813 5415</a>
          <br />
          <b>email:</b> <a href="">amandafkk19@gmail.com</a>
          <br />
          <br />
          <b>share:</b> <FaFacebook /> <FaInstagramSquare /> <FaTwitter />
          <FaLinkedin /> <FaGithub />
        </p>
        ;
      </section>
    </>
  );
}
