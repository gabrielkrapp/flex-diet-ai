import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from './auth';

const withProtectedAccess = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const AuthenticatedComponent: ComponentType<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props as P} />;
  };

  return AuthenticatedComponent;
};

export default withProtectedAccess;