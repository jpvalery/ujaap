import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import {Link} from "gatsby"

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
                    <h2 id="how-it-all-started">How it all started</h2>
                    <p>When I joined LANDR in August 2018, one of my first missions was to map out all the communications and campaigns that were being sent to our users.</p>
                    <p>We were the third or fourth iteration of the Customer Success team and nobody knew the current patchwork in-and-out. There were dozens of campaigns with unclear rules and targets, and even more unclear logic.</p>
                    <p>It took me almost a full week to review all messages one by one. I checked their copy, their triggers, their timeline, their performances… and mapped it all out with AirTable to allow my team and other stakeholders to understand what was going on.</p>
                    <p>After that, the first project was to rebuild all that from scratch to make sure it was making sense and not overlapping. At that time, our Head of Customer Success’s vision was to have a handful of campaigns for each major part of our funnel. We’d have one massive Onboarding campaign, one Product Discovery campaign, a Cross-Sell one, an Upsell one, and so forth.</p>
                    <p>This was mostly meant to avoid any overlap between the messages and campaigns and seemed the best way to clean things up and have a simpler workflow while dealing with the limitations of Intercom that we were using at that time.</p>
                    <p>And all of that made sense at that time. The tree view of messages following a top-down logic seemed like the best way to approach it based on the tools at our disposal and our Head’s vision. Truth be told, this seems to be shared by other orgs as it was pitched as a good practice by a couple of speakers at Customer Success Summit 2019.</p>
                    <p>Nevertheless, it felt at that time that we could be using another approach. It took multiple months to formulate that idea and shape it into what we call today <strong>User Journey as a Product</strong>.</p>
                    <h2 id="the-problems-faced-by-almost-all-customer-teams">The problems faced by almost all customer teams</h2>
                    <p>Whether it is Success, Growth, Experience or <em>whatchacallit</em>, we’ve seen countless reports of the customer teams facing the same issues again and again.</p>
                    <p>The messaging campaigns are defined by the stage of the funnel the users are in or by business goals, rather than the user journey. This doesn’t fool anyone anymore and despite everyone’s best efforts it feels less and less human.</p>
                    <p>The campaigns are made based on the tools and platforms used by the team, rather than the reality of the users. This feels like an original sin as teams are compromising their visions and goals from the get go to fit to their tool of choice.</p>
                    <p>This in turn generates subsequent problems to tackle: the relevance and timeliness of the messages is often subpar, the amount of messages sent or to internally handle quickly becomes overwhelming for everyone, the onboarding almost never sets the foundation for further onboardings in the user journey.</p>
                    <h3 id="the-consequences-are-dire">The consequences are dire</h3>
                    <p>It’s almost crazy but these models don’t benefit anyone. The users are annoyed, the customer teams are overwhelmed and feel they’re doing something wrong, the results of the campaigns are far from optimal, and ultimately the brand or product is ignored by its users.</p>
                    <h3 id="but-this-opens-a-lot-of-opportunities">But this opens a lot of opportunities</h3>
                    <p>When you reconsider the approach and the “<em>everybody-does-that</em>” mindset, and when you accept the problems and their consequences, you sow the seeds for having a virtuous circle.</p>
                    <p>Indeed, by rethinking the approach and goals, you open up the door to improve your user experience, which will in turn improve your engagement and retention, which will improve your user experience, and so on.</p>
                    <p>You also free yourself from the constraints of your messaging tool, whatever it is, and craft a meaningful and platform-agnostic strategy.</p>
                    <p>And this is how the <strong>User Journey as a Product</strong> framework was born in the midst of a transition of a content delivery platform and the migration of campaigns built to address a 2.4M userbase.</p>
                    <h2 id="the-ujaap-manifesto">The UJaaP Manifesto</h2>
                    <p>This framework is meant to be flexible, scalable, and meaningful. While opinionated, it’s based on what should be the gold standard for user journeys: <em>the right message at the right time in the right place.</em></p>
                    <p>The output shouldn’t be defining the mission. The ultimate mission of a Customer Success or Growth Team is not about just sending zillions of emails but to improve their users’ journey and use of their product(s).</p>
                    <p>A user should never feel like a message was meaningless. The customer team should be able to identify meaningful touchpoints in the user journeys, based on data or experiments, and trigger micro-campaigns to accompany them.</p>
                    <p>User journeys are living and breathing products. This is not a “<em>set if and forget it</em>” mindset but one inspired by iterative agile product development. Scope changes as either new features (such as new channels or new campaigns) or improvements (fine tuning campaigns, testing, fixing issues or poor performances); and combine them in sprints.</p>
                    <h2 id="the-benefits-of-the-ujaap-framework">The benefits of the UJaaP framework</h2>
                    <p>This framework brings a lot of benefits that can be seen very quickly after implementation:</p>
                    <ul>
                    <li>By improving the timeliness and relevance of your campaigns, you’ll improve their performances.</li>
                    <li>You increase your velocity so you can ship more campaigns, faster.</li>
                    <li>You go beyond your messaging platform limitations and refuse to be bound by them.</li>
                    <li>You have a better understanding of your performance and the impact it has on your users and on product use.</li>
                    </ul>

                    <div className={"post-next"}>
                    <strong>Next:</strong><br />
                    <Link to="/core-principles">Chapter I : The Core Principles</Link>
                    </div>

              </div>
            </div>
          </div>
        </div>
    </Layout>
)

export default WhatisPage
