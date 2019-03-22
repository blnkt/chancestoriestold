import React from "react"
// import PropTypes from "prop-types"
// import { Trail, animated, config } from 'react-spring/renderprops'

export default class Nea extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidUpdate(props) {
    console.log(props);
  }

  render () {
    return (
      <div className="nea">
        {/* <div className="orbit">
          <p>Orbital Diagram</p>
          <div className="sun"></div>
        </div> */}
        <ul>
          <li className="detail">id: {this.props.id}</li>
          <li className="detail">designation: {this.props.name}</li>
          {/* <li className="detail">discovery date: {this.props.discovery_date}</li> */}
          <li className="detail"> Absolute Visual Magnitude: {this.props.absolute_magnitude_h}</li>
          <li className="detail"> Estimated Diameter:
            <p>min (ft): {this.props.estimated_diameter.feet.estimated_diameter_min}</p>
            <p>max (ft): {this.props.estimated_diameter.feet.estimated_diameter_max}</p>
            <p>min (miles): {this.props.estimated_diameter.miles.estimated_diameter_min}</p>
            <p>max (miles): {this.props.estimated_diameter.miles.estimated_diameter_max}</p>
            <p>min (m): {this.props.estimated_diameter.meters.estimated_diameter_min}</p>
            <p>max (m): {this.props.estimated_diameter.meters.estimated_diameter_max}</p>
            <p>min (km): {this.props.estimated_diameter.kilometers.estimated_diameter_min}</p>
            <p>max (km): {this.props.estimated_diameter.kilometers.estimated_diameter_max}</p>
​​​          </li>
          {this.props.hazardous ?
            <li className="detail">This is a potentially hazardous object</li>
          : null }
          {this.props.is_potentially_hazardous_asteroid ?
            <li className="detail">This is a sentry object</li>
          : null }
          {/* <li className="detail"> most recent close approach:
            <p>orbiting body: {this.props.close_approach_data[0].orbiting_body}</p>
            <p>approach date: {this.props.close_approach_data[0].close_approach_date}</p>
            <p>miss distance: {this.props.close_approach_data[0].miss_distance.astronomical} (astro), {this.props.close_approach_data[0].miss_distance.lunar} (lunar), {this.props.close_approach_data[0].miss_distance.kilomerters} (km), {this.props.close_approach_data[0].miss_distance.miles} (miles)</p>
          </li>
          <li className="detail"> relative velocity:
            <p>kmph: {this.props.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
            <p>kmps: {this.props.close_approach_data[0].relative_velocity.kilometers_per_second}</p>
            <p>mph: {this.props.close_approach_data[0].relative_velocity.miles_per_hour}</p>
          </li> */}
          <li className="detail"> API detail link: {this.props.links.self}</li>
          <li className="detail"> more info: {this.props.nasa_jpl_url}</li>
          <li>
            <p>Obrital Information</p>
            <ul>
              <li>eccentricity: {this.props.orbital_data.eccentricity}</li>
              <li>semi major axis: {this.props.orbital_data.semi_major_axis}</li>
              <li>inclination: {this.props.orbital_data.inclination}</li>
              <li>orbital period: {this.props.orbital_data.orbital_period}</li>
              <li>perihelion_distance: {this.props.orbital_data.perihelion_distance}</li>
              <li>aphelion_distance: {this.props.orbital_data.aphelion_distance}</li>
              <li>perihelion_time: {this.props.orbital_data.perihelion_time}</li>
              <li>equinox: {this.props.orbital_data.equinox}</li>
              <li>orbit class: {this.props.orbital_data.orbit_class.orbit_class_type}</li>
              <li>orbit class range: {this.props.orbital_data.orbit_class.orbit_class_range}</li>
              <li>orbit class description: {this.props.orbital_data.orbit_class.orbit_class_description}</li>
            </ul>
          </li>
        </ul>
    </div>
    )
  }
}
