import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CreditsPage = () => (
    <Layout>
        <SEO title="Credits & Licenses"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Credits & Licenses</h1>
                </div>
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="CreativeCommonsLicense" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"/></a><br />
                User Journey as a Product by Jp Valery is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
                <br />
                The code of the website is available under the MIT License on <a href="https://github.com/jpvalery/ujaap" rel="noopener noreferrer" targer="_blank">Github</a>.<br />
                <br />
                The illustrations are by Ouch.pics and available on <a href="https://icons8.com" rel="noopener noreferrer" targer="_blank">icons8</a>.
            </div>
        </div>
    </Layout>
)

export default CreditsPage
