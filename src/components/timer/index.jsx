import React, { useState } from "react"
import moment from "moment";
import "moment-duration-format"
//import styles from "./Timer.module.scss"
const CountdownTimer = () => {
    const [
        updateTime, setUpdateTime
    ] = useState('')
    const getCountdown = () => {

        // let startTime = moment("2019-09-20T22:30:00");
        let endTime = moment("2019-09-22T09:30:00");

        let currentTime = moment();
        let totalTime = moment.duration(endTime.diff(currentTime)).format("hh:mm:ss")

        setUpdateTime(totalTime)
    }

    setInterval(() => {
        getCountdown()
    }, 1000);

    return (
            <div>
                <h1>Countdown: {updateTime}</h1>
            </div>
    )
}

const CurrentTime = () => {

    const [
       currentTime, setCurrentTime
    ] = useState('')

    setInterval(() => {
        let currentTime = moment().format('lll')
        setCurrentTime(currentTime)
    }, 1000);

    return (
        <div>
            <h2>{currentTime}</h2>
        </div>
    )
}

export {CountdownTimer, CurrentTime};