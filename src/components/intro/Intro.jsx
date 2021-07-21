import React, {useEffect, useRef} from 'react';
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, 
            { showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                 strings: ['Web Developer', 'Mobile Applications Developer', 'Graphics Designer', 'Code Queen!!!' ] });


    }, [])



    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/kats.png" alt="Cathy" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nakyanzi Catheriine</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrowd.png" alt="" />
                </a>
            </div>
        </div>
    )
}
