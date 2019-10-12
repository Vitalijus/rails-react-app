import React, {Component} from 'react'

class NewTranslation extends Component {
  render(){
    return(
      <div>
        <h1>New Translation</h1>

        <form onSubmit={this.props.handleFormSubmit}>
          <div className="form-group">
            <label>Type in words:</label><br/>
            <input onChange={this.props.handleNameChange} autoComplete="off" type="text" name="title" placeholder="e.g. open microphone" value={this.props.title} className="name-field"/>
          </div>

          <div className="action-btn">
            <input type="submit" className="submit-btn" value="Translate" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewTranslation
