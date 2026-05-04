import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_KEY = 'pchm-auth-user';

// Static demo credentials — replace with Supabase auth when backend is ready
const DEMO_ADMIN = {
  email: 'admin',
  password: 'admin@123',
  user: {
    id: 'admin-001',
    name: 'Rohit Chauhan',
    email: 'admin',
    role: 'admin' as const,
    createdAt: '2024-01-01',
  },
};

// Simulated registered users store (in-memory for static mode)
const registeredUsers: Array<{ email: string; password: string; user: User }> = [
  DEMO_ADMIN,
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(AUTH_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as User;
        setUser(parsed);
      }
    } catch {
      localStorage.removeItem(AUTH_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    const found = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!found) {
      return { success: false, message: 'Invalid email or password. Please try again.' };
    }

    setUser(found.user);
    localStorage.setItem(AUTH_KEY, JSON.stringify(found.user));
    return { success: true, message: `Welcome back, ${found.user.name}!` };
  }, []);

  const register = useCallback(async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    await new Promise((r) => setTimeout(r, 800));

    const exists = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    registeredUsers.push({ email, password, user: newUser });
    setUser(newUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(newUser));
    return { success: true, message: `Account created! Welcome, ${name}!` };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
      isLoading,
      login,
      register,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
