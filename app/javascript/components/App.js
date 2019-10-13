import React, {Component} from 'react'
import ContentContainer from './ContentContainer'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

class App extends Component {
  render(){
    return(
      <ContentContainer/>
    )
  }
}

export default App
