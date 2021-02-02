import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';


const Top = () => {

    const [toggle, setToggle] = useState(false)

    const toggleDark = () => {
        const moonPath = "M31.0906 1.98641C29.4075 3.14398 27.3207 4.72004 25.2292 6.66259C20.5073 11.0482 15.5 17.5471 15.5 25.5C15.5 33.4965 20.553 39.382 25.3175 43.1633C26.9487 44.4578 28.5761 45.5307 30.0133 46.3832C22.502 46.4863 15.9507 44.7189 11.0448 41.6537C5.04039 37.9022 1.5 32.225 1.5 25.5C1.5 12.9994 14.304 1.03669 31.0906 1.98641Z"

        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo"
        })

        timeline.add({
            targets: ".sun",
            d: [
                {value: !toggle ? moonPath : moonPath}       
            ]
        })
        .add({
            targets: ".logo",
            rotate: !toggle ? 320: -400
        }, '-= 350')
        .add({
            targets: "#main",
            loopBegin: function() {
                document.getElementById('main').classList.toggle('dark')
              }
            
        }, "-=600")
    
        //switch toggle on click
    
        if(!toggle) {
            setToggle(true)
        } else {
            setToggle(false)
        }



    }


    return (
        <section className="top pad">
            <h1>Where in the world?</h1>

            <div onClick={toggleDark} className="darkMode">
                <svg className="logo" width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="sun"
                        d="M31.0906 1.98641C29.4075 3.14398 27.3207 4.72004 25.2292 6.66259C20.5073 11.0482 15.5 17.5471 15.5 25.5C15.5 33.4965 20.553 39.382 25.3175 43.1633C26.9487 44.4578 28.5761 45.5307 30.0133 46.3832C22.502 46.4863 15.9507 44.7189 11.0448 41.6537C5.04039 37.9022 1.5 32.225 1.5 25.5C1.5 12.9994 14.304 1.03669 31.0906 1.98641Z"
                        fill="white" stroke="currentColor" strokeWidth="3" />
                </svg>

                

                <p>Dark Mode</p>

            </div>
        </section>
    )
}

export default Top;