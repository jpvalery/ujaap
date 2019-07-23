import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

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
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default PrinciplesPage
