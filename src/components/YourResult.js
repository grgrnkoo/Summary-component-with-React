import React from 'react';
import './YourResult.css';

export default function YourResult({ data }) {
    const getData = () => {
        let sum = 0;
        for (const element of data) {
            sum += element.score;
        }
        const score = sum / data.length;
        return score.toFixed(0);
    }

    return (
        <div className="YourResult">
            <h2>Your Result</h2>
            <div className='roundResult'>
                <p className='result'>{getData()}</p>
                <p>of 100</p>
            </div>
            <p className='resultTag'>Great</p>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}