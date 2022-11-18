import React from 'react'

export default function Header() {

    return (
        <header className='fixed w-screen flex justify-between px-40 py-2 bg-lightGray text-sm'>
            <a className='text-secondary font-semi bold'>eFishery</a>
            <nav>
                <ul className='flex space-x-8 text-gray-600'>
                    <li className='hover:text-black'><a href='#'>Beranda</a></li>
                    <li className='hover:text-black'><a href='#alat'>Alat</a></li>
                    <li className='hover:text-black'><a href='#harga'>Harga</a></li>
                    <li className='hover:text-black'><a href='#sewa'>Mulai Menyewa</a></li>
                </ul>
            </nav>
        </header>
    )
}
