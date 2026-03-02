import { blogService } from "@/services/blog.services"
import { PostType } from "@/types";

export async function generateStaticParams() {
    const {data} = await blogService.getBlogPosts();
    console.log(data.data);
    
    const posts =  data.data.map((post: PostType) => {
        return {
            id: post.id
        }
    })

    return posts
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params

    return <div>My Post: {id}</div>
}