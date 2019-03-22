import React from "react"
// import PropTypes from "prop-types"
// import Person from "./Person"
// import { Trail, animated, config } from 'react-spring/renderprops'

export default class Tracker extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render () {
    return (
      <div>
        { this.props.data
          ?
            <div>
                <p>{this.props.data.nasaastros.number}</p>
                <p>{this.props.data.nasaastros.people[0].name}</p>
                <p>{this.props.data.nasaastros.people[1].name}</p>
                <p>{this.props.data.nasaastros.people[2].name}</p>
                {/* <p>{this.props.data.nasaiss.iss_position.longitude}</p> */}
                {/* <p>{this.props.data.nasaiss.iss_position.latitude}</p> */}
            </div>
          : null
        }
      </div>
    )
  }
}
