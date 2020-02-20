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

    <div className="bioBox" style={{ marginTop: `80px`}}>
      <h4 className="bioHeader">
        <span className="bioHighlight">
        Robbie L. Alderman
        </span>
      </h4>
      <p className="bioAbout">
        01 05 1998
          &nbsp;
        -
          &nbsp;
        WESTON-SUPER-MARE
      </p>
      <p className="bioBodyText">
        I am a freelance graphic designer, web designer, and web developer. I focus on the complicated bits for you. For 6 years I have been sticking my teeth into all things design, even bagging myself a few clients along the way!
      </p>
      <p className="bioBodyText">
        Join my growing list of happy clients today by&nbsp;
        <a className="underline" href="mailto:RobbieLAlderman@gmail.com?Subject=Website%20Email">
        <span>
          contacting me.
        </span>
        </a>
      </p>

    </div>
  </Layout>
)

export default IndexPage
