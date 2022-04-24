import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';
import Logo from '../../assets/images/logo.png';
import { GrNotification, GrLanguage } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { FaUserCircle } from 'react-icons/fa'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='topRight'>
                    <div className='topbarIcon'>
                        <GrNotification />
                    </div>
                    <div className='topbarIcon'>
                        <GrLanguage />
                    </div>
                    <div className='topbarIcon'>
                        <FcSettings />
                    </div>
                    <div className='topbarIcon avatar'>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;