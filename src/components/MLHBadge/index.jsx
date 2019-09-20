import React from "react";
import styles from "./MLHBadge.module.scss";

const MLHBadge = () => {
  return (
    <a
      id="mlh-trust-badge"
      className={styles.container}
      href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
        alt="Major League Hacking 2020 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  );
};

export default MLHBadge;
