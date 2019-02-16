import React from "react"
// import PropTypes from "prop-types"
import Person from "./Person"

export default class Persons extends React.Component {
  constructor(props) {
    super(props);
    const openPersons = {};
    this.state = { openPersons };
  }

  onClick = (id) => {
    const isOpen = !!this.state.openPersons[id];

    this.setState({
      openPersons: {
        [id]: !isOpen
      }
    });
  };

  render () {
    return (
      <div>
		    <ul className="persons">
          {this.props.data.map((person) => {
            return (
              <Person
                key={person.id}
                isOpen={!!this.state.openPersons[person.id]}
                onClick={this.onClick}
                person={ person }
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
