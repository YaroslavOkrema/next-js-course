'use client'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Page() {
    const {push, replace} = useRouter()
    const pathname = usePathname()
    const params = useParams<{ slug: string }>()
    params.slug
    return (
        <div>Products</div>
    )
}
