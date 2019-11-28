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
                  <h2 id="symptoms-of-failure">Symptoms of failure</h2>
                  <p>You can quickly identify if it’s not a micro campaign if you have the following symptoms.</p>
                  <h3 id="you-have-more-than-5-touchpoints">You have more than 5 touchpoints</h3>
                  <p>While it might makes sense in your campaign builder, the reality is that there will be a zillion stimuli inbetween each of your touchpoints.</p>
                  <p>As a user, how can I keep track and sense of that? It’s too big of an ask.</p>
                  <p>There’s no way that a single goal can’t be communicated in less than 5 messages. If you think otherwise, then the next points will probably enlighten you and change your mind.</p>
                  <h3 id="youre-trying-to-get-your-users-to-accomplish-multiple-goals">You’re trying to get your users to accomplish multiple goals</h3>
                  <p>People are busy. They have priorities outside of your product.</p>
                  <p>If you respect this, you can’t ask them to accomplish more than one simple thing at once.</p>
                  <p>As a user, I don’t have time to figure out <em>what’s in it for me?</em> if I have to take 3 actions.</p>
                  <p>You should be able to show me immediate value with one single action.</p>
                  <p>Not only will this improve conversion funnels, but it will show mindfulness towards your users.</p>
                  <h3 id="youre-basing-your-campaign-on-touchpoints-rather-than-defined-goal">You’re basing your campaign on touchpoints rather than defined goal</h3>
                  <p>By far this has been the biggest mistake I’ve seen in my career. I can’t even count the number of times people have built their campaigns around X number of emails rather than a goal.</p>
                  <p>A classic example is a time-limited sale campaign. How often are those designed as</p>
                  <p><strong>" <em>we’ll do an announcement, then a reminder, then a last chance with a bigger discount</em> "</strong></p>
                  <p>without even taking into account the benefit for the end-user or any form of goal beyond <strong>make cash™</strong>…</p>
                  <p>How can this perform when there’s no clear goal or value provided?</p>
                  <h2 id="signs-of-success">Signs of success</h2>
                  <h3 id="you-identified-a-goal-and-benefit-from-the-start">You identified a goal and benefit from the start</h3>
                  <p>If you know where you’re going and what’s in it for the user, then everything will trickle-down from here.</p>
                  <p>You’ll know what to offer, to whom, and why they should care.</p>
                  <h3 id="your-touchpoints-are-designed-to-trigger-at-the-right-time-and-right-place">Your touchpoints are designed to trigger at the right time and right place</h3>
                  <p>You’re not just mindlessly sending an email every X hour, but you’re building an experience or a journey for your user to embark on at a time and place that will either make sense or be convenient for them.</p>
                  <h3 id="the-scope-is-defined-in-terms-of-entry-content-and-exit">The scope is defined in terms of entry, content, and exit</h3>
                  <p>Armed with these, you know exactly when people should get in, what they’ll receive and why, and how they will exit the campaign (either by reaching a goal or going through all the steps).</p>

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
