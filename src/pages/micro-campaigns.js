import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

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
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default MicrocampaignsPage
