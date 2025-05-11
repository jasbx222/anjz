// 'use client';

// import { createContext,  useContext } from 'react';
// import { getToken } from './getToken';

// export const AuthContext = createContext<any>('');

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const token = getToken('token')

//   return (
//     <AuthContext.Provider value={token}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
