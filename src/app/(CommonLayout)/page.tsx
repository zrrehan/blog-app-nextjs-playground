import { Button } from "@/components/ui/button";
import { userServices } from "@/services/user.services";
import { cookies } from "next/headers";

export default async function Home() {
    // const session = await authClient.getSession()
    // console.log(session);

    const {success ,session, user} = await userServices.getSession();
    console.log(user); 

    return (
    <div>
        <Button>Click me</Button>
    </div>
    );
}
