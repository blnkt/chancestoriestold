import React from "react"
// import PropTypes from "prop-types"
// import Person from "./Person"
// import { Trail, animated, config } from 'react-spring/renderprops'

export default class Tracker extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render () {
    console.log(this.props.data)
    return (
      <div>
        { this.props.data
          ?
            <div>
                <p>{this.props.data.issastros.number}</p>
                <p>{this.props.data.issastros.people[0].name}</p>
                <p>{this.props.data.issastros.people[1].name}</p>
                <p>{this.props.data.issastros.people[2].name}</p>
                {/* <p>{this.props.data.isslocation.iss_position.longitude}</p> */}
                {/* <p>{this.props.data.isslocation.iss_position.latitude}</p> */}
            </div>
          : null
        }
      </div>
    )
  }
}
