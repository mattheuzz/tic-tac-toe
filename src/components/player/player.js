import './style.css'

import React, { useContext } from 'react'

import { GameContext } from '../../contexts/game_context'



export default function Player(){
    const { isXNext } = useContext(GameContext)
    return(
        <div>
            <h3 className="now-playing">Player {isXNext ? 'X' : 'O'}</h3>
        </div>
    )
}