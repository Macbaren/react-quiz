import React, { useState } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'

function App() {
  // const state = {
  //   counter: 0,
  // }

  // const updateCounter = (value) => {
  //   setState({
  //     counter: state.counter + value,
  //   })
  // }
  const [counter, setCounter] = useState(0)
  return (
    // <Layout>
    //   <Switch>
    //     <Route path="/auth" component={Auth} />
    //     <Route path="/quiz-creator" component={QuizCreator} />
    //     <Route path="/quiz/:id" component={Quiz} />
    //     <Route path="/" component={QuizList} />
    //   </Switch>
    // </Layout>
    <div className={'App'}>
      <h1>
        COUNTER <strong>{counter}</strong>
      </h1>
      <hr />
      <div className="Actions">
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        <button onClick={() => setCounter(counter - 1)}>Substract 1</button>
      </div>
    </div>
  )
}

export default App
