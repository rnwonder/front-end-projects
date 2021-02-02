import React from 'react';


const Card = ({ name, population, region, capital, flag}) => {


    return (
        <div className="card">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>

            <div className="info">
                <h2>{name}</h2>
                <p>Population: <span>{population.toLocaleString()}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    )
}

export default Card;