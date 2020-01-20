import React from "react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
    <SEO title="About the author"/>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"content"}>
        <Sidebar />
        <div className={"col-9"}>
              <div className={"title"}>
                    <h1>About the author</h1>
              </div>
                  <a href={"https://jpvalery.me"} target={"_blank"} rel={"noopener noreferrer"}>Jp Valery</a> helps digital products nurture and grow their audiences.<br />
                  <br />
                  He is currently LANDR's Growth Architect where he acts as a technical lead for the Customer Experience & Monetization team. He's accountable for the systems and the strategies that LANDR uses to engage with its 3M users around the globe.<br />
                  He is also in charge of developing, executing, and optimizing growth strategies.<br />
                  <br />
                  His previous work experiences include Gameloft where he developed email marketing and community engagement programs.<br />
                  <br />
                  He was inspired by Basecamp's Shape-Up to share this framework that led him and the rest of the team to rethink their approach; which yielded strong improvements in both engagement metrics and monetization results.<br />
                  This website is currently in beta and all feedback is welcome. 
              </div>
          </div>
        </div>
      </div>
    </Layout>
)

export default AboutPage
