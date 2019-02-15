import React from "react"
// import PropTypes from "prop-types"
import Person from "./Person"

export default class Persons extends React.Component {
  render () {
    return (
      <div>
		    <ul>
          {this.props.data.map((person) => {
            return <Person key={person.id} person={ person } />
          })}
        </ul>
      </div>
    )
  }
}
