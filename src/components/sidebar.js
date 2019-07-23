import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"


const Sidebar = () => (
<div className={"col-3 sidebar"}>
  <ol>
    <li>Chapter 1</li>
    <li>Chapter 2</li>
  </ol>
</div>
)

export default Sidebar
