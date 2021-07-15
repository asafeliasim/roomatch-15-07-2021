import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions/userActions';
export const Header = ({path}) => {
    const userLogin = useSelector(state => state.userLogin);
    const dispatch = useDispatch();

    const logoutHandler = () => {
    
        dispatch(logout())
    };
    const {userInfo} = userLogin;

    return (
        <header id="main-header">
                <nav id="main-nav" className="bg-dark">
                    {userInfo && 
                    <ul>
                        <li>
                            <LinkContainer to="/" className={path === '/' ? "current text-light" : "text-light "}>
                                <span className="main-link">
                                    <i className="fas fa-home"></i>
                                </span>
                            </LinkContainer>
                            
                        </li>
                        <li>
                            <LinkContainer to="/" className={path === '/' ? "current text-light" : "text-light "}>
                                <span className="main-link">
                                    <i className="fas fa-user"></i>
                                </span>
                            </LinkContainer>
                            
                        </li>
                        <li>
                            <LinkContainer to="/about" className={path === '/about' ? "current text-light" : "text-light"}>
                                <span className="main-link">
                                    <i className="fas fa-bell"></i>
                                </span>
                            </LinkContainer>

                        </li>                  
                        <li>
                            <LinkContainer to="/about" className={path === '/about' ? "current text-light" : "text-light"}>
                                <span className="main-link">
                                    <i className="fas fa-star"></i>
                                </span>
                            </LinkContainer>
                        </li>
                         <li onClick={logoutHandler}>                       
                                <span className="main-link" >
                                    <i className="fas fa-sign-out-alt"></i>
                                </span>    
                        </li>
                        
                       
                    </ul>
                    }
                   
                   <h1 className="text-light" style={{textTransform:'UPPERCASE'}}>Roomatch</h1>
                </nav>
            
        </header>
    )
}
