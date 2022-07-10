import React from 'react'
import AnswerButton from './AnswerButton';
import uniqid from 'uniqid';

export default function Question({question, correct_answer, incorrect_answers, selectQuestion, userSelections}){
    

    const questionData = userSelections.map((answerData) => {

    const styles = {
        backgroundColor: answerData.isSelected ? "#D6DBF5" : "#F5F7FB"
    }
        return <button key={uniqid()} style={styles} className="answer-button" onClick={() => selectQuestion({answer: answerData.answer, isSelected: answerData.isSelected })}>{answerData.answer}</button>
        //return <AnswerButton key={answer} selectQuestion={selectQuestion} answer={userSelections[index].answer} hasUserSelected={hasUserSelected} />
    })
    
    const randomlySortedQuestions = questionData.sort(() => Math.random() - 0.5)
   
    return (
        <div className="question-container">
            <h2 className="question">{question}</h2>
            <div className="question-buttons">
                {randomlySortedQuestions}
            </div>

        </div>
    )
}