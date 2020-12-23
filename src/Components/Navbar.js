import React, {useState} from 'react'
import './Navbar.css';
import Auth from './Auth/auth'
import {useHistory} from 'react-router-dom'
export const Navbar = props => {
    const [click,setClick] = useState(false);
    // eslint-disable-next-line no-unused-vars
  

    const handleClick = () => setClick(!click);
    const history = useHistory();

    return (
        <>
          <nav className="navbar">
            <div className="navbar-Container">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                    <button className="login-btn"
                      onClick={ () => {
                        Auth.logout( () => {
                            history.push('/')
                            }
                        );
                        }
                      }
                    > 
                        Logout
                    </button>
                    </li>
                </ul>

              
            </div>
          </nav>  
        </>
    )
}

export default Navbar;
