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
import styles from "./SocialMedia.module.scss";

const Socials = () => {
  return (
    <div className={styles.container}>
      <h3>Follow us!</h3>
      <div className={styles.linksConatiner}>
        <Link to="https://discordapp.com/invite/upefiu">
          <FontAwesomeIcon icon={faDiscord} size="4x" />
        </Link>
        <Link className={styles.icon} to="https://www.instagram.com/upefiu/">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </Link>
        <Link className={styles.icon} to="https://www.facebook.com/upefiu">
          <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
        </Link>
        <Link className={styles.icon} to="https://twitter.com/upefiu">
          <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
        </Link>
        <Link
          className={styles.icon}
          to="https://www.linkedin.com/company/upe-fiu/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </Link>
      </div>
    </div>
  );
};
export default Socials;
