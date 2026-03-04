import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.services";
import { userServices } from "@/services/user.services";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PostCard from "@/components/layout/post-card";
import { PostType } from "@/types";

export default async function Home() {
    // const session = await authClient.getSession()
    // console.log(session);

    // const {success ,session, user} = await userServices.getSession(); 
    const {data} = await blogService.getBlogPosts({
        isFeatured: false,
        search: ""
    });
    

    return (
    <div>
        <Button>Click me</Button>
        <div className="flex flex-wrap gap-20">
            {
                data.data.map((singleData: PostType) => {
                    return <PostCard key = {singleData.id} id = {singleData.id} title={singleData.title} content={singleData.content} views={singleData.views}></PostCard>
                })
            }
        </div>
    </div>
    );
}
