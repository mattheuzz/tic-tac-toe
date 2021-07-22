import React, { createContext, useState } from 'react';



export const GameContext = createContext();

export default function GamesContextProvider({ children }){
    const [square, setSquare] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [whoWins, setWhoWins] = useState('')
    const state = {
        square,
        setSquare,
        isXNext,
        setIsXNext,
        whoWins,
        setWhoWins,
    }

    return(
        <GameContext.Provider value={state}>{children}</GameContext.Provider>
    )
}