import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

function PostCard({id, title, content, views }: {id: string, title: string, content: string, views: number | string}) {
     return (
    <Card  className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {views}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {content}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href = {`/blogs/${id}`}>
            View Blog
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard;