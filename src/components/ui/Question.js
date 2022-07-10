import React from 'react'
import uniqid from 'uniqid';

export default function Question({question, selectQuestion, userSelections, isQuizSubmitted}){
    

    function determineStyle(answerData){
        if(answerData.correct && isQuizSubmitted) return {backgroundColor: "#94D7A2"}
        if(!answerData.isSelected) return {backgroundColor: '#F5F7FB'}
        if(answerData.isSelected && !isQuizSubmitted) return {backgroundColor: "#D6DBF5"}
        if(!answerData.correct && answerData.isSelected && isQuizSubmitted) return {backgroundColor: "#F8BCBC"}
    }


    const allAnswers = userSelections.map((answerData) => {

        const styles = determineStyle(answerData)

        function makeAnswersOpaque(){
            if(!(styles.backgroundColor === "#94D7A2" && isQuizSubmitted)) return "opaque"
        }

        return <button key={uniqid()} style={styles} className={`answer-button ${isQuizSubmitted ? makeAnswersOpaque() : ""}`} onClick={() => selectQuestion({question, answer: answerData.answer, isSelected: answerData.isSelected })}>{answerData.answer}</button>
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