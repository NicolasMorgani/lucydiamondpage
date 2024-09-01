import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './botonDark'

const Navbar = () => {
  return (
    <nav className='flex justify-between  m-4'>
        <div className='flex gap-3 '>
            <h1 className='text-l py-1'><span className='font-bold'>LucyDiamond</span></h1>
            <ModeToggle/>
        </div>
        <div className='flex gap-3'>
            <Link href="#seccion1" >
            <p className='hover:text-cyan-400'>Home</p>
            </Link>
            <Link href="/#seccion2">
            <p className='hover:text-cyan-400'>Legado</p>
            </Link>
            <Link href="/#seccion3">
            <p className='hover:text-cyan-400'>Logros</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar