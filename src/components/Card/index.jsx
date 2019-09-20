/**
 * Reusable card component
 */

import React from "react";
//import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ children, className }) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.children}>{children}</div>
    </section>
  );
};

export default Card;
