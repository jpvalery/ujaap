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
                    <h2 id="how-it-all-started"> How it all started</h2>
                    <p>When I joined LANDR in August 2018, one of my first missions was to map out all the communications and campaigns that were being sent to our users.</p>
                    <p>We were the third or fourth iteration of the Customer Success team and nobody knew the current patchwork in-and-out. There were dozens of campaigns with unclear rules and targets, and even more unclear logic.</p>
                    <p>It took me almost a full week to review all messages one by one. I checked their copy, their triggers, their timeline, their performances… and mapped it all out with AirTable to allow my team and other stakeholders to understand what was going on.</p>
                    <p>After that, the first project was to rebuild all that from scratch to make sure it was making sense and not overlapping. At that time, our Head of Customer Success’s vision was to have a handful of campaigns for each major part of our funnel. We’d have one massive Onboarding campaign, one Product Discovery campaign, a Cross-Sell one, an Upsell one, and so forth.</p>
                    <p>This was mostly meant to avoid any overlap between the messages and campaigns and seemed the best way to clean things up and have a simpler workflow while dealing with the limitations of Intercom that we were using at that time.</p>
                    <p>And all of that made sense at that time. The tree view of messages following a top-down logic seemed like the best way to approach it based on the tools at our disposal and our Head’s vision. Truth be told, this seems to be shared by other orgs as it was pitched as a good practice by a couple of speakers at Customer Success Summit 2019.</p>
                    <p>Nevertheless, it felt at that time that we could be using another approach. It took multiple months to formulate that idea and shape it into what we call today <strong>User Journey as a Product</strong>.</p>
                    <h2 id="the-ujaap-manifesto">The UJaaP Manifesto</h2>
                    <p>This framework is meant to be flexible, scalable, and meaningful. While opinionated, it’s based on what should be the gold standard for user journeys: the right message at the right time in the right place.</p>

              </div>
            </div>
          </div>
        </div>
    </Layout>
)

export default WhatisPage
