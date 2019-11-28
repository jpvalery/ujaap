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
            <div className={"post"}>
                  <div className={"title"}>
                      <h1>Micro Campaigns</h1>
                  </div>
                  <p>The development of visual builders and complex campaign management system eventually made obvious issues with such tools. More often than not, the easiness with which you can build a complex map of message makes you forget the end-user experience. You end up with a cool looking web of messages and conditions which ends up being a hell to maintain and they don’t always make sense for a user. <strong>Nobody wins, nobody’s happy.</strong></p>
                  <h2 id="why-micro">Why “micro”?</h2>
                  <p>Based on the observation above, UJaaP was designed to prohibit such constructs. Following the Core Principles previously edicted, the campaigns can only take a certain shape and size. <strong>A short succession of touchpoints with a clear and focused goal.</strong></p>
                  <h2 id="dos-donts">Do’s &amp; Don’t’s</h2>
                  <h3 id="its-not-a-micro-campaign-if">It’s not a micro campaign if…</h3>
                  <ul>
                  <li>You have more than 5 touchpoints</li>
                  <li>You’re trying to get your users to accomplish multiple goals</li>
                  <li>You’re basing your campaign on touchpoints rather than defined goal</li>
                  </ul>
                  <h3 id="its-a-micro-campaign-if">It’s a micro campaign if…</h3>
                  <ul>
                  <li>You identified a goal and benefit from the start</li>
                  <li>Your touchpoints are designed to trigger at the right time and right place</li>
                  <li>The scope is defined in terms of entry, content, and exit</li>
                  </ul>


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
