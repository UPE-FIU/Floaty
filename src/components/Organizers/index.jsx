import React from "react";
import styles from "./Organizers.module.scss";
// eslint-disable-next-line
const Organizers = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.organizer}>
        <img
          className="main-section-details-logo"
          alt="ShellHacks"
          src={require("../../assets/shellhacks.svg")}
        />
      </div>
      <div className={styles.cohost}>
        <h3>Co hosted by</h3>
        &nbsp;&nbsp;
        <img
          className="main-section-details-logo"
          alt="JP Morgan Chase & Co."
          src={require("../../assets/JPMC.svg")}
        />
      </div>
    </div>
  );
};
export default Organizers;
