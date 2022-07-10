import React from 'react'
import uniqid from 'uniqid';

export default function Question({question, selectQuestion, userSelections, isQuizSubmitted}){
    

    function determineStyle(answerData){
        if(!answerData.isSelected) return {backgroundColor: '#F5F7FB'}
        if(answerData.isSelected && !isQuizSubmitted) return {backgroundColor: "#D6DBF5"}
        if(!answerData.correct && answerData.isSelected && isQuizSubmitted) return {backgroundColor: "#F8BCBC"}
        if(answerData.correct && answerData.isSelected && isQuizSubmitted) return {backgroundColor: "#94D7A2"}
    }

    const allAnswers = userSelections.map((answerData) => {

        const regularStyle = {
            backgroundColor: answerData.isSelected ? "#D6DBF5" : "#F5F7FB"
        }

        const quizEndStyle = {
            backgroundColor: answerData.isSelected && answerData.correct ? "#94D7A2" : "#F8BCBC"
        }

        return <button key={uniqid()} style={determineStyle(answerData)} className="answer-button" onClick={() => selectQuestion({question, answer: answerData.answer, isSelected: answerData.isSelected })}>{answerData.answer}</button>
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