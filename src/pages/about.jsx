import React from "react"
import Timeline from "../components/Timeline"

import Layout from "../components/layout"
import SEO from "../components/seo"

const timelineEvents = [
    {
        date: "2016",
        content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."
    },
    {
        date: "2015",
        content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."
    },
    {
        date: "2014",
        content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."
    },
    {
        date: "2013",
        content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."
    }
]

const About = () => (
  <Layout>
    <SEO title="About" />
    <Timeline events={timelineEvents} />
  </Layout>
)

export default About
