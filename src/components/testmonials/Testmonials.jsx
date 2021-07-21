import React from 'react'
import "./testmonials.scss";

export default function Testmonials() {

    const data = [
        {
            id: "1",
            name: "Rutanana Arnold",
            title: "CEO KILOTECH",
            img: "./assets/kats.png",
            desc: "I have known Cathy the 'Code Queen' for quiet a longtime and she has coding skills and very good at analyzing data and producing what is required with the Data",

        },
        {
            id: "2",
            name: "Nakityo Joanita",
            title: "CO-Founder of SheCodes",
            img: "./assets/kats.png",
            desc: "I have known Cathy the 'Code Queen' for quiet a longtime and she has coding skills and very good at analyzing data and producing what is required with the Data",
            featured: true,
        },
        {
            id: "3",
            name: "Desire Brigdet",
            title: "CO-Founder of CodeQueens",
            img: "./assets/kats.png",
            desc: "I have known Cathy the 'Code Queen' for quiet a longtime and she has coding skills and very good at analyzing data and producing what is required with the Data",
            
        },

    ];
    return (
        <div className="testmonials" id="testmonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((p)=>(
                <div className={p.featured? "card featured" :"card"}>
                    <div className="top">
                        <img className="left" src="assets/arrow.png" alt="" />
                        <img className="user" src={p.img} alt="" />
                    </div>
                    <div className="center">
                        {p.desc}
                    </div>
                    <div className="bottom">
                        <h3>{p.name}</h3>
                        <h4>{p.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
