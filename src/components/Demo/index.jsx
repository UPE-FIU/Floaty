import React from "react";
// import {
//   faFacebookSquare,
//   faInstagram,
//   faLinkedin,
//   faTwitterSquare,
//   faDiscord
// } from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../Link";
import styles from "./Demo.module.scss";
const Demo = () => {
  return (
    <div className={styles.container}>
      <h3>Resources</h3>
      <div className={styles.linkContainer}>
        <Link to="http://go.fiu.edu/SH19DevPost" id="demo-link">
          <img id={styles.devpostImage} style={{width: "100%"}} src="https://devpost-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-646bdf6ac6663230947a952f8d354cad.svg" alt="Devpost"/>
        </Link>
        <Link to="https://devpost.com/" id="demo-link">
          <div className={styles.button}>
            <h2>Table Assignment</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Demo;
