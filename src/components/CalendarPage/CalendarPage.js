import react from 'react'
import MyCalendar from './MyCalendar/MyCalendar'
import ProfileMiniature from './ProfileMiniature/ProfileMiniature'

const CalendarPage = () => {
    return (
        <div className="container mt-5">
            <ProfileMiniature />
            <MyCalendar />
        </div>
    )
}

export default CalendarPage