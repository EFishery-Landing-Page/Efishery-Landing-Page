import React from 'react'
import eFeeder2 from '../assets/eFeeder2.png'
import ReactGA from "react-ga4";

export default function Sewa() {
    const onClickSewa = () => {
        ReactGA.event ({
          action: 'sewa_action',
          category: 'sewa_category',
          label: 'sewa_label',
          value: 1
        })
    }

    return (
        <div id='sewa' className='space-y-6 h-screen flex flex-col justify-center items-center'>
            <div className='flex items-center pt-4'>
                <img className='object-contain h-full' src={eFeeder2} alt='eFeeder2'></img>
            </div>
            <div className='pt-6'>
                <p className='text-lg rounded-3xl px-14 py-2 bg-colorYellow cursor-pointer border-2 border-transparent 
                hover:border-primary hover:text-darkGray'
                href='/' onClick={onClickSewa}>Sewa Sekarang</p>
            </div>
        </div>
    )
}
