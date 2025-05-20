// 'use client'
// import { useRouter, usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Login from '../(auth)/login/Login';
// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [allowed, setAllowed] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//      setAllowed(false)
//     } else {
//       setAllowed(true);
//     }
//   }, [pathname, router]);

//   if (!allowed) return <Login/>;

//   return <>{children}</>;
// }
