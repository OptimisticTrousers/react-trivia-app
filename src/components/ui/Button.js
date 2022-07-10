import React from 'react'

export default function Button({handleClick, value}){
    return (
        <button className="main-button" onClick={handleClick}>{value}</button>
    )
}