import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <h1> HIREN PATEL</h1>
       <ul class="Navbar-nav ml-auto navitem-indent">
       <li class="nav-item">
                    <Link to="/">
                        <div >
                            <img src='https://www.clipartmax.com/png/small/14-142308_home-icon-png-orange.png' alt='home page' height={30}/>

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
                    <Link to="/Portfolio">
                        <div >
                            <h2>Portfolio</h2>
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Contactme">
                        <div >
                            <h2>Contact Me</h2>
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Resume">
                        <div >
                            <h2>Resume</h2>
                        </div>
                    </Link>
                </li>
       </ul>
    </div>
  )
}
       
      

export default Navbar