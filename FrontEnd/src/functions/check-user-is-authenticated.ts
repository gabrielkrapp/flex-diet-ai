import { NextRequest } from "next/server";

export const checkUserAuthenticated = (request: NextRequest) => {
  const userToken = request.cookies.get(process.env.NEXT_PUBLIC_USER_TOKEN!)?.value

  return userToken;
};