
import './Header.css'
import brokerLogo from '../../assets/broker-logo-dark.png';
import DarkLightToggle from '../../DarkLightToggle';
const Header = () => { 
    return (
        <div class="topbar">
            <div class="toggle">
                <div className='barger_icon'>
                   <i class="fa-solid fa-bars"></i>
                </div>
                <div> 
                  <img src={brokerLogo} alt="" />
                </div> 
            </div>

            <div class="search">
                <label>
                    <input type="text" placeholder="Search here"/> 
                </label>
            </div>

            <div class="dark_light_container">
               <DarkLightToggle></DarkLightToggle>
            </div>
    </div>
    );
};

export default Header;