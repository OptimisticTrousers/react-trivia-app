import React from 'react'
import Button from './ui/Button'

export default function Start({handleStart}){
    return (
        <div className="start">
            <h1 className="start-title">Optimistic Quizzal</h1>
            <p className="start-description">Test your trivia knowledge right here!</p>
            <Button handleClick={handleStart} value={"Start quiz"}/>
        </div>
    )
}