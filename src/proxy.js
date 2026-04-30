import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
 


export async function proxy(request) {
    const session=auth.api.getSession({
        headers: await headers(),
    })
    const t=false
    console.log(session,'session');
    if(session){

       return NextResponse.redirect(new URL('/register', request.url))
    }
    return NextResponse.next();
}
 
export const config = {
  matcher: ['/profile'],
}