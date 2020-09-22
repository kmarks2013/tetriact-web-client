import React from 'react'
import Cell from './Cell'

const Stage = ({ stage }) => {
    return (
        <div>
            <p>ill set the stage.</p>
            {/* <Cell/> */}
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
        </div>
    )
}

export default Stage
