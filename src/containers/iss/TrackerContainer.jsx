import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Tracker from "../../components/iss/Tracker"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        isslocation {
          iss_position {
            longitude
            latitude
          }
        },
        issastros {
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
