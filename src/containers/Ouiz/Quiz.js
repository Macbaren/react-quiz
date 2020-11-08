import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: 'White', id: 1 },
          { text: 'Green', id: 2 },
          { text: 'Blue', id: 3 },
          { text: 'Yellow', id: 4 },
        ],
      },
      {
        question: 'What year Mogilev was founded?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1234', id: 1 },
          { text: '1345', id: 2 },
          { text: '1273', id: 3 },
          { text: '1500', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer Id: ', answerId)

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all these questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
