import './Sidebar.scss'
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'

const Sidebar = () => (
    <div className='nav-bar'>
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-menu'>
                <h3 className='nav-bar-title'>Dashboard</h3>
                <ul className='nav-bar-list'>
                    <NavLink exact="true" activeclassname="active" className="home" to="/">
                        <li className='nav-bar-list-item'>
                            <FaHome className='nav-bar-icon' />
                            Home
                        </li>
                    </NavLink>
                    <NavLink activeclassname="active" className="customers" to="/customers">
                        <li className='nav-bar-list-item'>
                            <FaUsers className='nav-bar-icon' />
                            Customers
                        </li>
                    </NavLink>
                    <NavLink activeclassname="active" className="map" to="/map">
                        <li className='nav-bar-list-item'>
                            <FaMapMarkerAlt className='nav-bar-icon' />
                            Map
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
)

export default Sidebar;