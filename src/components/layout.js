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
            <div className={"divider"}>
              <svg viewBox="0 0 1920 250" xmlns="http://www.w3.org/2000/svg"><path d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239" fill="#D8DEE9"></path><path d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z" fill="#E5E9F0"></path><path d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z" fill="#ECEFF4"></path></svg>
              </div>
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
                                    <a href="https://twitter.com/jpvalery" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                    <a href="https://linkedin.com/in/jpvalery" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
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
