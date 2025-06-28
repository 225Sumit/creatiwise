import React from 'react'
import { NavLink } from 'react-router-dom'
import '../component/navbar.css'

export default function Navbarone() {
    return (
        <>
            <div className="navmain  d-flex justify-content-evenly align-items-center ">
                <div className="logo">
                   <svg width="103" height="32" viewBox="0 0 103 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="9.48148" height="32" fill="white"/>
<rect x="23.7036" width="9.48148" height="32" fill="white"/>
<ellipse cx="16.5927" cy="7.11123" rx="5.92593" ry="5.92593" fill="white"/>
<ellipse cx="40.2963" cy="24.8888" rx="5.92593" ry="5.92593" fill="white"/>
</svg>

                </div>
                <div className="menu">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link userbtn " aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/Contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hire">
                   <button type="button" className='btn1' >HIRE ME</button>
                </div>
            </div>

        </>
    )
}
