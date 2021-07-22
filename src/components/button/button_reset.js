import './style.css'

import React, { useContext } from 'react'

import { GameContext } from '../../contexts/game_context'



export default function Reset(){
    const { setSquare, setIsXNext, setWhoWins } = useContext(GameContext)

    const handleClick = () =>{
        setSquare(Array(9).fill(null))
        setIsXNext(true)
        setWhoWins('')
    }

    return(
        <div className="reset">
            
            <button className="btn-reset" type="button" onClick={handleClick}>
                Reset
            </button>
            
        </div>
    )
}