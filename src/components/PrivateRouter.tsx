import { APP_ROUTES } from '@/constants/app-routes';
import { checkUserAuthenticated } from '@/functions/check-user-is-authenticated';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react'

type PrivateRouterProps = {
    children: ReactNode;
}

const PrivateRouter = ({ children }: PrivateRouterProps) => {
    const { push } = useRouter();

    const isUserAuthenticated = checkUserAuthenticated();

    useEffect(() => {
        if (!isUserAuthenticated) {
            push(APP_ROUTES.public.login)
        }
    }, [isUserAuthenticated, push])
  return (
    <>
        {!isUserAuthenticated && null}
        {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRouter