import React from 'react'
import "./topbar.scss"
import {Person, Mail, DeveloperModeRounded} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar "  + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <DeveloperModeRounded className="icon" />
                    <a href="#intro" className="logo">Code Queen.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+256 756 208509</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>cnakyanzi2019@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
