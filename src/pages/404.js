import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailNotfound from "../../static/images/illustrations/fogg-page-not-found-1.png";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <div className={"container"}>
            <h1>Uh... 404</h1>
            <img alt={"Not Found!"} src={thumbnailNotfound}/>
            <p>Sorry about that. Looks like this page isn't here anymore (or wasn't even here in the first place).</p>
            <div className={"button"}>
                <a href="https://ujaap.com">Return to home</a>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
