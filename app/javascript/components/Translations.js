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
    <div>
      <h3>All Translations</h3>
      <div>{translations}</div>
    </div>
  )
}

export default Translations
