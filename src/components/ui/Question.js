import React from 'react'
import AnswerButton from './AnswerButton';

export default function Question({question, correct_answer, incorrect_answers, selectQuestion, userSelections}){
    
    const allAnswers = [correct_answer, ...incorrect_answers]
    
    
    const questionData = allAnswers.map((answer, index) => {
        
        const hasUserSelected = userSelections[index].answer === answer ? true : false
        return <AnswerButton key={answer} selectQuestion={() => selectQuestion({answer, isSelected: hasUserSelected})} answer={answer} hasUserSelected={hasUserSelected} />
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