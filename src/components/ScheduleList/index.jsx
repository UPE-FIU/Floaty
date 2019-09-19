// /**
//  * Reusable card component
//  */

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faPlus,
//   faMinus
// } from "@fortawesome/free-solid-svg-icons"; //need to pre-load in app.js
// import PropTypes from 'prop-types'
// import styles from './Card.module.scss'
// import { liveSchedule } from '../liveSchedule';

// const Card = (props) => {
//   const { title, startTime, location, organizer, description } = props.data
//   return (
//     <div className={styles.cardContainer}>
//       <h2>{title}</h2>
//       <div className={styles.timeAndLocation}>
//         <h3>{startTime}</h3>
//         <h3>{location}</h3>
//       </div>
//       <h3>{organizer}</h3>
//       <p>{description}</p>
//     </div>
//   )

// }

// const ScheduleList = ({ data }) => {
//   return (
//     <div className="card-list">
//       {data.map((card, i) => {
//         return (
//           <Card key={i} data={card} />
//         )
//       })}
//     </div>
//   )
// }

// export default ScheduleList;
