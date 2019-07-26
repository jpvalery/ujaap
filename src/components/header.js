import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/helm.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"UJaaP"}><img alt={"Logo"} src={logo}/> UJaaP</Link>
                </div>
                <div className={"top-menu-items"}>
                  <span className={"mitem"}><Link to="/what-is-ujaap">What is UJaaP?</Link></span>
                  <span className={"mitem"}><Link to="/core-principles" title={"Core Principles"}>The Core Principles</Link></span>
                  <span className={"mitem"}><Link to="/micro-campaigns" title={"Micro-campaigns"}>Micro-Campaigns</Link></span>
                  <span className={"mitem"}><Link to="/how-to-implement-ujaap" title={"How to implement?"}>How to implement?</Link></span>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
