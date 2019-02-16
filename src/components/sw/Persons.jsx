import React from "react"
// import PropTypes from "prop-types"
import Person from "./Person"
import { Trail, animated, config } from 'react-spring/renderprops'

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
          <Trail
            native
            config={config.gentle}
            items={this.props.data}
            keys={ item => item.id }
            from={{ opacity: 0}}
            to={{ opacity: 1 }}>
            {item => props => (
              <animated.li
                style={props}
                className="person"
              >
                <Person
                  isOpen={!!this.state.openPersons[item.id]}
                  onClick={this.onClick}
                  person={ item }
                />
              </animated.li>
            )}
          </Trail>
        </ul>
      </div>
    )
  }
}
