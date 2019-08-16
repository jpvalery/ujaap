import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import {Link} from "gatsby"

const PrinciplesPage = () => (
  <Layout>
      <SEO title="Core Principles of User Journey as a Product"/>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"content"}>
            <Sidebar />
            <div className={"col-9"}>
                  <div className={"title"}>
                      <h1>Core Principles of User Journey as a Product</h1>
                  </div>
                  Lorem ipsum

        <div className={"post-nav"}>

                <div className={"post-prev"}>
                <strong>Previous:</strong><br />
                <Link to="/what-is-ujaap">Intro : What is UJaaP?</Link>
                </div>

                <div className={"post-next"}>
                <strong>Next:</strong><br />
                <Link to="/micro-campaigns">Chapter II : Micro-Campaigns</Link>
                </div>

        </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default PrinciplesPage
