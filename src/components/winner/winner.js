

import React, { useContext } from 'react'

import { GameContext } from '../../contexts/game_context'



export default function Winner(){
    const { whoWins } = useContext(GameContext)
    
    if(!whoWins) return <></>;
    return(
        <div className="wins">
            {whoWins} WIN
        </div>
    )
}