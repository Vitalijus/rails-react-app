import React, {Component} from 'react'
import TranslationItem from './TranslationItem'

const Translations = (props) => {
  var translations = props.translations.map((translation) => {
    return(
      <div key={translation.id}>
        <TranslationItem
          translation={translation}
          handleUpdate={props.handleUpdate}
          handleDelete={props.handleDelete}
        />
      </div>
    )
   })

  return(
    <div className='translation-list-container'>
      <h3>All Translations</h3>

      <ul className="list-header">
        <li>ID</li>
        <li>Title</li>
        <li>Result</li>
        <li></li>
        <li></li>
      </ul>

      {translations}
    </div>
  )
}

export default Translations
