import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tracker from "../containers/iss/TrackerContainer"


const IssTracker = () => (
  <Layout>
    <SEO title="ISS Tracker" />
    <h1>ISS Tracker</h1>
    <Tracker />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IssTracker
