import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.services";
import { userServices } from "@/services/user.services";
import { cookies } from "next/headers";

export default async function Home() {
    // const session = await authClient.getSession()
    // console.log(session);

    const {success ,session, user} = await userServices.getSession();
    console.log(user); 
    const {data} = await blogService.getBlogPosts();

    return (
    <div>
        <Button>Click me</Button>
        <p>{JSON.stringify(data)}</p>
    </div>
    );
}
