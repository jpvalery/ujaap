import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import {Link} from "gatsby"

const PrinciplesPage = () => (
  <Layout>
      <SEO title="Core Principles of User Journey as a Product"/>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"content"}>
            <Sidebar />
            <div className={"post"}>
                  <div className={"title"}>
                      <h1>Core Principles of User Journey as a Product</h1>
                  </div>
                  <p>Although this framework is meant to be flexible, scalable, and meaningful, it is pretty opinionated when it comes to its core principles.</p>
                  <h2 id="the-right-message">The right message</h2>
                  <p>Have you ever received an email from a service or product you’re using that felt irrelevant to you? Did that make you somehow feel like you were just another cow to milk?</p>
                  <p><strong>What is the right message?</strong> The right message is the one that answers three important questions:
                  <ul className={"list-content"}>
                    <li><em>why am I getting this?</em></li>
                    <li><em>what’s in it for me?</em></li>
                    <li><em>how can I get it?</em></li>
                  </ul>
                  </p>
                  <h2 id="the-right-time">The right time</h2>
                  <p>The right time is often tied to product/service/feature use and activity; rather than a wild guess about what would be the optimal time.</p>
                  <p>You should leverage behavioral data or events to trigger your micro-campaigns</p>
                  <h2 id="the-right-place">The right place</h2>
                  <p>The right place is always where it’s most relevant and natural for your user. It might sound obvious but sending an email while an user is using your app/product/service might do more harm than good as it takes them away from what they were doing.</p>
                  <p>Combined together, a lot of leaks like that can negatively impact your user experience and engagement.</p>
                  <h2 id="data-driven">Data-driven</h2>
                  <p>Being data-driven means a lot of things. It’s about letting your ego go, accepting failures like success, adopting an iterative mindset, and leveraging that data to shape and inform your decisions.</p>
                  <h2 id="ouput-mission">Ouput ≠ Mission</h2>
                  <p>In a world of KPIs, OKRs, and other acronyms it’s easy to lose your focus. Creating messages is the output, not the mission.</p>
                  <p>Your focus should be on improving your users’ journeys. The Micro-Campaigns that you will build are just your output.</p>
                  <h2 id="living-products">Living products</h2>
                  <p>User journeys are living and breathing products. This is not a “<em>set if and forget it</em>” mindset but one inspired by iterative agile product development. Scope changes as either new features (such as new channels or new campaigns) or improvements (fine tuning campaigns, testing, fixing issues or poor performances); and combine them in sprints.</p>


        <div className={"post-nav"}>

                <div className={"post-prev"}>
                <strong>Previous:</strong><br />
                <Link to="/what-is-ujaap">Intro : What is UJaaP?</Link>
                </div>

                <div className={"post-next"}>
                <strong>Next:</strong><br />
                <Link to="/micro-campaigns">Chapter II : Micro-Campaigns</Link>
                </div>

        </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default PrinciplesPage
