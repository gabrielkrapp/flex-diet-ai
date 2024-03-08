import { NextRequest, NextResponse } from 'next/server';
import { checkUserAuthenticated } from './check-user-is-authenticated';

export const redirectRouters = (request: NextRequest) => {
    const checkUser = checkUserAuthenticated(request);

    const signInUrl = new URL("/login", request.url);
    const homeUrl = new URL("/", request.url);
    
    const publicRoutes = ["/login", "/register"];

    if (!checkUser) {
        if (publicRoutes.includes(request.nextUrl.pathname)) {
            return NextResponse.next();
        }

        return NextResponse.redirect(signInUrl);
    }

    if (publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
};