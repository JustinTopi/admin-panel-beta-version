import './Layout.scss';
import Sidebar from "../Sidebar/Sidebar";
import Topbar from '../Topbar/Topbar';

const Layout = () => {
    return (
        <div>
            <Topbar />
            <div className='container'>
                <Sidebar /> 
                <div className='others'>other page</div>
            </div>
        </div>
    )
}

export default Layout;