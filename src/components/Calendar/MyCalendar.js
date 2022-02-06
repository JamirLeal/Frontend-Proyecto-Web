import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={[]}
      views={allViews}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;