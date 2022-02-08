import react, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MyCalendar from './MyCalendar/MyCalendar'
import ProfileMiniature from './ProfileMiniature/ProfileMiniature'

const CalendarPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token === null){
         navigate("/login")   
        }
    },[])

    return (
        <div className="container mt-5">
            <ProfileMiniature token={token}/>
            <MyCalendar token={token}/>
        </div>
    )
}

export default CalendarPage