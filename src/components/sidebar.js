import React from "react"
import {Link} from "gatsby"

const Sidebar = () => (
<div className={"sidebar sticky"}>

<div className={"part"}>
  <p className={"chapter-number"}>Introduction</p>
  <Link to="/what-is-ujaap"><h3 className={"chapter-title"}>What is UJaaP?</h3></Link>
      <ul className={"chapter"}>
          <li className={"chapter-section"}><Link to="/what-is-ujaap#how-it-all-started">How it all started</Link></li>
          <li className={"chapter-section"}><Link to="/what-is-ujaap#the-problems-faced-by-almost-all-customer-teams">Problems, Consequences, and Opportunities</Link></li>
          <li className={"chapter-section"}><Link to="/what-is-ujaap#the-ujaap-manifesto">The UJaaP Manifesto</Link></li>
      </ul>
</div>

<div className={"part"}>
  <p className={"chapter-number"}>Chapter I</p>
  <Link to="/core-principles" title={"Core Principles"}><h3 className={"chapter-title"}>The Core Principles</h3></Link>
      <ul className={"chapter"}>
          <li className={"chapter-section"}><Link to="/">Section 1</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 2</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 3</Link></li>
      </ul>
</div>

<div className={"part"}>
  <p className={"chapter-number"}>Chapter II</p>
  <Link to="/micro-campaigns" title={"Micro-campaigns"}><h3 className={"chapter-title"}>Micro-Campaigns</h3></Link>
      <ul className={"chapter"}>
          <li className={"chapter-section"}><Link to="/">Section 1</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 2</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 3</Link></li>
      </ul>
</div>

<div className={"part"}>
  <p className={"chapter-number"}>Chapter III</p>
  <Link to="/how-to-implement-ujaap" title={"How to implement?"}><h3 className={"chapter-title"}>How to implement?</h3></Link>
      <ul className={"chapter"}>
          <li className={"chapter-section"}><Link to="/">Section 1</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 2</Link></li>
          <li className={"chapter-section"}><Link to="/">Section 3</Link></li>
      </ul>
</div>

<div className={"part"}>
  <p className={"chapter-number"}>Annex</p>
  <Link to="/glossary" title={"Glossary"}><h4 className={"annex"}>Glossary</h4></Link>
  <Link to="/about" title={"About the author"}><h4 className={"annex"}>About</h4></Link>
</div>

</div>
)

export default Sidebar
