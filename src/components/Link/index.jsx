import React from "react";
import styles from "./Link.module.scss";

const Link = ({ to, children, id }) => {
  return (
    <a className={styles.container} id={id} href={to}>
      {children}
    </a>
  );
};

export default Link;
