import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const Details = () => {
  const { name, legalName, email } = getCurrentUser()
  const { theme } = useTheme();
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <View title="Your Details">
      <ThemeToggle />
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
    </div>
  )
}

export default Details