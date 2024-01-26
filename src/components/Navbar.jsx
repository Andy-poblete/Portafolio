import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
        <div className="fixed top-0 flex w-full flex-wrap border-solid border-2 border-white bg-black p-5 text-white flex flex-row gap-7">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="contacto">Contacto</Link>
            
        </div>
    );
};

export default Navbar;