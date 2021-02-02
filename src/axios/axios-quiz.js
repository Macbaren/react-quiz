import axios from 'axios'

export default axios.create({
  baseURL:
    'https://react-quiz-b00d2-default-rtdb.europe-west1.firebasedatabase.app/',
})
