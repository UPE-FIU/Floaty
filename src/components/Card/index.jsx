/**
 * Reusable card component
 */

import React from "react";
//import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Card;
