import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="pattern"></div>
    <SEO title="home" />
    <h1 className="align">Hello, I'm <span className="anim"> Rob </span></h1>
    <p className="brief">Web Developer / Designer /<span className="overlight"><a href="mailto:RobbieLAlderman@gmail.com" alt="Click here to contact me"> 愛 - 設計 </a></span></p>
    <p className="contact">
      <span className="dark">
        email:
      </span>
      <a className="underline" href="mailto:RobbieLAlderman@gmail.com?Subject=Website%20Email">
        robbielalderman@gmail.com
      </a>
        &nbsp; &nbsp; &nbsp;
      <span className="dark">
        twitter:
      </span>
      <a className="underline" href="https://twitter.com/design_by_rob">
        @design_by_rob
      </a>
        &nbsp; &nbsp; &nbsp;
      <span className="dark">
        instagram:
      </span>
      <a className="underline" href="https://www.instagram.com/designby.rob/">
        @designby.Rob
      </a>
      &nbsp; &nbsp; &nbsp;
    <span className="dark">
      adobe:
    </span>
    <a className="underline" href="https://www.behance.net/robbbb">
      behance.net/robbbb
    </a>
    </p>

  </Layout>
)

export default IndexPage
