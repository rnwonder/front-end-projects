import React, { useEffect, useState, useContext } from 'react';
import {IsoContext} from './IsoContext'
import {Link} from 'react-router-dom'


const MoreInfo = ({match}) => {
    const {code, name} = useContext(IsoContext)
    const [iso3To2, setIso3to2] = code
    const [iso2ToName, setIso2ToName] = name
    const [info, setInfo] = useState({
        "population": '',
        "currencies": [{name: ''}],
        "languages": [{name: ''}],
        "borders": []
    })
    

    useEffect(()=>{
        getInfo()
    }, [])

    

    const getInfo = async () => {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.name}`)

        const infoData = await res.json()

        setInfo(infoData[0]) 

    }




    return (
        <section className="more-info pad">
            <div className="button">
                <Link to='/'>
                    <button> <i className="fas fa-long-arrow-alt-left"></i> Back</button>
                </Link>
            </div>


            <div className="show">
                <div className="flag">
                    <img src={info.flag} alt=""/>
                </div>

                <div className="show-info">
                    <h2>{info.name}</h2>

                    <div className="details">
                        <div className="left">
                            <p>Native Name: <span>{info.nativeName}</span></p>
                            <p>Population: <span>{info.population.toLocaleString()}</span></p>
                            <p>Region: <span>{info.region}</span></p>
                            <p>Sub Region: <span>{info.subregion}</span></p>
                            <p>Capital: <span>{info.capital}</span></p>
                        </div>

                        <div className="right">
                            <p>Top Level Domain: <span>{info.topLevelDomain}</span></p>
                            <p>Currencies: <span>{info.currencies[0].name}</span></p>
                            <p>Languages: <span>{info.languages.map(lang=>(lang.name)).join(', ')}</span></p>
                        </div>
                    </div>

                    <div className="border-country">
                        <h3>Border Countries:</h3>

                        <ul>
                            {info.borders.map(country=>(
                                <li>{iso2ToName[iso3To2[country]].name}</li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfo;