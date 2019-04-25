import React from "react"
// import PropTypes from "prop-types"
// import { Trail, animated, config } from 'react-spring/renderprops'

export default class Nea extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  componentDidUpdate(props) {
    // console.log(props);
  }

  semiMinorAxis = (semiMajorAxis, eccentricity) => {
    return Math.sqrt(Math.pow(semiMajorAxis, 2) * (1 - Math.pow(eccentricity, 2)));
  }

  distFocusCenter = (semiMajorAxis, eccentricity) => {
    return Math.sqrt(
      Math.pow(semiMajorAxis, 2) -
      Math.pow(this.semiMinorAxis(semiMajorAxis, eccentricity), 2)
    );
  }

  distLeftFocusEdge = (semiMajorAxis, eccentricity) => {
    return semiMajorAxis - this.distFocusCenter(semiMajorAxis, eccentricity);
  }

  distRightFocusEdge = (semiMajorAxis, eccentricity) => {
    return semiMajorAxis + this.distFocusCenter(semiMajorAxis, eccentricity);
  }

  avgDiameter = (min, max) => {
    return (parseFloat(min) + parseFloat(max)) / 2;
  }

  render () {
    const coorScaler = 100;
    const orbitScaler = 12/365;
    const strokeWidth = 2;
    const offset = strokeWidth * 10;
    const eccentricity = parseFloat(this.props.orbital_data.eccentricity);
    const semiMajorAxis = parseFloat(this.props.orbital_data.semi_major_axis);
    const semiMinorAxis = this.semiMinorAxis(semiMajorAxis, eccentricity);
    const orbitDur = parseFloat(this.props.orbital_data.orbital_period) * orbitScaler + "s";

    return (
      <div className="nea">
        <div className="orbit">
          <p>Orbital Diagram</p>
          <svg height={2.5 * semiMinorAxis * coorScaler} width="100%">
            <path
              id={this.props.id}
              stroke="lightgrey"
              fill="transparent"
              strokeWidth={strokeWidth}
              d={`M ${offset + (semiMajorAxis * coorScaler)} ${offset} a ${semiMajorAxis * coorScaler} ${semiMinorAxis * coorScaler} 0 1 0 1 0`}
            />
            {/* <ellipse
              cx={offset + (semiMajorAxis * coorScaler)}
              cy={offset + (semiMinorAxis * coorScaler)}
              rx={semiMajorAxis * coorScaler}
              ry={semiMinorAxis * coorScaler}
              style={{fill: 'transparent', stroke: 'purple', strokeWidth: strokeWidth}}
            /> */}
            {/* sun: left focus */}
            <circle
              cx={offset + (this.distLeftFocusEdge(semiMajorAxis, eccentricity) * coorScaler)}
              cy={offset + semiMinorAxis * coorScaler}
              r="4"
              fill="yellow"
            />
            {/* right focus */}
            <circle
              cx={offset + (this.distRightFocusEdge(semiMajorAxis, eccentricity) * coorScaler)}
              cy={offset + (semiMinorAxis * coorScaler)}
              r="4"
              fill="white"
            />
            <circle
              r={10 * this.avgDiameter(this.props.estimated_diameter.miles.estimated_diameter_min, this.props.estimated_diameter.miles.estimated_diameter_max) < 4 ? 4 : 10 * this.avgDiameter(this.props.estimated_diameter.miles.estimated_diameter_min, this.props.estimated_diameter.miles.estimated_diameter_max)}
              fill="purple"
            >
              <animateMotion dur={orbitDur} repeatCount="indefinite">
                <mpath xlinkHref={'#' + this.props.id}/>
              </animateMotion>
            </circle>
          </svg>
        </div>
        <ul>
          {/* <li className="detail">id: {this.props.id}</li> */}
          <li className="detail">name: {this.props.name}</li>
          {/* <li className="detail">discovery date: {this.props.discovery_date}</li> */}
          {/* <li className="detail"> Absolute Visual Magnitude: {this.props.absolute_magnitude_h}</li> */}
          {/* <li className="detail"> Estimated Diameter: */}
            {/* <p>min (ft): {this.props.estimated_diameter.feet.estimated_diameter_min}</p> */}
            {/* <p>max (ft): {this.props.estimated_diameter.feet.estimated_diameter_max}</p> */}
            {/* <p>min (miles): {this.props.estimated_diameter.miles.estimated_diameter_min}</p> */}
            {/* <p>max (miles): {this.props.estimated_diameter.miles.estimated_diameter_max}</p> */}
            {/* <p>min (m): {this.props.estimated_diameter.meters.estimated_diameter_min}</p> */}
            {/* <p>max (m): {this.props.estimated_diameter.meters.estimated_diameter_max}</p> */}
            {/* <p>min (km): {this.props.estimated_diameter.kilometers.estimated_diameter_min}</p> */}
            {/* <p>max (km): {this.props.estimated_diameter.kilometers.estimated_diameter_max}</p> */}
{/* ​​​          </li> */}
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
          <li className="detail"> <a href={this.props.links.self}>API detail link</a></li>
          {/* <li className="detail"> more info: {this.props.nasa_jpl_url}</li> */}
          <li>
            <p>Obrital Information</p>
            <ul>
              {/* <li>eccentricity: {this.props.orbital_data.eccentricity}</li> */}
              {/* <li>length of semi major axis: {this.props.orbital_data.semi_major_axis}</li> */}
              {/* <li>length of semi minor axis: {this.semiMinorAxis(this.props.orbital_data.semi_major_axis, this.props.orbital_data.eccentricity)}</li> */}
              {/* <li>distance from center to focus: {this.distFocusCenter(this.props.orbital_data.semi_major_axis, this.props.orbital_data.eccentricity)}</li> */}
              <li>inclination: {this.props.orbital_data.inclination}</li>
              {/* <li>orbital period: {this.props.orbital_data.orbital_period}</li> */}
              <li>perihelion_distance: {this.props.orbital_data.perihelion_distance}</li>
              <li>aphelion_distance: {this.props.orbital_data.aphelion_distance}</li>
              {/* <li>perihelion_time: {this.props.orbital_data.perihelion_time}</li> */}
              {/* <li>equinox: {this.props.orbital_data.equinox}</li> */}
              {/* <li>orbit class: {this.props.orbital_data.orbit_class.orbit_class_type}</li> */}
              {/* <li>orbit class range: {this.props.orbital_data.orbit_class.orbit_class_range}</li> */}
              {/* <li>orbit class description: {this.props.orbital_data.orbit_class.orbit_class_description}</li> */}
            </ul>
          </li>
        </ul>
    </div>
    )
  }
}
