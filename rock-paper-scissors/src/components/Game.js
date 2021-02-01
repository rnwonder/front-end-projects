import React, { useEffect } from 'react';
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import rock from '../images/icon-rock.svg'

const Game = ({ active, userDecision, startStatus, setStartStatus }) => {

    useEffect(()=>{
        restartGame()
    }, [startStatus])

    const handleDecision = (arg) => (e) => {

        userDecision(arg)
        active(true)
        console.log(arg)
        document.getElementById('pick').classList.add('hide')
        setStartStatus(false)
        
    }


    const restartGame = () => {
        if(startStatus) {
            document.getElementById('pick').classList.remove('hide')
        }
    }

    return (
        <section id='pick' className="game">
            <div className="top">

                <div id="paper" className="box rr paper" onClick={handleDecision("paper")}>
                    <img src={paper} alt="" />
                </div>

                <div id="scissors" onClick={handleDecision('scissors')} className="box scissors">
                    <img src={scissors} alt=""/>
                </div>

            </div>


            <div className="bottom">
                <div id="rock" className="box rock" onClick={handleDecision('rock')}>
                    <img src={rock} alt="" />
                </div>
            </div>

        </section>


        
    )
}

export default Game;