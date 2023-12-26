import { NextRequest, NextResponse } from 'next/server'
import { checkUserAuthenticated } from './check-user-is-authenticated'

export const redirectRouters = (request: NextRequest) => {

    const checkUser = checkUserAuthenticated(request)

    const signInUrl = new URL("/login", request.url)
    const homeUrl = new URL("/", request.url)
    
    if (!checkUser) {
        if (request.nextUrl.pathname === "/login") {
            return NextResponse.next()
        }

        return NextResponse.redirect(signInUrl)
    }

    if (request.nextUrl.pathname === "/login") {
        return NextResponse.redirect(homeUrl)
    }
}
