import React, { useState, useEffect } from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

import User from "../components/User"
import { fetchDetails } from "../services/user"

const Profile = () => {
  const { name } = getCurrentUser()

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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
    <View title="Your Profile">
      <p>Welcome back to your profile, {name}!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
      {loading && "loading"}
      {error && "error"}
      <User data={user} />
    </View>
  )
}

export default Profile