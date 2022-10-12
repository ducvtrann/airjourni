import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getFirebase } from '../firebase';

interface IAuth {
  user: User | null;
  loading: boolean;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const { auth } = getFirebase();
const AuthContext = createContext<IAuth>({
  user: null,
  loading: true,
});
const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
