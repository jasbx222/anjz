// // AddContext.tsx
// "use client";
// import React, { createContext, useContext } from "react";
// import useGet from "../components/hooks/useGet";
// const url = process.env.NEXT_PUBLIC_BASE_URL;

// interface AddContextType {
//   // refetch: () => void;
// }

// const AddContext = createContext<string | undefined>(undefined);

// export const AddProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // const { refetch } = useGet(`${url}/coupon`);

//   return (
//     <AddContext.Provider value={{''}}>
//       {children}
//     </AddContext.Provider>
//   );
// };

// export const useRefetch = () => {
//   const context = useContext(AddContext);
//   if (!context) throw new Error("useRefetch must be used within AddProvider");
//   return context;
// };
