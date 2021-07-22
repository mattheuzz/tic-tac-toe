import './style.css'

import uuid from 'uuid/v4'

import React, { useContext, useEffect } from 'react'

import { GameContext } from '../../contexts/game_context'
import Square from '../square/square'
import Player from '../player/player'
import Reset from '../button/button_reset'
import calculateWinner from '../../utility/calc_winner'
import Winner from '../winner/winner'


export default function Board(){
    const { square, setWhoWins } = useContext(GameContext)

    useEffect(()=>{
        const winner =  calculateWinner(square)
        if(winner){
            setWhoWins(winner)
        }
    }, [square])

    return(
        <div className="board-container">
            <h1>
                Tic-Tac-Toe
            </h1>
            <Player />
            <Winner />
            <div className="board">
                {square.map((value, index) => (
                    <Square value={value} index={index} key={uuid()}/>
                ))}
            </div>
            <Reset />
        </div>
    )
}