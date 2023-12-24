import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from './auth';

const withProtectedAccess = <P extends object>(WrappedComponent: ComponentType<P>, redirectToHomeIfLoggedIn = false) => {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const loggedIn = isAuthenticated();
      if (!loggedIn) {
        router.push('/login');
      } else if (loggedIn && redirectToHomeIfLoggedIn && router.pathname === '/login') {
        router.push('/');
      }
    }, [router, redirectToHomeIfLoggedIn]);

    return <WrappedComponent {...props} />;
  };
};

export default withProtectedAccess;