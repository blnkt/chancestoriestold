import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Persons from "../../components/sw/Persons"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        swapi {
          allPersons(first:20) {
            id
            name
            birthYear
            homeworld {
              id
              name
            }
            species {
              id
              name
              language
              classification
              averageLifespan
            }
            films {
              id
              title
            }
          }
        }
      }
    `}

    render={(data) => (
      <Persons data={data.swapi.allPersons} {...props} />
    )}
  />
)
