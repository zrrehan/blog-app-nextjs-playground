"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function ErrorHandling({error, reset} : {error: Error & { digest?: string }, reset: () => void}) {
    useEffect(() => {
        console.log(error);
    }, [])

    return(
        <div>
            <p>This is an error</p>
            <Button onClick={() => reset()} variant="outline">Retry</Button>
        </div>
    )
}

export default ErrorHandling;