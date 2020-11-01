import {useReducer, useEffect} from 'react'


const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'get_scores':
            return {...state, scores: action.payload}
        case 'add_score':
            return {...state, player: action.payload}
        default:
            return state
    }
}


export const useScores = (gamePlayer) => {
    const [state, dispatch] = useReducer(scoreReducer, {scores:[], player:null})
    const scores = state.scores
    const player = state.player

    const topTen = scores.slice(0,10)

    const saveScore = (gamerTag, playerScore) => {
        const formData = { gamertag: gamerTag, score: 40000}
        console.log(formData)
        //this will post the score to user with params of gamertag and score.
        // it will then update the state of scores and console.log it.
        fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then( newScore => {
            return dispatch({type: 'add_score', payload: newScore})
        })
    }

    console.log(gamePlayer)

    useEffect( () => {
        if (gamePlayer){
            console.log(state)
            fetch('http://localhost:3000/highscores')
            .then(res => res.json())
            .then( scores =>
                dispatch({type:"get_scores", payload:scores})
            )
        } else{
            console.log(gamePlayer)
            console.log('que')
        }
    }, [gamePlayer])

    return {scores, topTen, saveScore, player}
}