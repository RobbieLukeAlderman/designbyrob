import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const PortPage = () => (
  <Layout>
    <SEO title="EXPLORE WORK BY ROB" />
    <h1 className="align">My<span className="anim">Work</span></h1>
    <p className="mid">Welcome to the front end of <b><a className="underline" href="/port">the archives</a></b>. This is where I keep all of my most favourable work. Feel free to look around and expand the projects to see the full brief!</p>

    <a href="https://www.behance.net/gallery/93662449/GHST-WEB-DESIGN" alt="Visit my behance gallery for the full project">
      <div className="myLinkImage">
      </div>
    </a>

  </Layout>

)

export default PortPage
