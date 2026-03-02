import { env } from "@/env";

const API_URL = env.API_URL

// No dynamic && No {cache:: no-store} => SSG (static page)
// {cache: no-store} => SSR (Dynamic Page)
// NEW ONE: {revalidate: 10}: ISR (MIX between SSR and SSG)

type Params = {
    search?: string, 
    isFeatured?: boolean
}

const getBlogPosts = async (params?:Params)  => {
    try {
        const url = new URL(`${API_URL}/posts`);
        if(params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value as string);
            });
        }
        console.log(url);
        const result = await fetch(url.toString()); 
        // const result = await fetch(`${API_URL}/posts`, {cache: "no-store"}); 
        // const result = await fetch(`${API_URL}/posts`); 
        const data = await result.json();
        return {
            data: data, 
            error: null
        }
    } catch(error) {
        return {
            data: null, 
            error: error
        }
    }
}

export const blogService = {
    getBlogPosts
}