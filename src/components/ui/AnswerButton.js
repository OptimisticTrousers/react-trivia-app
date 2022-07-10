import React from 'react'

export default function AnswerButton(props){
    
    const styles = {
        backgroundColor: props.hasUserSelected ? "#D6DBF5" : "#F5F7FB"
    }
    return (
        <button className="answer-button" style={styles} onClick={props.handleClick}>{props.answer}</button>
    )
}