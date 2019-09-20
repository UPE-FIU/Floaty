/**
 * Reusable card component
 */

import React from "react";
//import PropTypes from "prop-types";
import styles from "./List.module.scss";
import Scroll from "react-scrollbar"
const CardList = ({ children }) => {
  return (
    
      <Scroll verticalScrollbarStyle={{ backgroundColor: "transparent" }}>
        <div className={styles.listContainer}>{children}</div>
      </Scroll>
  )
};

export default CardList;
