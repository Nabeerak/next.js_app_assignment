import React from 'react';
import Link from 'next/link';

const header = () => {

    return (
        <div className = "flex bg-red-500 p-4 gap-7">
            <Link href = "/">Home</Link>
            <Link href = "/Blog">Blog</Link>
            <Link href = "/info">Info</Link>
            <Link href = '/About'>About Us</Link>
            <Link href = '/Contact'>Contact Us</Link>
            

        </div>
    )
}
export default header;