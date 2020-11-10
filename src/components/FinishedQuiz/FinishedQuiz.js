import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          How are you?
          <i className={'fa fa-times ' + classes.success} />
        </li>
        <li>
          <strong>1.</strong>
          How are you?
          <i className={'fa fa-check ' + classes.error} />
        </li>
      </ul>
      <p>3 from 5 was right</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
