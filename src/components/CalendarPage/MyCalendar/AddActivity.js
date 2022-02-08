import React, { useState, useEffect } from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../../data/events'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import appConfig from './../../../appConfig'

const AddActivity = ({token}) => {
    const [showModal, setShowModal] = useState(false);
    const [activityInfo, setInfo] = useState({
        title: '',
        distance: '',
        time: '',
        calories: '',
        start: new Date(),
        end: new Date(),
        desc: '',
    });

    const handleChange = (event) => {
        event.preventDefault();
        setInfo({
            ...activityInfo,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        
        const dataToSend = {
            email: token,
            title: activityInfo.title,
            distance: activityInfo.distance,
            time: activityInfo.time,
            calories: activityInfo.calories,
            start: activityInfo.start,
            end: activityInfo.end,
            desc: activityInfo.desc,
        }

        console.log(dataToSend)

        let response = await axios.post(appConfig.urlBackEnd + 'addActivity', dataToSend);
        console.log(response.data);

        setShowModal(false);
        window.location.reload();
    }

    return (
        <div className="text-center">
          <Button variant="primary" style={{ justifySelf: "center" }} onClick={() => { setShowModal(true) }}>Add an activity</Button>
          <Modal show={showModal} onHide={() => { setShowModal(false) }}>
                <Modal.Header closeButton>
                <Modal.Title className='f2 fw6 ph0 mh0 center' style={{ height: 'fit-content'}}>Detalles de la actividad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="title">Title</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="title"  id="title"
                            defaultValue="" onChange={ handleChange }/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="distance">Distance</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="distance"  id="distance"
                            defaultValue="" onChange={ handleChange }/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="time">Time</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="time"  id="time"
                            defaultValue="" onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="calories">Calories</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="calories"  id="calories"
                            defaultValue="" onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="start">Start</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="date" name="start"  id="start"
                            defaultValue={new Date()} onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="end">End</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="date" name="end"  id="end"
                            defaultValue={new Date()} onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="desc">Desc</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="desc"  id="desc"
                            defaultValue="" onChange={ handleChange }/>
                        </div>
                        </fieldset>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowModal(false) }}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Add to my calendar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>);
}

export default AddActivity;