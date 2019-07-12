/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>UJaaP</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About Us"}>About</Link></li>
                                        <li><Link to="/what-is-ujaap" title={"What is UJaaP?"}>What is UJaaP?</Link></li>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-4"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>The Framework</h4>
                                    <ul>
                                        <li><Link to="/core-principles" title={"Core Principles"}>Core Principles</Link></li>
                                        <li><Link to="/micro-campaigns" title={"Micro-campaigns"}>Micro-campaigns</Link></li>
                                        <li><Link to="/how-to-implement-ujaap" title={"How to implement?"}>How to implement?</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-4"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Legal</h4>
                                    <ul>
                                        <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                        <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                        <li><Link to="/credits-licenses" title={"Credits & Licenses"}>Credits & Licenses</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-1"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://twitter.com/jpvalery" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a><br />
                                    <a href="https://linkedin.com/in/jpvalery" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a><br />
                                    <a href="https://github.com/jpvalery" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://ujaap.com" title={"UJaaP"}>UJaaP.com</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
