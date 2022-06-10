import React from 'react'
import styles from './EventList.module.css'
export default function EventList({handleClick, showEvents, events }) {
    return (
        <div>
            {/* what this does below is if showEvents is true then events.map will also be true */}
            {events.map((event, index) => (
            <div className={styles.card} key={event.id}>
                <h2>{index} - {event.title}</h2>
                <h2>{event.date}</h2>
                <h2>{event.location}</h2>
                <button onClick ={() => handleClick(event.id)}>delete event</button>
                {/* /* the index comes as the second argument in the event. It is optional. It is not recommended to use the index as the id because if one if the items in the array is removed then the id itself will be changed.  */} 
            </div>
            ))}
        </div>
    )
}
