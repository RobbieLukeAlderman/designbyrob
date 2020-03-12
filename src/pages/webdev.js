import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="Web Dev Projects by Rob" />
    <h1 className="align">Web Development<span className="anim">Projects</span></h1>
    <p className="mid">
      I took an interest in web design since my first college class, from there I have continued 
      <b><a className="underline" href="/port"> creating </a></b>
      and learning as much as possible! Below you will see my web design projects.
    </p>

    <div className="iconBox" style={{ marginTop: `100px` }}>Web Dev Proj 1</div>
    <div className="iconBox">Web Dev Proj 2</div>
    <div className="iconBox">Web Dev Proj 3</div>
    <div className="iconBox">Web Dev Proj 4</div>

  </Layout>

)

export default PortPage
