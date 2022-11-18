import React from 'react';
import ReactGA from "react-ga4";

export default function Beranda() {
  const onClickPesan = () => {
    ReactGA.event ({
      action: 'pesan_action',
      category: 'pesan_category',
      label: 'pesan_label',
      value: 1
    })
  }

  return (
    <div className='space-y-6 h-screen flex flex-col justify-center items-center'>
        <p className='text-secondary text-lg'>eFeeder</p>
        <p className='text-primary font-bold text-5xl'>Optimalkan Budidaya <br></br>dengan eFeeder 5</p>
        <div className='px-60 text-xl pt-4'>
            <p>eFeeder 5 adalah alat pemberi pakan pintar yang memberikan kendali penuh kepada para penggunanya 
            (petambak udang & petani ikan) melalui Aplikasi dalam mengatur pemberian pakan yang efektif 
            untuk membantu mewujudkan panen yang lebih menguntungkan.
            </p>
        </div>
        <div className='pt-6'>
            <a className='text-lg rounded-3xl px-14 py-2 bg-colorYellow cursor-pointer border-2 border-transparent 
            hover:border-primary hover:text-darkGray'
            href='/' onClick={onClickPesan}>Pesan Sekarang</a>
        </div>
    </div>
  )
}
