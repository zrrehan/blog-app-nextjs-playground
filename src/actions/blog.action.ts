'use server'

import { blogService } from "@/services/blog.services";

 
export async function getAllPostServerAction() {
    const data = await blogService.getBlogPosts();
    return data.data;
}