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
                  <dt>Transactional Email</dt>
                    <dd>One-to-one emails that contain information that completes a transaction or process the recipient has started with you.</dd>
                  <dt>Conversational Email</dt>
                    <dd>One-to-one emails that contain information designed to nudge the recipient into taking an action with a concrete benefit for them.</dd>
                  <dt>Promotional Email</dt>
                    <dd>One-to-many emails sent about a promotion or an offer</dd>
                  <dt>Inapp</dt>
                    <dd>Also known as inwebs, popups, layovers, modals, hellobars, inbrowsers... Message displayed on the website of your product during its use by a user.</dd>
                  <dt>Trigger</dt>
                    <dd>Event or set of condition that justifies the sending of a message.</dd>
                  <dt>Touchpoints</dt>
                    <dd>Message sent on a channel to interact with the user.</dd>
                  <dt>User Journey(s)</dt>
                    <dd>Ensemble of paths a user can take with your product. Range from micro (for instance using a feature) to macro (for instance the lifetime use of your product)</dd>
                </dl>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default Glossary
