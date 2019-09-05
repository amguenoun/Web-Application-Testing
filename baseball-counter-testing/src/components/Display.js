import React from 'react'

const Display = (props) => {

    return (
        <>
            <h1>Baseball Dashboard</h1>
            <h3>Ball: {props.ballCounter}</h3>
            <h3>Strike: {props.strikeCounter}</h3>
        </>
    )
}

export default Display;