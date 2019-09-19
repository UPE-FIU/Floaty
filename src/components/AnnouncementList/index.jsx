/**
 * Reusable card component
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
import PropTypes from 'prop-types'
import styles from './Card.module.scss'
import { liveSchedule } from '../liveSchedule';

const Card = (props) => {
  const { title, body, author } = props.data
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>- {author}</p>
    </div>
  )

}

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((card, i) => {
        return (
          <Card key={i} data={card} />
        )
      })}
    </div>
  )
}

export default CardList;
