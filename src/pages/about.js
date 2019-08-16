import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
    <SEO title="About the method and the author"/>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"content"}>
        <Sidebar />
        <div className={"col-9"}>
              <div className={"title"}>
                    <h1>About the method and the author</h1>
                </div>
              Lorem ipsum
              </div>
          </div>
        </div>
      </div>
    </Layout>
)

export default AboutPage
