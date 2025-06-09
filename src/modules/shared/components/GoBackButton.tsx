'use client'

import { Button } from "@/modules/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function GoBackButton(){

    const router = useRouter()

    const handleClick = () => {
        router.back()
    }

    return(
        <Button className="rounded-full" variant='outline' onClick={handleClick}>
            <ArrowLeft/>
        </Button>
    )
}