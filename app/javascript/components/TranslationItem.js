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
        title: this.title.value
      })
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.translation.title}/> : <span>{this.props.translation.title}</span>
    return(
      <div>
        {this.props.translation.id} {title}
        <button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.translation.id)}>Delete</button>
      </div>
    )
  }
}

export default TranslationItem
