import React from 'react'

const Dashboard = (props) => {

    return (
        <div className="button-bar">
            <button onClick={() => props.incrementPoints('strike')}>Strike</button>
            <button onClick={() => props.incrementPoints('ball')}>Ball</button>
            <button onClick={() => props.incrementPoints('foul')}>Foul</button>
            <button onClick={() => props.incrementPoints('hit')}>Hit</button>
        </div>
    )
}

export default Dashboard;