import React from "react";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../Link";
import styles from "./Demo.module.scss";
const Demo = () => {
  return (
    <div className={styles.container}>
      <h3>Resources</h3>
      <div>
        <Link to="http://go.fiu.edu/SH19DevPost" id="demo-link">
          <FontAwesomeIcon icon={faDiscord} size="4x" />
        </Link>
        <Link to="https://devpost.com/" id="demo-link">
          <FontAwesomeIcon icon={faDiscord} size="4x" />
        </Link>
      </div>
    </div>
  );
};
export default Demo;
