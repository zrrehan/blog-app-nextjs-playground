import { cookies } from "next/headers";

const AUTH_URL = process.env.AUTH_URL

const getSession = async () => {
    try {
        const cookieStore = await cookies();
        const result = await fetch(`${AUTH_URL}/get-session`, {
            headers: {
                Cookie: cookieStore.toString(),
            }, 
            cache: "no-cache"
        })

        const session = await result.json();
        return {
            success: true,
            ...session
        } 

    } catch(error) {
        return {
            success: false, 
            details: error 
        }
    }
}


export const userServices = {
    getSession
}