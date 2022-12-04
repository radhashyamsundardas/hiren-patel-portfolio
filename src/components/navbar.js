import React from 'react';
import {Link} from  'react-router-dom';

export default function Navbar (){
return (

    <div id="nb">
        <Navbar  expand="lg" bg="light" sticky="top">
            <Link className='nav-link' to="/">
                <div>
                    <h1>Hiren Patel's Portfolio</h1>
                </div>
            </Link>
            <ul class="Navbar-nav ml-auto navitem-indent">
            <li class="nav-item">
                    <Link to="/Main">
                        <div >
                            <h2>main</h2>
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Aboutme">
                        <div >
                            <h2>About Me</h2>
                        </div>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/portfolio">
                        <div >
                            <h2>Portfolio</h2>
                        </div>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/Contact">
                        <div >
                            <h2>Contact Me</h2>
                        </div>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/resume">
                        <div >
                            <h2>Resume</h2>
                        </div>
                    </Link>
                </li>
            </ul>


        </Navbar>
    </div>

    

)

}

