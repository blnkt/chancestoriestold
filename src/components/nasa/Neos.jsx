import React from "react"
// import PropTypes from "prop-types"
import { useSpring, animated, interpolate } from 'react-spring/renderprops'
import Neo from "./Neo"

export default class Neas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    // console.log("mounted", props);
  }

  componentDidUpdate(props) {
    // console.log("updated", props);
  }

  render () {
    return (
      <div>
        {Object.entries(this.props.neos).map(([id, neo]) => {
          return <Neo key={id} {...neo} />
        })}
      </div>
    )
  }
}

