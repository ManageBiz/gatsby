const isBrowser = typeof window !== `undefined`;

interface User {
  name?: string;
  legalName?: string;
  email?: string;
}

const getUser = (): User => {
  if (!isBrowser) return {};
  return window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};
};

const setUser = (user: User): void => {
  if (isBrowser) {
    window.localStorage.gatsbyUser = JSON.stringify(user);
  }
};

interface LoginCredentials {
  username: string;
  password: string;
}

export const handleLogin = ({ username, password }: LoginCredentials): boolean => {
  if (!isBrowser) return false;

  if (username === `gatsby` && password === `demo`) {
    console.log(`Credentials match! Setting the active user.`);
    setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: `jim@example.org`,
    });
    return true;
  }

  return false;
};

export const isLoggedIn = (): boolean => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = (): User | null => {
  return isBrowser ? getUser() : null;
};

export const logout = (callback: () => void): void => {
  if (!isBrowser) return;

  console.log(`Ensuring the \`gatsbyUser\` property exists.`);
  setUser({});
  callback();
};
