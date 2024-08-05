import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // if (!route.startsWith('/admin') && !route.startsWith('/api')){
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setUser(token);
        // fetch('/api/verify-token', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ token })
        // })
        // .then(res => res.json())
        // .then(data => {
        //   if (data.user) {
        //     setUser(data.user);
        //   } else {
        //     localStorage.removeItem('token');
        //     router.push('/login');
        //   }
        // })
        // .catch(error => {
        //   console.error('Error:', error);
        //   localStorage.removeItem('token');
        //   router.push('/login');
        // });
      } else {
        router.push('/login');
      }
    }, [router]);
  // }

  return user;
}
