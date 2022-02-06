import react from 'react'
import './ProfileMiniature.css'
import profileimage from '../../perfil/imgs/profileimage.png';
import { useNavigate } from "react-router-dom";

const ProfileMiniature = () => {
    let navigate = useNavigate();

    return (
            <div className='row mb-3 profile-miniature' onClick={() => { navigate('/Perfil')}}>
                <div className='offset-md-9 col-3'>
                        <div className='row profile-miniature-container'>
                            <div className='col-5'>
                                <img src={profileimage} width="50" className="rounded-circle" />
                            </div>
                            <div className='col justify-content-center align-self-center '>
                                Jamir Leal Cota
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default ProfileMiniature;