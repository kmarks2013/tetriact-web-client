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

    const gameScores = () => {
        if (scores.length) {
            let newScores = []
            if (topTen.find(score => score.id === gamePlayer.id)){
                return newScores = topTen
            } else{
                return newScores
            }
        }
    }

    const topScores = () =>{
        if (scores.length){
            let newScores = []
            if(topTen.some(top => top.id === gamePlayer.id)){
                newScores = [...topTen]
                console.log(newScores)
            } else {
                newScores = [...topTen, gamePlayer]
                console.log(newScores)
            }
            return newScores
        } else{
            return
        }
    }

    const saveScore = (gamerTag, playerScore) => {
        const formData = { gamertag: gamerTag, score: playerScore}
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

    useEffect( () => {
        if (gamePlayer){
            fetch('http://localhost:3000/highscores')
            .then(res => res.json())
            .then( scores =>
                dispatch({type:"get_scores", payload:scores})
            )
            console.log(scores)
        } else {
            return null
        }
    }, [gamePlayer])

    return {scores, topTen, saveScore, player, topScores, gameScores}
}