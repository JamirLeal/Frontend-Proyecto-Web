import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../../data/events'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const defaultEvent = {
  id: 0,
  title: "", 
  start: new Date(),
  end: new Date(), 
  desc: ""
};

export default class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        currentEvent: defaultEvent,
    };
  }
  render () {
    return (
      <div>
        <Calendar
        onSelectEvent={event => this.setState({ showModal: true, currentEvent: event })}
        popup={false}
        localizer={localizer}
        events={events}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        />
        <Modal show={this.state.showModal} onHide={(event) => { this.setState({ showModal: false }) }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.state.currentEvent.id}</p>
          <p>{this.state.currentEvent.title}</p>
          <p>{this.state.currentEvent.start.toLocaleString()}</p>
          <p>{this.state.currentEvent.end.toLocaleString()}</p>
          <p>{this.state.currentEvent.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(event) => { this.setState({ showModal: false }) }}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => { this.setState({ showModal: false }) }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
    
  }
}
    