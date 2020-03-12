import React from "react"
import ReCAPTCHA from "react-google-recaptcha";

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="pattern"></div>
    <SEO title="Contact Me!" />
    <h1 className="align">
        Contact
      <span className="anim">
        Me
      </span>
    </h1>
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

    <br/>
    <form className="myForm" name='JSX Form' method='POST' data-netlify='true' data-netlify-recaptcha='true'>
      <input type='hidden' name='form-name' value='JSX Form' />
      <label></label>
      <input type='email' name='email' placeholder="Your Email"/>
      <br />
      <label></label>
      <textarea name='message' placeholder="Your Message..."/>
      <br />
      <div style={{
        height: `100px`,
        width: `320px`,
        margin: `auto`,
        marginBottom: `15px`,
        padding: `10px`,
      }}
      >
        <ReCAPTCHA
        sitekey="6LfDz-AUAAAAAHW61aoBtGepuWkW_uH_iQIgDMdM"/>
      </div>
      <button type='submit'>Submit</button>
    </form>


  </Layout>
)

export default IndexPage
