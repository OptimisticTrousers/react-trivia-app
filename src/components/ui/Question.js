import React from 'react'
import uniqid from 'uniqid';

export default function Question({question, selectQuestion, userSelections, isQuizSubmitted}){
    


    const allAnswers = userSelections.map((answerData) => {

        const regularStyle = {
            backgroundColor: answerData.isSelected ? "#D6DBF5" : "#F5F7FB"
        }

        const quizEndStyle = {
            backgroundColor: answerData.correct ? "#94D7A2" : "#F8BCBC"
        }

        return <button key={uniqid()} style={isQuizSubmitted ? quizEndStyle : regularStyle} className="answer-button" onClick={() => selectQuestion({question, answer: answerData.answer, isSelected: answerData.isSelected })}>{answerData.answer}</button>
    })
    
    
   
    return (
        <div className="question-container">
            <h2 className="question">{question}</h2>
            <div className="question-buttons">
                {allAnswers}
            </div>

        </div>
    )
}