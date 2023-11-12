import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/images/icon-vouch.png'
function Header() {
    return (
        <div className='w-full h-24 shadow-xl bg-violet-50 mb-8' >
            <div className='flex items-center gap-5  h-full w-full px-10'>
                <Link href='/'>
                    <Image src={logo} alt="logo-vouch" width={40} className='h-auto'></Image>
                </Link>
                <h3 className='text-xl'>Vouch Global</h3>
            </div>
        </div>
    )
}

export default Header