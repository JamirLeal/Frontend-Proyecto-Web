import react, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import profileimage from '../perfil/imgs/profileimage.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import appConfig from './../../appConfig'


const Perfil = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setInfo] = useState({
        name: '',
        username: '',
        birthdate: '',
        height: '',
        weight: ''
    });

    let navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token === null){
         navigate("/login")   
        }
    },[])

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const emailDocument = {
                email: token,
            }
            const {data: response} = await axios.get(appConfig.urlBackEnd + 'user' + emailDocument.email, { params: { id: emailDocument.email } });
            setData(response);
            setInfo({ 
                name: response.name, 
                username: response.username, 
                birthdate: response.birthdate, 
                weight: response.weight, 
                height: response.height,
            });
            console.group(data)
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    }

    const handleModalClick = async() => {
        const dataToSend = {
            email: token,
            name: userInfo.name,
            username: userInfo.username,
            birthdate: userInfo.birthdate,
            weight: userInfo.weight,
            height: userInfo.height,
        }

        console.log(dataToSend)

        let response = await axios.post(appConfig.urlBackEnd + 'modifyUser', dataToSend);
        console.log(response.data);

        setShowModal(false);
        window.location.reload();
    }

    return (
            <div>
                <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4 ">
                            <div className="text-center"> 
                            <img src={profileimage} width="200" className="rounded-circle" /> 
                            </div>
                            <div className="text-center mt-3"> 
                            <button  className="btn btn-secondary" onClick={() => { setShowModal(true) }}>Edit your data</button>
                            <button className="btn btn-info">Your Profile</button>
                            <button className="btn btn-success" onClick={() => {
                                navigate("/MyCalendar");
                            }}>
                                {""}
                                Return calendar
                            </button>

                                <h5 className="mt-2 mb-0">{ data.name }</h5> 
                                
                            <div className="profilecontainer p-3 my-3 bg-dark text-white">
                                <div className="px-4 mt-1">
                                    <h5> Username: { data.username }</h5>
                                    <h5> Email: { data.email } </h5>
                                    <h5> birthdate: { data.birthdate } </h5>
                                    <h5 id="text-right"> Height: { data.height } </h5>
                                    <h5 id="text-right"> Weight: { data.weight } </h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={() => { setShowModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title className='f2 fw6 ph0 mh0 center' style={{ height: 'fit-content'}}>Edit your information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="username"  id="username"
                            defaultValue={data.username} onChange={ handleChange }/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="name"  id="name"
                            defaultValue={data.name} onChange={ handleChange }/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="birthdate">Birthdate</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="birthdate"  id="birthdate"
                            defaultValue={data.birthdate} onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="height">Height</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="height"  id="height"
                            defaultValue={data.height} onChange={ handleChange }/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="weight">Weight</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="weight"  id="weight"
                            defaultValue={data.weight} onChange={ handleChange }/>
                        </div>
                        </fieldset>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowModal(false) }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default Perfil