import React, { Component } from "react"
import styles from "./LinkContainer.module.scss"

const LinkContiner = ({ link, imgSrc }) => {
    return (
        <div className={styles.LinkContainer}>

            <a href={link}>
                <img className={styles.image} src={imgSrc} />
            </a>

            <a href="#"><h2>Tables</h2></a>
        </div>
    )
}

export default LinkContiner;




