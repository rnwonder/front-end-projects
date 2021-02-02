import React, { useEffect, useState } from 'react';
import Card from './Card'
import {Link} from 'react-router-dom'

const ListContainer = () => {

    const [countriesData, setCountriesData] = useState([])
    const [dataStatus, setDataStatus] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [regionInput, setRegionInput] = useState('')
    const [status, setStatus] = useState('LOADING')

    useEffect(()=>{
        if(!dataStatus) {
            document.getElementById('status').classList.add('loading')
            runFetch()
        }
        
    },[])


    useEffect(()=>{
        if(searchInput === '') {
            
            runFetch()
        } else {
            
            setRegionInput('')
            searchFetch()
        }       
    }, [searchInput])

    useEffect(()=>{
        if(regionInput === '' || regionInput === 'all') {
            document.getElementById('status').classList.add('loading')
            runFetch()
        } else {
            setSearchInput('')
            regionFetch()
        }
        
    }, [regionInput])

    

    async function runFetch(){
        
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        
        
        const data = await res.json()
        
        
        setDataStatus(true)
        setCountriesData(data)

        console.log(countriesData)
    }

    const searchFetch = async() => {
        try {
            
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${searchInput}`)

            const searchData = await res.json()
            if(Array.isArray(searchData)){
            setCountriesData(searchData)
            }else{
                setStatus('NO RESULT FOUND')
                setCountriesData([])
            }
        } catch(err) {
            console.log(err.message)
        }
        
    }


    const regionFetch = async() => {
        try {
            const res = await fetch(`https://restcountries.eu/rest/v2/region/${regionInput}`)

            const regionData = await res.json()

            setCountriesData(regionData)
        } catch(err) {
            console.log(err.message)
        }
        
    }

    

    const handleSearchInput = (e) =>{
        setSearchInput(e.target.value)
    }

    const handleRegion = (e) => {
        setRegionInput(e.target.value)
    }


    return (
        <section className="list pad">
            <form action="">
                <input onChange={handleSearchInput} type="text" name="search" id="search" value={searchInput} placeholder="Search for a country"/>

                <select onChange={handleRegion} value={regionInput} name="region" id="region" className="region">
                    <option value="" disabled selected hidden>Filter by Region</option>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>

                <i className="fas fa-search"></i>
            </form>





            
            <div className="card-container">
                {countriesData && countriesData.length> 0? countriesData.map(country => (
                    <Link to={`/more/${country.name}`}>
                        <Card key={country.numericCode} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />
                    </Link>
                )): <p id="status" className="not-found">{status}</p>}
                 
            </div>
        </section>
    )
}

export default ListContainer;