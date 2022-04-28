import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = () => {
    return (
        <div className='App'>
            <div className='page1'>
                <Topbar />
            </div>
            
            <div className='page2'>
                <Sidebar />
                <div className='page3'>
                    <Outlet />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Layout;