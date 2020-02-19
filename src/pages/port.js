import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="EXPLORE WORK BY ROB" />
    <h1 className="align">My<span className="anim">Work</span></h1>
    <p className="mid">Welcome to the front end of <b><a className="underline" href="/">the archives</a></b>. This is where I keep all of my most favourable work. Feel free to look around and expand the projects to see the full brief!</p>

    <h1 style={{ marginTop: `100px`, fontSize: `120px`, cursor: `pointer` }}>COMING SOON..</h1>
    <h4 style={{ textAlign: `center`, fontWeight: 200, fontSize: `15px` }}>very sorry</h4>
  </Layout>

)

export default PortPage
