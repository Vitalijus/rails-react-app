import React, {Component} from 'react'
import Header from './Header'
import NewTranslation from './NewTranslation'
import axios from 'axios'
import update from 'immutability-helper'

class ContentContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      translations: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ title: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault()
    e.target.reset();

    let title = this.state.title

    axios.post('/api/v1/translations', {
      title: title
    })
    .then( (response) => {
      const translations = update(this.state.translations, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        translations: translations
      })
    })
    .catch( (response) => {
      debugger
    })
  }

render() {
    return(
      <div>
        <Header/>

        <NewTranslation
          handleNameChange={this.handleNameChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}

export default ContentContainer
