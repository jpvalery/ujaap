import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Get in touch</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>We're friendly and happy to help you figure out our framework.<br /><br />If you need our help, have questions about how to use the UJaaP framework, or would like to hire us to implement it at your company; please do not hesitate to contact us.</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Plain email is the best way to contact us.</p>
                            <a href="mailto:contact@ujaap.com?Subject=Contact%20form%20from%20UJaaP.com" rel="noopener noreferrer"><h2>contact@ujaap.com</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
