import React from 'react'

const translateBase = (hits) => {
    if (hits === 1) {
        return `${hits}st Base`;
    }
    else if (hits === 0) {
        return hits;
    }
    else {
        return `${hits}nd Base`;
    }
}

const Display = (props) => {

    return (
        <div className="display-box">
            <h1>Baseball Dashboard</h1>
            <h2>Team: {props.team + 1}</h2>
            <div className="team-scores">
                <h3>Team 1 Runs: {props.scoreZero}</h3>
                <h3>Team 2 Runs: {props.scoreOne}</h3>
            </div>
            <div className="counters">
                <h3>Ball: {props.ballCounter}</h3>
                <h3>Strike: {props.strikeCounter}</h3>
                <h3>Outs: {props.outCounter}</h3>
                <h3>Field: {translateBase(props.hitCounter)}</h3>
            </div>
        </div>
    )
}

export default Display;