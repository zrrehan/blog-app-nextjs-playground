"use client";

import { getAllPostServerAction } from "@/actions/blog.action";
import { useEffect, useState } from "react";

function ClientFetch() {
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getAllPostServerAction();
            setData(data);
        }
        getData();
    }, [])

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default ClientFetch;