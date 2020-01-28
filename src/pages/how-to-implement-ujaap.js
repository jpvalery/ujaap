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
                  <p>It’s often easier to start from scratch than to readapt what you already have. You also free yourself from any bias or tunnel vision that might be residual from the way you used to approach the engagement campaigns.</p>
                  <p>By now you must be thinking “<em>You’re crazy. It’s going to take ages. I don’t have time to redo everything</em>”.</p>
                  <p>Yet, this is how you’ll be able to fully leverage everything we described so far.</p>
                  <p>It’s definitely not a single-day project; but it’s not a 12 months one either.</p>
                  <h2 id="get-the-right-tools">Get the right tools</h2>
                  <p>I personally dabbled with my fair share of tools and platforms. And nothing comes close of the power and flexibility of <a href="https://customer.io">Customer.io</a>. If we chatted about marketing automation in the last year or so, I probably annoyed you with my praises for this product.</p>
                  <p>My preferred features are Liquid which allows personalization and conditional formatting beyond what most of the competition can do, the scalability and reliability of the product, the ability to create and update user properties directly in a campaign.</p>
                  <p>I don’t get any referral fee, equity, or anything out of this–I just genuinely love this tool.</p>
                  <p>When it comes to mapping campaigns, if you don’t have a whiteboard at hand, I would suggest taking a look at <a href="https://miro.com/">Miro (formerly RealTimeBoard)</a>.</p>
                  <h2 id="iterate-and-improve">Iterate and improve</h2>
                  <p>It goes without saying that this is a continuous cycle. The same way product and development moved from big milestone releases and nothing in between, customer engagement should also grow past shipping monolithic campaign and into an iterative cycle.</p>
                  <p>Relentlessly test content, channels, timelines, and ultimately find what yield the best performance for you.</p>
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
