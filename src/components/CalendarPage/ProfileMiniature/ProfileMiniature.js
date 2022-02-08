import react, { useState, useEffect } from 'react'
import './ProfileMiniature.css'
import profileimage from '../../perfil/imgs/profileimage.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import appConfig from './../../../appConfig'

const ProfileMiniature = ({token}) => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const emailDocument = {
                email: token,
            }
            const {data: response} = await axios.get(appConfig.urlBackEnd + 'user' + emailDocument.email, { params: { id: emailDocument.email } });
            setData(response);
            console.group(data)
          } catch (error) {
            console.error(error.message);
          }
          console.log("miniature fetched");
          setLoading(false);
        }
    
        fetchData();
    }, []);

    const handleClick = () => {
        localStorage.removeItem('token');
        console.log("removed token");
        window.location.reload();
    }

    return (
            <div className='row mb-3 profile-miniature'>
                <div className="lh-copy mt3">
                <button className="btn btn-secondary" onClick={handleClick}>Logout</button>
                </div>
                <div className='offset-md-9 col-3' onClick={() => { navigate('/Perfil')}}>
                        <div className='row profile-miniature-container'>
                            <div className='col-5'>
                                <img src={profileimage} width="50" className="rounded-circle" />
                            </div>
                            <div className='col justify-content-center align-self-center '>
                                Hi, { data.name } !
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default ProfileMiniature;