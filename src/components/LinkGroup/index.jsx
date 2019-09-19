import React, { Component } from "react"
import styles from "./LinkGroup.module.scss"

const LinkContiner = ({ firstLinkDest, imgSrc, secondLinkName, secondLinkDest }) => {
    return (
        <div className={styles.LinkContainer}>
            <a href={firstLinkDest}>
                <img className={styles.image} src={imgSrc} />
            </a>
            <a href={secondLinkDest}><h2>{secondLinkName}</h2></a>
        </div>
    )
}

export default LinkContiner;




