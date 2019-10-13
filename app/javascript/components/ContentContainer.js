import React, {Component} from 'react'
import Header from './Header'
import NewTranslation from './NewTranslation'
import Translations from './Translations'
import axios from 'axios'
import update from 'immutability-helper'

class ContentContainer extends Component {

constructor(props) {
  super(props)

  this.state = {
    translations: [],
    title: '',
    result: ''
  }

  this.handleFormSubmit = this.handleFormSubmit.bind(this)
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleUpdate = this.handleUpdate.bind(this)
  this.updateTranslation = this.updateTranslation.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
}

handleUpdate(translation){
  console.log(translation)
  fetch(`/api/v1/translations/${translation.id}`,
  {
    method: 'PUT',
    body: JSON.stringify({translation: translation}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
      this.updateTranslation(translation)
    })
}

updateTranslation(translation){
  let newTransations = this.state.translations.filter((f) => f.id !== translation.id)
  newTransations.unshift(translation)
  console.log(newTransations)
  this.setState({
    translations: newTransations
  })
}

handleDelete(id) {
  axios.delete(`/api/v1/translations/${id}`)
  .then((response) => {
    this.setState({
      translations: this.state.translations.filter((translation) => translation.id !== id)
    })
  })
}

handleNameChange(e) {
  this.setState({ title: e.target.value });
}

handleFormSubmit(e) {
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

  e.preventDefault()
  e.target.reset();
  this.setState({title: ''})
}

componentDidMount(){
  axios
  .get('/api/v1/translations.json')
  .then(data => this.setState({ translations: data.data }))
  .catch(error => console.log(error))
}

render() {
    return(
      <div>
        <Header/>

        <NewTranslation
          handleNameChange={this.handleNameChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Translations
          translations={this.state.translations}
          handleDelete={this.handleDelete}
          handleUpdate = {this.handleUpdate}
        />
      </div>
    )
  }
}

export default ContentContainer
