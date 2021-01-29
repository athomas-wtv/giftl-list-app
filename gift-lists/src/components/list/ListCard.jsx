import React from 'react'

function ListCard(props) {
    return (
        <div className="mdc-card mdc-card--outlined">
            <div className="mdc-card__primary-action" tabIndex="0">
                <p>{props.url}</p>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default ListCard
