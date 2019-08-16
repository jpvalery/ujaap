import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import {Link} from "gatsby"

const MicrocampaignsPage = () => (
  <Layout>
      <SEO title="What are Micro-Campaigns?"/>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"content"}>
            <Sidebar />
            <div className={"col-9"}>
                  <div className={"title"}>
                      <h1>Micro Campaigns</h1>
                  </div>
                Lorem ipsum

                <div className={"post-nav"}>

                        <div className={"post-prev"}>
                        <strong>Previous:</strong><br />
                        <Link to="/core-principles">Chapter I : The Core Principles</Link>
                        </div>

                        <div className={"post-next"}>
                        <strong>Next:</strong><br />
                        <Link to="/how-to-implement-ujaap">Chapter III : How to implement?</Link>
                        </div>

                </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default MicrocampaignsPage
