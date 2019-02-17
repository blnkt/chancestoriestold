import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Persons from "../containers/sw/PersonsContainer"


const StarWars = () => (
  <Layout>
    <SEO title="Star Wars People" />
    <h1>Star Wars People</h1>
    <Persons />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StarWars
