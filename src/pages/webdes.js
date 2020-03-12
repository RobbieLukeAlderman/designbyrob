import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="Web Design Projects by Rob" />
    <h1 className="align">Web Design<span className="anim">Projects</span></h1>
    <p className="mid">
      This is where I hide all of my web design 
      <b><a className="underline" href="/port"> projects</a></b>
      . Take a pick of the below projects to view the full brief.
    </p>

    <div className="iconBox" style={{ marginTop: `100px` }}>Web Des Proj 1</div>
    <div className="iconBox">Web Des Proj 2</div>
    <div className="iconBox">Web Des Proj 3</div>
    <div className="iconBox">Web Des Proj 4</div>

  </Layout>

)

export default PortPage
