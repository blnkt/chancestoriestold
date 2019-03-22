import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Tracker from "../../components/iss/Tracker"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        nasaiss {
          iss_position {
            longitude
            latitude
          }
        },
        nasaastros {
          number
          people {
            name
            craft
          }
        }
      }
    `}

    render={(data) => (
      <Tracker data={data} {...props} />
    )}
  />
)
