/**
 * Reusable card component
 */

import React from "react";
import PropTypes from "prop-types";
import styles from "./List.module.scss";

const CardList = ({ children}) => {
  return <div className={styles.listContainer}>{children}</div>;
};

export default CardList;
