import {useReducer, useState, useEffect} from 'react'


const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'get_scores':
            return {...state, scores: action.payload}
    }
}


export const useScores = () => {
    const [state, dispatch] = useReducer(scoreReducer, {scores:'hi'})
    const scores = state.scores

    useEffect( () => {
        console.log(state)
        fetch('http://localhost:3000/highscores')
        .then(res => res.json())
        .then( scores => 
            dispatch({type:"get_scores", payload:scores}) 
        )
    }, [])


    return [scores]
}