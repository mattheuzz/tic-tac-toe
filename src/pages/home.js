import React from 'react'
import GamesContextProvider from '../contexts/game_context'
import Board from '../components/board/board'

export default function Home(){

    return (
        <div>
            <GamesContextProvider><Board /></GamesContextProvider>
        </div>
    )
}