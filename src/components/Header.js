import Logo from '../assets/public/LogoKhanaKhazana.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const Title = ()=>{
    return <img src={Logo} alt='logo of app' style={{height: "100px", width:"100px"}}></img>
}

const Header = ()=>{
    const isOnline = useOnlineStatus();
    console.log(`isOnline : ${isOnline}`)
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>{isOnline ? 'online' : 'offline' }</li>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/instamart">Instamart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;