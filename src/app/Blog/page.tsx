"use client"
import React from "react";
import {useRouter} from "next/navigation"



const Blog = () => {
    const router = useRouter()
    
    
    const handleBack = () => {
        router.push('/')
    }
    return (<div className ="p-1 py-4">
        Blog page
        <br/>
     <button className = "bg-blue-500 rounded-md p-3 " onClick = {handleBack}>back
     </button> </div>
    )
}

export default Blog;