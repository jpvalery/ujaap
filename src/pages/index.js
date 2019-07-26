import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import featureImage from "../../static/images/illustrations/header-main.png";
import thumbnailBeyond from "../../static/images/illustrations/fogg-5.png"
import thumbnailMessage from "../../static/images/illustrations/fogg-no-messages-3.png"
import thumbnailProduct from "../../static/images/illustrations/fogg-page-under-construction.png"
import thumbnailBenefits from "../../static/images/illustrations/fogg-downloading.png"

const IndexPage = () => (
    <Layout>
        <SEO title="A Framework for Better User Journeys and Interactions"/>

        <div className={"page-header home"}>
            <h1>User Journey as a Product</h1>
            <p>Framework designed to make your life easier, your users happier,<br />and the performance of your touchpoints better</p><br />
            <img alt={"User Journey as a Product"} src={featureImage}/>
        </div>
          <svg className={"header-divider"} viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg"><path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z" fill="#FFFFFF"></path></svg>
        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"See beyond"} src={thumbnailBeyond}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>See beyond a list of messages</h2>
                                <p>Top-down campaigns with a list of messages are a thing from the past.<br />Visualize your user journeys for what they are: a 3D web.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Right messages at the right time</h2>
                                <p>No longer guess what is the appropriate time or delay between touchpoints,<br />get the right message in the right hands at the right time.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Right message"} src={thumbnailMessage}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Product vision"} src={thumbnailProduct}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Product-based vision</h2>
                                <p>Build features or improvements, and ship them as a product.<br />Not just tasks and new messages and whatnot.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Reap the benefits</h2>
                                <p>Better attribution, better measures, better results.<br />Easier workflow, faster deployment, happier users.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Benefits"} src={thumbnailBenefits}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Are you ready to take the next step?</h2>
                    <p>Start implementing with UJaaP and get to the next level.</p>
                </div>

                <div className={"button"}>
                    <a href="https://ujaap.com/what-is-ujaap" title={"What is UJaaP?"}>Start learning</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
