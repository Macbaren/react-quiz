import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]],
          ]
          return (
            <li key={index}>
              <strong>{index + 1}</strong>&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <p>3 from 5 was right</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
