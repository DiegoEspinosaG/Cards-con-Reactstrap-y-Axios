import React from 'react'

export const PokeGridItem = ({ name, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ name } />
            <p> { name } </p>
        </div>
    )
}