import React from "react";
import './Stats.css';

export default function Stats({ data }) {
    let uniqueKey = 0;
    return (
        <div className="Stats">
            <h2>Summary</h2>
            <ul>
                {
                    data.map((element) => {
                        uniqueKey++;
                        return (
                            <li key={uniqueKey} className="stat" id={element.category}>
                                <div className="inline category">
                                    <img src={element.icon} />
                                    {element.category}
                                </div>
                                <div className="inline scores">
                                    <p>{element.score}</p>
                                    <span className="faded"> / 100</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <button>Continue</button>
        </div>
    )
} 