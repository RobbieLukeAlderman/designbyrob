import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="Illustrations and Passion Projects by Rob" />
    <h1 className="align">Illustration<span className="anim">Projects</span></h1>
    <p className="mid">
      These projects feature drawing, passion 
      <b><a className="underline" href="/port"> projects, </a></b>
    </p>
    <p>
      and illustration projects
    </p>
    <div className="iconBox" style={{ marginTop: `100px` }}>Art Proj 1</div>
    <div className="iconBox">Art Proj 2</div>
    <div className="iconBox">Art Proj 3</div>
    <div className="iconBox">Art Proj 4</div>

  </Layout>

)

export default PortPage
