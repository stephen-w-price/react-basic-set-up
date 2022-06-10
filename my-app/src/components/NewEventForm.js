
import { useState } from 'react'
import './NewEventForm.css'

// from lesson 41.
export default function NewEventForm({ addEvent, handleClose }) {
    const [title, setTitle] = useState('')
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setTitle(e.target.value)
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('manchester')
    
    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date, 
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        
        addEvent(event)
        handleClose()
        resetForm()
    }

    return (
        <div>
            <form className="new-event-form" onSubmit={handleSubmit}>
                <label>
                    <span>Event Title:</span>
                    <input 
                    // this is a controlled input because we can control the input from outside the input
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                            
                    />
                </label>
                <label>
                    <span>Event Date:</span>
                    <input 
                    
                        type="date" 
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    
                    />
                </label>
                <label>
                    <span>Event location:</span>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="bel air">Bel Air</option>
                        <option value="fairfax">Fairfax</option>
                        <option value="ellicott city">Ellicott City</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
            
        </div>
    )
}
