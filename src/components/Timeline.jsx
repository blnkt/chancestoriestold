import React from "react"
// import PropTypes from "prop-types"
// import Person from "./Person"
// import { Trail, animated, config } from 'react-spring/renderprops'

export default class Timeline extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  isEven = (value) => {
    if (value % 2 === 0) {
      return "left";
      } else {
      return "right";
      }
  }

  render () {
    console.log(this.props.events);

    return (
      <ul className="timeline">
        {this.props.events.map((event, index) => {
          return (
            <li className={this.isEven(index)} key={ index }>
              <div className="content">
                <h2>{event.date}</h2>
                <p>{event.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }
}
