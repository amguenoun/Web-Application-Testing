import React from 'react'

const Dashboard = (props) => {

    return (
        <>
            <div className="button-bar">
                <button onClick={() => props.incrementPoints('strike')}>Strike</button>
                <button onClick={() => props.incrementPoints('ball')}>Ball</button>
                <button onClick={() => props.incrementPoints('foul')}>Foul</button>
                <button onClick={() => props.incrementPoints('hit')}>Hit</button>
            </div>
            <button className="reset-btn" onClick={props.resetAll}>Reset Dashboard</button>
        </>
    )
}

export default Dashboard;