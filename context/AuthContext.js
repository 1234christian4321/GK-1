import { createContext, useContext, useState } from 'react'; // React context + hooks

// Opretter en AuthContext der kan deles på tværs af appen
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Bruger objekt (kun email lige nu). Null betyder ikke logget ind
  const [user, setUser] = useState(null); // { email }

  // Simpel login: gemmer email som "bruger"
  const login = ({ email }) => setUser({ email });
  // Simpel signup: samme som login (ingen backend endnu)
  const signup = ({ email }) => setUser({ email });
  // Logout: nulstil bruger
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for nem adgang til auth kontekst
export const useAuth = () => useContext(AuthContext);
