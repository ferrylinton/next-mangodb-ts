import Link from 'next/link';
import localFont from 'next/font/local';
import React from 'react';
import clsx from 'clsx';
import ThemeSelector from './ThemeSelector';

const Orbitron = localFont({ src: '../fonts/Orbitron-VariableFont_wght.ttf' })

const PublicNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-[50px] flex justify-between items-center border-b bg-white px-3'>
        <div className={clsx("text-2xl font-bold", Orbitron.className)}>simple app</div>
        <div className='flex uppercase text-sm'>
            <Link href="/auth/signin" className='px-3 py-1 rounded hover:bg-gray-300'>Sign In</Link>
            <Link href="/auth/signup" className='px-3 py-1 rounded hover:bg-gray-300'>Sign Up</Link>
            <ThemeSelector/>
        </div>
    </nav>
  )
}

export default PublicNavbar