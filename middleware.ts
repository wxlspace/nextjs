import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
// https://github.com/vercel/examples/blob/main/edge-functions/jwt-authentication/middleware.ts

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { cookies, url } = req
    console.log("@@@middleware cookies", cookies," url:",url);
    cookies.set("testcookie","fdsfkldsjfkdslfjdslfjdsklfjdslfjdlfdslf");
    // if(1==1){
    //     return NextResponse.redirect("/login")
    // }else{
    //     return NextResponse.next()
    // }
    
    // return new Response('Hello, world!')
    return NextResponse.next()
}