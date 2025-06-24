import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const NavBar = () => {
  return (
    <nav className='py-5 flex items-center justify-between '>
      <div className='flex items-center gap-6'>

        <Link href="/">
          <h1 className='text-3xl font-semibold'>Blog<span className='text-blue-500'>SALEH
          </span></h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href={"/"} className='font-medium text-sm hover:text-blue-500 transition-colors'>HOME</Link>
          <Link href={"/DASHBOARD"} className='font-medium text-sm hover:text-blue-500 transition-colors'>DASHBOARD</Link>
        </div>
      </div>

        <div className="flex justify-content items-center gap-4">
          <Button>Log in</Button>
          <Button variant="secondary">Sign up</Button>
        </div>


    </nav>
  )
}

export default NavBar
