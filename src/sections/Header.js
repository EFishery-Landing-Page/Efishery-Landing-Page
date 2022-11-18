import React from 'react'
import ReactGA from "react-ga4";

export default function Header() {
    const onClickBeranda = () => {
        ReactGA.event ({
          action: 'beranda_action',
          category: 'beranda_category',
          label: 'beranda_label',
          value: 1
        })
    }

    const onClickAlat = () => {
        ReactGA.event ({
          action: 'alat_action',
          category: 'alat_category',
          label: 'alat_label',
          value: 1
        })
    }

    const onClickHarga = () => {
        ReactGA.event ({
          action: 'harga_action',
          category: 'harga_category',
          label: 'harga_label',
          value: 1
        })
    }

    const onClickMenyewa = () => {
        ReactGA.event ({
          action: 'menyewa_action',
          category: 'menyewa_category',
          label: 'menyewa_label',
          value: 1
        })
    }

    return (
        <header className='fixed w-screen flex justify-between px-40 py-2 bg-lightGray text-sm'>
            <a className='text-secondary font-semi bold'>eFishery</a>
            <nav>
                <ul className='flex space-x-8 text-gray-600'>
                    <li className='hover:text-black'><a href='#' onClick={onClickBeranda}>Beranda</a></li>
                    <li className='hover:text-black'><a href='#alat' onClick={onClickAlat}>Alat</a></li>
                    <li className='hover:text-black'><a href='#harga' onClick={onClickHarga}>Harga</a></li>
                    <li className='hover:text-black'><a href='#sewa' onClick={onClickMenyewa}>Mulai Menyewa</a></li>
                </ul>
            </nav>
        </header>
    )
}
