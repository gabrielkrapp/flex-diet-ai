import { NextRequest, NextResponse } from "next/server";
import { redirectRouters } from "./functions/redirect-routers";

export default function middleware(request: NextRequest) {
    const router = redirectRouters(request)

    return router
}

export const config = {
    matcher: ["/", "/login", "/register"]
}