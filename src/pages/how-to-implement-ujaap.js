import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import {Link} from "gatsby"

const ImplementPage = () => (
  <Layout>
      <SEO title="How to implement User Journey as a Product?"/>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"content"}>
            <Sidebar />
            <div className={"post"}>
                  <div className={"title"}>
                      <h1>How to implement User Journey as a Product?</h1>
                  </div>
                  <h2 id="rebuild-your-journey-mapping">Rebuild your journey mapping</h2>
                  <h2 id="get-the-right-tools">Get the right tools</h2>
                  <h2 id="iterate-and-improve">Iterate and improve</h2>


                <div className={"post-nav"}>

                        <div className={"post-prev"}>
                        <strong>Previous:</strong><br />
                        <Link to="/core-principles">Chapter II : Micro-Campaigns</Link>
                        </div>

                        <div className={"post-next"}>
                        <strong>Next:</strong><br />
                        <Link to="/glossary">Annex - Glossary</Link>
                        </div>

                </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default ImplementPage
