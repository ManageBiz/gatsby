import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const IndexPage: React.FC<PageProps> = () => {
  const { theme } = useTheme();
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <Layout>
        <Status />
        <ThemeToggle />
        <View title="Simple Authentication Example">
          <p>
            This is a simple example of creating dynamic apps with Gatsby that
            require user authentication. It uses concepts from the
            {` `}
            <a href="https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication/">
              client-only routes section
            </a>
            {` `}
            of the “Building Apps with Gatsby” documentation.
          </p>
          <p>
            For the full experience, go to
            {` `}
            <Link to="/app/profile">your profile</Link>.
          </p>
        </View>
      </Layout>
    </div>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
