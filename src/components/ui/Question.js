import React from 'react'
import uniqid from 'uniqid';

export default function Question({question, selectQuestion, userSelections}){
    


    const allAnswers = userSelections.map((answerData) => {

        const styles = {
            backgroundColor: answerData.isSelected ? "#D6DBF5" : "#F5F7FB"
        }

        return <button key={uniqid()} style={styles} className="answer-button" onClick={() => selectQuestion({question, answer: answerData.answer, isSelected: answerData.isSelected })}>{answerData.answer}</button>
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