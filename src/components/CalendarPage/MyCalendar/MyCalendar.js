import React, { useState, useEffect } from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../../data/events'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import appConfig from './../../../appConfig'
import AddActivity from './AddActivity'

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const defaultEvent = {
  id: 0,
  title: "", 
  start: new Date(),
  end: new Date(), 
  desc: ""
};

const MyCalendar = ({token}) => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(defaultEvent);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("fetching activities");
        const emailDocument = {
            email: token,
        }
        const {data: response} = await axios.get(appConfig.urlBackEnd + 'activities' + emailDocument.email, { params: { id: emailDocument.email } });
        setActivities(response);
        console.group(response)
      } catch (error) {
        console.error(error.message);
      }
      console.log(activities)
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleSelected = (event) => {
    setCurrentEvent(event);
    setShowModal(true);
  };

  const handleDeleteActivity = async () => {
  
    axios.delete(appConfig.urlBackEnd + 'deleteActivity', {
      headers: {
        Authorization: token
      },
      data: {
        source: { _id: currentEvent._id }
      }
    });
    
    setShowModal(false);
    window.location.reload();
  }

  return (
      <div>
        <Calendar
        onSelectEvent={handleSelected}
        popup={false}
        localizer={localizer}
        events={activities}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        />
        <br />
        <AddActivity token={token}/>
        <Modal show={showModal} onHide={() => { setShowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title className='f2 fw6 ph0 mh0 center' style={{ height: 'fit-content'}}>Detalles de la actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{currentEvent._id}</p>
          <p>Title: {currentEvent.title}</p>
          <p>Distance: {currentEvent.distance}</p>
          <p>Time: {currentEvent.time}</p>
          <p>Calories: {currentEvent.calories}</p>
          <p>Start: {currentEvent.start.toLocaleString()}</p>
          <p>End: {currentEvent.end.toLocaleString()}</p>
          <p>Description: {currentEvent.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShowModal(false) }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { setShowModal(false) }}>
            Edit activity
          </Button>
          <Button variant="danger" onClick={ handleDeleteActivity }>
            Delete activity
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default MyCalendar;
    