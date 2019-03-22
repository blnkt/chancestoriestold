import React from "react"
// import PropTypes from "prop-types"
// import { Trail, animated, config } from 'react-spring/renderprops'
import Neo from "./Neo"

export default class Neas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    console.log("mounted", props);
  }

  componentDidUpdate(props) {
    console.log("updated", props);
  }

  renderNeos = (neos) => {
    for (let neo in neos) {
      console.log(neo);
      return <Neo
        name={neos[neo].designation}
        diameter={neos[neo].estimated_diameter}
        hazardous={neos[neo].is_potentially_hazardous_asteroid}
        sentry={neos[neo].is_sentry_object}
        links={neos[neo].links}
        externalUrl={neos[neo].nasa_jpl_url}
      />
    }
  }

  render () {
    return (
      <div>
        {Object.entries(this.props.neos).map(([id, neo]) => {
          return <Neo {...neo} />
        })}
      </div>
    )
  }
}

