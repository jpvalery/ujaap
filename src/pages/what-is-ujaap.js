import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

const WhatisPage = () => (
    <Layout>
        <SEO title="What is User Journey as a Product?"/>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"content"}>
              <Sidebar />
              <div className={"col-9"}>
                    <div className={"title"}>
                        <h1>What is UJaaP?</h1>
                    </div>
                  Lorem ipsum
              </div>
            </div>
          </div>
        </div>
    </Layout>
)

export default WhatisPage
