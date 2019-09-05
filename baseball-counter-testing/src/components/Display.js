import React from 'react'

const Display = (props) => {

    return (
        <>
            <h1>Baseball Dashboard</h1>
            <h2>Team: {props.team + 1}</h2>
            <h3>Team 1 Score: {props.scoreZero}</h3>
            <h3>Team 2 Score: {props.scoreOne}</h3>
            <h3>Ball: {props.ballCounter}</h3>
            <h3>Strike: {props.strikeCounter}</h3>
            <h3>Outs: {props.outCounter}</h3>
            <h3></h3>
        </>
    )
}

export default Display;