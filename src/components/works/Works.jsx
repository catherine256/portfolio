import React, { useState } from 'react'
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc: "For web designing i majorly use reactjs, html, css, laravel and Bootstrap",
            img: "./assets/react.jpg",
        },
        {
            id: "2",
            icon: "./assets/globe.jpg",
            title: "Mobile Application",
            desc: "For Mobile Application development i majorly use react Native, html, css, laravel and Bootstrap",
            img: "./assets/native.jpg",
        },
        {
            id: "3",
            icon: "./assets/graph.jpg",
            title: "Graphics Design",
            desc: "For web Graphics  i majorly use Adobe Photoshop",
            img: "./assets/adobe.png",
        },

    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2):
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="portfolio" />

                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrowr.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrowr.png" className="arrow right" alt="" onClick={()=>handleClick()} />
        </div>
    )
}
