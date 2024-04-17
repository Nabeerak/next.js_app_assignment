"use client"
import React from "react";
import Link from 'next/link'
import {useRouter} from "next/navigation"


const Info = () => {

    
         const router = useRouter()
    
    const handleBack = () => {
        router.push('/')
    }
    return (<div className ="p-1 py-4 ">
        About Us
        <br/>
        This is my very first and simple next project ;)
        <br/>
        <br/>
        <Link href = '/About/namepage'  className = "bg-blue-400 rounded-md p-3 " >Name page</Link>
     <br/>
     <br/>
     <button className = "bg-blue-500 rounded-md p-3 " onClick = {handleBack}>back
     </button>
      </div>
          
          
    )}


export default Info;




