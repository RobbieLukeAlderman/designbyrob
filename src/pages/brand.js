import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="Branding by Rob" />
    <h1 className="align">Branding<span className="anim">Projects</span></h1>
    <p className="mid">
      Take a look below at my close work with businesses and their
      <b><a className="underline" href="/port"> image </a></b>
      .
    </p>

    <div className="iconBox" style={{ marginTop: `100px` }}>Branding Proj 1</div>
    <div className="iconBox">Branding Proj 2</div>
    <div className="iconBox">Branding Proj 3</div>
    <div className="iconBox">Branding Proj 4</div>

  </Layout>

)

export default PortPage
