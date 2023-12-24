import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      router.push('/');
    }
  }, [router]);

  return <div>Página não encontrada</div>;
};

export default Custom404;