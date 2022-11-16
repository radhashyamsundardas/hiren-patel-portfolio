import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
// import {Navlink} from  'react-router-dom';

export default function navbar (){
return (

    <div>
        <navbar expand="lg" bg="light" sticky="top">
            <NavLink className='nav-link' to="/">
                <div class="text-dark">
                    <h1>Hiren Patel</h1>
                </div>
            </NavLink>
            <ul class="navbar-nav ml-auto navitem-indent">
                <li class="nav-item">
                    <NavLink to="/aboutme">
                        <div class="nav-font text-dark">
                            About Me
                        </div>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/portfolio">
                        <div class="nav-font text-dark">
                            Portfolio
                        </div>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/Contact">
                        <div class="nav-font text-dark">
                            Contact Me
                        </div>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/resume">
                        <div class="nav-font text-dark">
                            Resume
                        </div>
                    </NavLink>
                </li>
            </ul>


        </navbar>
    </div>

    

)

}

