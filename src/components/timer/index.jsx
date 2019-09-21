import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment-duration-format";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [updateTime, setUpdateTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const getCountdown = () => {
    let startTime = moment("2019-09-20T22:30:00");
    let endTime = moment("2019-09-22T09:30:00");

    let currentTime = moment();
    let totalTime = moment
      .duration(endTime.diff(currentTime))
      .format("DD:hh:mm:ss");

    setUpdateTime(totalTime);
  };

  setInterval(() => {
    let currentTime = moment().format("lll");
    setCurrentTime(currentTime);
    getCountdown();
  }, 1000);

  return (
    <div className={styles.container}>
      <div>
        <h4>Countdown</h4>
        <h1>{updateTime}</h1>
      </div>
      <div>
        <h2>{currentTime}</h2>
      </div>
    </div>
  );
};

export default Timer;
