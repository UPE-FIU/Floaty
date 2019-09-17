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
import './styles.css'

const Card = (title, startTime, location, organizer, description)=> (
  <div className="card-container">
    <h1>{title}</h1>
    <h3>{startTime}</h3>
    <h3>{location}</h3>
    <h3>{organizer}</h3>
    <p>{description}</p>
  </div>
)

const CardList = ()=> {

}

export { Card, CardList }
