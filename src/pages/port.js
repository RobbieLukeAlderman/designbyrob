import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="EXPLORE WORK BY ROB" />
    <h1 className="align">My<span className="anim">Work</span></h1>
    <p className="mid">Welcome to the front end of <b><a className="underline" href="/">the archives</a></b>. This is where I keep all of my most favourable work. Feel free to look around and expand the projects to see the full brief!</p>

    <p style={{ fontSize: `14px`, opacity: 0.4, marginTop: `30px` }}>
      projects coming soon
    </p>

    <p style={{ marginTop: `100px`, opacity: 0.4 }}>
      div className="previewPane" /div
      to be added soon oops...
    </p>

    <p style={{ marginTop: `20px`, opacity: 1, fontSize: `15  px` }}>
      commenting in gatsby sucks
    </p>

  </Layout>

)

export default PortPage
