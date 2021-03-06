import React, {Component} from 'react'

class TranslationItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }

    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    if(this.state.editable) {
      this.props.handleUpdate({
        id: this.props.translation.id,
        title: this.title.value,
        result: this.props.translation.result
      })
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.translation.title}/> : <span>{this.props.translation.title}</span>
    let result = this.state.editable ? <span>editable</span> : <span>{this.props.translation.result}</span>
    return(
      <ul>
        <li>{this.props.translation.id}</li>
        <li>{title}</li>
        <li>{result}</li>
        <li><button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit'}</button></li>
        <li><button onClick={() => this.props.handleDelete(this.props.translation.id)}>Delete</button></li>
      </ul>
    )
  }
}

export default TranslationItem
