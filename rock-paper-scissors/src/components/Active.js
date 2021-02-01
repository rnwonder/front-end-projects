import React, { useEffect, useState } from 'react';
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import rock from '../images/icon-rock.svg'




const Active = ({ dd, userDecision, setScore, setDd, setStartStatus }) =>{

    
    const [houseDecision, setHouseDecision] = useState()
    const [logo, setLogo] = useState()
    const [no, setNo] = useState(0)
    const [houseLogo, setHouseLogo] = useState()
    const [result, setResult] = useState('')


    const decisions = ["paper", "rock", "scissors"]

    useEffect (()=> {
        ff()

    }, [dd])

    const ff = () => {

        
            document.getElementById('active').classList.toggle('hide')
    
            // eslint-disable-next-line default-case
            switch(userDecision) {
                case 'paper':
                    setLogo(paper);
                    break;
                case "scissors":
                    setLogo(scissors)
                    break;
                case "rock":
                    setLogo(rock)
                break;
    
                } 


              
            setHouseDecision(decisions[Math.round(Math.random() * 2)])
            
            setNo(prev => prev + 1)
        
                if (no === 1) {

                   
                    
                    setTimeout(()=>{
                        
                        
                        // eslint-disable-next-line default-case
                        switch(houseDecision) {
                            case 'paper':
                                setHouseLogo(paper);
                                break;
                            case "scissors":
                                setHouseLogo(scissors)
                                break;
                            case "rock":
                                setHouseLogo(rock)
                            break;
                
                            } 

                            document.getElementById('house').classList.remove('blank')
                            document.getElementById('house').classList.add(houseDecision)

                            getResult()

                    }, 3000)
                }
    }

    const getResult = () => {

        document.getElementById('result').classList.remove('hide')
        document.getElementById('result1').classList.remove('hide')

        if (userDecision === "paper") {
            if (houseDecision === "paper") {
                setResult('DRAW')
            } else if (houseDecision === "rock") {
                setResult('YOU WIN')
                document.getElementById('youP').classList.add('win')
                setScore(prev => prev + 1)
            } else if (houseDecision === "scissors") {
                setResult('YOU LOSE')
                document.getElementById('houP').classList.add('win')
                setScore(prev => prev - 1)
            }
        } else if (userDecision === "rock") {
            if (houseDecision === "rock") {
                setResult('DRAW')
            } else if (houseDecision === "scissors") {
                setResult('YOU WIN')
                document.getElementById('youP').classList.add('win')
                setScore(prev => prev + 1)
            } else if (houseDecision === "paper") {
                setResult('YOU LOSE')
                document.getElementById('houP').classList.add('win')
                setScore(prev => prev - 1)
            }
        } else if (userDecision === "scissors") {
            if (houseDecision === "scissors") {
                setResult('DRAW')
            } else if (houseDecision === "paper") {
                setResult('YOU WIN')
                document.getElementById('youP').classList.add('win')
                setScore(prev => prev + 1)
            } else if (houseDecision === "rock") {
                setResult('YOU LOSE')
                document.getElementById('houP').classList.add('win')
                setScore(prev => prev - 1)
            }
        }
    }

    const handleRestart = () => {
        document.getElementById('result').classList.add('hide')
        document.getElementById('result1').classList.add('hide')
        document.getElementById('house').className = "box blank"
        document.getElementById('houP').className = "decide"
        document.getElementById('youP').className = "decide"
        setNo(0)
        setDd(false)
        setStartStatus(true)
        setHouseLogo('')
        setHouseDecision('')
    }
     

    return(
        <section id="active" className="active ">

            <div id="youP" className="decide">
                <h2 className="desk" >YOU PICKED</h2>

                <div className={`box  ${userDecision}`}>
                    <img src={logo} alt="" />
                </div>

                <h2 className="mob" >YOU PICKED</h2>

            </div>

            <div id="result" className="result desk hide">
                <div>
                    <h2>{result}</h2>
                    <button onClick={handleRestart}>PLAY AGAIN</button>
                </div>
            </div>

            <div id="houP" className="decide">
                <h2 className="desk">HOUSE PICKED</h2>

                <div id="house" className="box blank ">
                    <img src={houseLogo} alt="" />
                </div>

                <h2 className="mob">HOUSE PICKED</h2>

            </div>

            <div id="result1" className="result mob hide">
                <div>
                    <h2>{result}</h2>
                    <button onClick={handleRestart}>PLAY AGAIN</button>
                </div>
            </div>

        </section>
    )
}

export default Active;