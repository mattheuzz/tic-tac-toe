import './style.css'

import React, { useContext } from 'react'

import { GameContext } from '../../contexts/game_context'


export default function Square({ value, index }){
    const { square, setSquare, isXNext, setIsXNext, whoWins } = useContext(GameContext)

    const handleClick = ()=>{
        if(square[index]) return
        if(whoWins) return

        const newSquare = [...square] 
        newSquare[index] = isXNext ? 'X' : 'O'
        setSquare(newSquare)
        setIsXNext(!isXNext)
    }

    return(
        <div>
            <button type="button" onClick={handleClick} className="mark">{value}</button>
        </div>
    )
}