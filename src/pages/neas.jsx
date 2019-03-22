import React from "react"
import Neowise from "../containers/nasa/NeowiseContainer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Neas = () => (
  <Layout>
    <SEO title="NEA Visualization" />
    <Neowise />
  </Layout>
)

export default Neas
