import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/illustrations/fogg-waiting-2.png";
import thumbnailBeyond from "../../static/images/illustrations/fogg-5.png"
import thumbnailMessage from "../../static/images/illustrations/fogg-no-messages-3.png"
import thumbnailProduct from "../../static/images/illustrations/fogg-page-under-construction.png"
import thumbnailBenefits from "../../static/images/illustrations/fogg-downloading.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="A Framework for Better User Journeys and Interactions"/>

        <div className={"page-header home"}>
            <h1>A Framework for Better User Journeys and Interactions</h1>
            <p>Designed to make your life easier and increase the performance of your touchpoints</p>
            <img alt={"User Journey as a Product"} src={featureImage}/>
        </div>

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
                    <Link to="/how-to-implement-ujaap" title={"How to implement?"}>How to implement?</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
