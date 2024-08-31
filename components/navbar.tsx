import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './botonDark'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
        <div className='flex gap-3 '>
            <h1 className='text-xl py-1'><span className='font-bold'>LucyDiamond</span></h1>
            <ModeToggle/>
        </div>
        <div className='flex gap-3'>
            <Link href="#seccion1">
            <p>Home</p>
            </Link>
            <Link href="/#seccion2">
            <p>Games</p>
            </Link>
            <Link href="/">
            <p>Experiencies</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar