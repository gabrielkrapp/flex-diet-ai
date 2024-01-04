import { NextRequest, NextResponse } from 'next/server';
import { checkUserAuthenticated } from './check-user-is-authenticated';

export const redirectRouters = (request: NextRequest) => {
    const checkUser = checkUserAuthenticated(request);

    const signInUrl = new URL("/login", request.url);
    const homeUrl = new URL("/", request.url);
    
    // Lista de rotas públicas
    const publicRoutes = ["/login", "/register"];

    if (!checkUser) {
        // Se a rota atual estiver na lista de rotas públicas, permite acesso
        if (publicRoutes.includes(request.nextUrl.pathname)) {
            return NextResponse.next();
        }

        // Redireciona para o login se não estiver autenticado
        return NextResponse.redirect(signInUrl);
    }

    // Se o usuário está autenticado e tenta acessar uma rota pública, redireciona para a home
    if (publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(homeUrl);
    }

    // Continua para a próxima resposta se nenhuma das condições acima for satisfeita
    return NextResponse.next();
};