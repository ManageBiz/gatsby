import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles.
import "./global.css"
import { main } from "./main.module.css"

const Layout = ({ children }:any) => (
  <div>
    <Helmet title="Simple Authentication With Gatsby" />
    <Header />
    <main className={main}>{children}</main>
  </div>
)

export default Layout