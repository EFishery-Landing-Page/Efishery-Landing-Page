import {React, useLayoutEffect, useRef} from 'react'
// import ScrollMagic from 'scrollmagic';
// import {TweenMax, Power2, TimelineLite, TimelineMax, TweenLite} from "gsap/TweenMax"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productFront from '../assets/product-front.png';
import productBack from '../assets/product-back.png';
import productVideo from '../assets/Product.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
    // ScrollMagicPluginIndicator(ScrollMagic);
    // const ref = new ScrollMagic.Controller();
    const introRef = useRef(null);
    const videoRef = useRef(null);

    useLayoutEffect(() => {
        let bgVideo = document.querySelector("#bgVideo");
        //THIS ONE!!!
        let ctx = gsap.context(() => {
            gsap.timeline({
            // defaults:
            // {ease: "none", duration: 2},
            scrollTrigger:{
                trigger: introRef.current,
                start: "top top",
                end: "+=200%",
                markers: true,
                pin: introRef.current,
                pinspacer:true,
                scrub: true,
                anticipatePin: 1    
            }})
            .to('#line-1', {width: '100%', duration: 0.5}, 1)
            .to('#detail-1', {opacity: 1, ease:'none', duration: 0.5}, 1)
            .to('#line-2', {width: '100%', duration: 0.5}, 2)
            .to('#detail-2', {opacity: 1, ease:'none', duration: 0.5}, 2)
            .to('#line-3', {width: '100%', duration: 0.5}, 3)
            .to('#detail-3', {opacity: 1, ease:'none', duration: 0.5}, 3)
            .to(['#line-1', '#line-2', '#line-3'], {width: '0%', duration: 0.5}, 4)
            .to(['#detail-1', '#detail-2', '#detail-3'], {opacity: 0, ease:'none', duration: 0.5}, 4)
            .to(bgVideo, 
                {
                // scrollTrigger: {
                //   trigger: introRef.current,
                //   scrub: 2,
                //   start: "top top",
                //   end: "+=100%",
                //   pin: true,
                //   markers: true
                // },
                currentTime: 3,
                duration: 2,
                ease: "none",
          
              }, 5)
            .to('#line-4', {width: '100%', duration: 0.5, delay: 1}, 6)
            .to('#detail-4', {opacity: 1, ease:'none', duration: 0.5, delay: 1}, 6)
            .to('#line-5', {width: '100%', duration: 0.5}, 8)
            .to('#detail-5', {opacity: 1, ease:'none', duration: 0.5}, 8)
            .to(['#line-4', '#line-5'], {width: '0%', duration: 0.5}, 9)
            .to(['#detail-4', '#detail-5'], {opacity: 0, ease:'none', duration: 0.5}, 9);
        });
        
        return () => ctx.revert();
    },[])
    return (
        // <>
        // <div>
        // <section>
        //     <h1 className='h-screen'>section1</h1>
        // </section>
        // <section ref={introRef} className='relative intro h-screen w-screen box-border'>
        //     <div id="scroll-container" className="grid">
        //         <div className='absolute pin-intro h-screen w-1/2 border-2 border-black'></div>
        //         <div className=''>
        //             <div className='pin one absolute -translate-x-1/2 -translate-y-1/2 top-[30%] left-[50%] opacity-0'>
        //                 <h2 className=''>aaa</h2>
        //             </div>
        //             <div className='pin two absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] opacity-0'>
        //                 <h2 className=''>bbb</h2>
        //             </div>
        //             <div className='pin three absolute -translate-x-1/2 -translate-y-1/2 top-[70%] left-[50%] opacity-0'>
        //                 <h2 className=''>CCCC</h2>
        //             </div>  
        //         </div>
        //     </div>
        // </section>
        // <section className=''>
        //     <h1 className='h-screen'>section3</h1>
        // </section>
        // </div>
        // </>
        <>
        <section>
            <h1 className='h-screen'>section1</h1>
        </section>
        <div ref={introRef} className='min-h-screen border-box bg-black flex justify-center items-center'>
            <div className='relative border-white border-2 bg-black 
            w-[300px] min-[470px]:w-[460px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1020px]'>
                <video className='' src={productVideo} 
                    type="video/mp4" id="bgVideo" preload="auto" muted="" plays-inline=""></video>
                {/* <picture id='picture' className='relative'>
                    <img className='relative' src={productBack} alt='product-front'></img>
                </picture> */}

                {/* Detail Product Front */}
                <div className='absolute pin-wrapper
                top-[17px] min-[470px]:top-[27px] sm:top-[35px] md:top-[42px] lg:top-[62px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-1' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-1' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Detail 1
                                </h3>
                                <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                top-[48px] min-[470px]:top-[74px] sm:top-[100px] md:top-[118px] lg:top-[170px]
                left-[21px] min-[470px]:left-[60px] sm:left-[75px] md:left-[55px] lg:left-[156px] xl:left-[136px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-28 min-[470px]:w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80'>
                            <div id='line-2' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%]'></div>
                            <span id='detail-2' className='flex flex-col justify-end items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Detail 2
                                </h3>
                                <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[45px] min-[470px]:bottom-[85px] sm:bottom-[113px] md:bottom-[80px] lg:bottom-[160px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-3' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-3' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Detail 3
                                </h3>
                                <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                            </span>
                        </div>
                    </div>
                </div>

                {/* Detail Product Back */}
                <div className='absolute pin-wrapper
                top-[8px] min-[470px]:top-[12px] sm:top-[18px] md:top-[20px] lg:top-[30px]
                left-[32px] min-[470px]:left-[60px] sm:left-[82px] md:left-[53px] lg:left-[105px] xl:left-[115px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-start items-start
                        w-28 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-4' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-4' className='flex flex-col justify-start items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Detail 4
                                </h3>
                                <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[45px] min-[470px]:bottom-[85px] sm:bottom-[113px] md:bottom-[80px] lg:bottom-[160px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-5' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-5' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Detail 5
                                </h3>
                                <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>  
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <section>
            <h1 className='h-screen'>end section</h1>
        </section>

        {/* Video Product Turn Around */}
        {/* <div ref={videoRef} className='min-h-screen border-box bg-black flex justify-center items-center'>
            <div className='relative border-white border-2 bg-black 
            w-[300px] min-[470px]:w-[460px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1020px]'>
                    <video className='' src={productVideo} 
                    type="video/mp4" id="bgVideo" preload="auto" muted="" plays-inline=""></video>
            </div>
        </div> */}

        {/* Detail Product Back */}
        </>
    )
}
