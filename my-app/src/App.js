import './App.css';
import './components/Modal.css'
import { useState } from 'react'
import React from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])
  console.log(showModal)
  const [name, setName] = useState('hawkins')
  console.log(`This is the new state of name: ${name}`)
  // this is an example of array destructuring
  // bellow is code of the array destructuring would be written out if not presented in array destructuring. 
  // let nameStateVariable = useState('mario')
  // console.log(nameStateVariable)
  // // at this point name StateVariable is mario 
  // let name = nameStateVariable[0]
  // // console.log(name)
  // let setName = nameStateVariable[1]
  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
  }


  const handleClick = (id) => {
    // old code below 
    // setEvents(events.filter((event) => {
    //   return id !== event.id
    // }))
    // console.log(id)
    // *** the problem here is that we are using the current event state. 
    // The only issue here is that event state could be outdated and the event info is not accurate. 
    // if you pass a new function into set events which will return a new state. 
    // new code
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
        // the idea is to update the state but using a return 
        // the only way to return the event is if the id doesn't match it's id. which it will never not match so it will get deleted. The point of this function is to delete an item. 
        // when the return occurs with prevEvents the next return snippet of code will have an accurate status of the current state
      })
    })
  }
  
  function handleName() {
    if (name === 'hawkins') {
      console.log('Before setname the name is: ', name)
      setName('the upside down') 
      console.log(name)
    } else {
      console.log('Before setname the name is: ', name)
      setName('hawkins')
      console.log('setName has been called up but the state has not been updated', name)
    }
  }
  
  console.log(showEvents)
// example of props below
  const subTitleProp = "This is the subtitle"
  // example of toggling the modal
  const handleOpen = () => {
    setShowModal(true)
  }
  // example of toggling the modal
  const handleClose = () => {
    setShowModal(false)
  }
  

  return (
    <>
    <div className="App">
    
      <Title title="Events in your area" subtitle={subTitleProp}/>
      <div>
        <h1>You are in {name}</h1> 
        <button onClick={handleName}>Click me </button>
      </div>

      <div>
        {showEvents && <button onClick={() => setShowEvents(false)}>hide events</button>}
        {showEvents !== true && <button onClick={() => setShowEvents(true)}>show events</button>}  
      </div>

      {showEvents && <EventList events={events} handleClick={handleClick} showEvents={showEvents}/>}
      {/* <EventList handleClick={handleClick} showEvents={showEvents} events={events} /> */}
      
      
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm handleClose={handleClose} addEvent={addEvent}/>
      </Modal>}
      <br></br>
      {showModal !== true &&<button onClick={handleOpen}>Add new event</button>}

    </div>
    </>
  );
}

export default App;
