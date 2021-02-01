import React, { useState, useEffect } from 'react';
import close from '../images/icon-close.svg'
import rules from '../images/image-rules.svg'


const Rule = () => {


    const [ruleSeen, setRuleSeen] = useState(false)

    useEffect(()=>{
        toggleRule()
    }, [ruleSeen])


    const handleClose = () => {
        setRuleSeen(false)
    }

    const handleShow = () => {
        setRuleSeen(prev => !prev)
    }

    


    const toggleRule = () => {
        if(!ruleSeen) {
            document.getElementById('rule').className = "rule-view hide"
        } else {
            document.getElementById('rule').className = "rule-view"
        }
    }

    return (
        <section className="rule">
            <div id="rule" className="rule-view">
                <img onClick={handleClose}  src={close} alt="" />
                <img  src={rules} alt=""/>
            </div>
            <button onClick={handleShow}>RULES</button>
        </section>
    )
}

export default Rule;