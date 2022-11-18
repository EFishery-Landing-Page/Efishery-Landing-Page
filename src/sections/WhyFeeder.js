import React from 'react'
import eFeeder from '../assets/header-feeder.png'

export default function WhyFeeder() {
  return (
    <div>
        <div className='flex justify-between h-screen bg-[#F5F5F5]'>
            <div className='flex flex-col space-y-4 text-left py-40 pl-40'>
                <p className='text-primary text-xl font-medium pl-0.5'>Dengan menggunakan eFeeder</p>
                <p className='text-6xl font-bold'>Pertumbuhan Ikan <br/> Cepat</p>
                <p className='text-lg font-light pt-2 pl-0.5'>Pola makan yang berkelanjutan & teratur menjadikan <br/> pertumbuhan ikan & udang menjadi lebih cepat.</p>
            </div>
            <div className='flex items-center pt-4'>
                <img className='object-contain h-full' src={eFeeder} alt='eFeeder'></img>
            </div>
        </div>
    </div>
  )
}
