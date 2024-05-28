import React from "react"
import { useEffect, useState } from 'react';
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

import User from "../components/User"
import { fetchDetails } from "../services/user"

const IndexPage: React.FC<PageProps> = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { theme } = useTheme();
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetchDetails();
        setUser(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, []);

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
            of the “Building Apps with Gatsby” documentation.
          </p>
          <p>
            For the full experience, go to
            {` `}
            <Link to="/app/profile">your profile</Link>.
          </p>
          {loading && "loading"}
          {error && "error"}
          <User data={user} />
        </View>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
