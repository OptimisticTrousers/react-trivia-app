import React from 'react'
import Button from './ui/Button'

export default function Start({handleStart}){
    return (
        <div className="start">
            <h1 className="start-title">Quizzical</h1>
            <p className="start-description">Some description if needed</p>
            <Button handleClick={handleStart} value={"Start quiz"}/>
        </div>
    )
}