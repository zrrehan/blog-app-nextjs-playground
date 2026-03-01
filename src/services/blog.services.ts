import { env } from "@/env";

const API_URL = env.API_URL

const getBlogPosts = async () => {
    try {
        const result = await fetch(`${API_URL}/posts`); 
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