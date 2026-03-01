import { NextResponse, NextRequest } from 'next/server'
import { userServices } from './services/user.services';
import { UserRoles } from './constraints/roles';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const {user} = await userServices.getSession();
    let isVerified = false 
    let isAdmin = false 


    console.log(pathname);
    if(user) {
        isVerified = true
    }
    if(!isVerified) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // will add following fixing the parallel route bug 

    // if(!isAdmin && pathname === "/dashboard") {
    //     return NextResponse.redirect(new URL('/dashboard/user-dash', request.url))
    // } else if(!isAdmin && pathname === "/dashboard") {
    //     return NextResponse.redirect(new URL('/dashboard/admin-dash', request.url))
    // }

    if(user.role == UserRoles.admin) {
        isAdmin = true
    }
    
    

    return NextResponse.next();
}
 
export const config = {
  matcher: '/dashboard',
}