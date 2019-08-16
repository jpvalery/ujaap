import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

const Glossary = () => (
  <Layout>
      <SEO title="Glossary of User Journey as a Product"/>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"content"}>
            <Sidebar />
            <div className={"post"}>
                  <div className={"title"}>
                      <h1>Glossary</h1>
                  </div>
                <dl>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                  <dt>Term</dt>
                    <dd>Definition</dd>
                </dl>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default Glossary
