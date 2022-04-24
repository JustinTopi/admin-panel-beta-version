import './Sidebar.scss'
import { FaHome, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'
// import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className='nav-bar'>
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-menu'>
                <h3 className='nav-bar-title'>Dashboard</h3>
                <ul className='nav-bar-list'>
                    <li className='nav-bar-list-item active'>
                        <FaHome className='nav-bar-icon' />
                        Home
                    </li>
                    <li className='nav-bar-list-item'>
                        <FaUsers className='nav-bar-icon' />
                        Customers
                    </li>
                    <li className='nav-bar-list-item'>
                        <FaMapMarkerAlt className='nav-bar-icon' />
                        Map
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Sidebar;