import React from 'react';


const Score = ({score}) => {

    return (
        <section className="score-board">
            <ul>
                <li>
                    <p>ROCK</p>
                </li>
                <li>
                    <p>PAPER</p>
                </li>
                <li>
                    <p>SCISSORS</p>
                </li>
            </ul>


            <div className="score">
                <h1>SCORE</h1>
                <p>{score}</p>
            </div>
        </section>
    )
}

export default Score;