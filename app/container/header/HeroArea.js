"use client"

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import image1 from '../header/Image/image1.png';
import { Autoplay} from 'swiper/modules';


const HeroArea = () => {
    const [selectedProject, setSelectedProject] = useState("Project Name");

  const handleChange = (event) => {
    setSelectedProject(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll('.feature');
      const windowHeight = window.innerHeight;

      features.forEach((feature) => {
        const featurePosition = feature.getBoundingClientRect().top;

        if (featurePosition < windowHeight - 100) {
          feature.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div>
            <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='relative m-[18px] lg:m-[24px]'>
                <Image className='w-full absolute -z-[2] h-full object-cover rounded-[24px]' src={image1} alt=''/>
                <div className='px-[24px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[96px] pt-[150px] md:pt-[180px] xl:pt-[240px] 2xl:pt-[280px] pb-[25px] sm:pb-[40px] md:pb-[60px] xl:pb-[80px] 2xl:pb-[112px] fatchanimactionright'>
                    <h2 className='suportuswithes'>Support Us with Your <br/> Donation Today!</h2>
                    <p className='donationhelps text-[16] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] lg:pr-[47%] mt-[14px] sm:mt-[16px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px] mb-[18px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]'>Your donation helps provide vital resources to those in need. Together, we can create positive change and bring hope to individuals and communities. Every contribution makes a difference!</p>
                    <button className='mostnow text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] w-[250px] md:w-[270px] lg:w-[310px] xl:w-[342px] 2xl:w-[382px] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 2xl:px-[40px] 2xl:py-[32px]'><div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] flex-col '>Most In Need</div>
                    Donate Now</button>
                </div>
                
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='relative m-[18px] lg:m-[24px]'>
                <Image className='w-full absolute -z-[2] h-full object-cover rounded-[24px]' src={image1} alt=''/>
                <div className='px-[24px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[96px] pt-[150px] md:pt-[180px] xl:pt-[240px] 2xl:pt-[280px] pb-[25px] sm:pb-[40px] md:pb-[60px] xl:pb-[80px] 2xl:pb-[112px]'>
                    <h2 className='suportuswithes'>Support Us with Your <br/> Donation Today!</h2>
                    <p className='donationhelps text-[16] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] lg:pr-[47%] mt-[14px] sm:mt-[16px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px] mb-[18px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]'>Your donation helps provide vital resources to those in need. Together, we can create positive change and bring hope to individuals and communities. Every contribution makes a difference!</p>
                    <button className='mostnow text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] w-[250px] md:w-[270px] lg:w-[310px] xl:w-[342px] 2xl:w-[382px] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 2xl:px-[40px] 2xl:py-[32px]'><div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] flex-col '>Most In Need</div>
                    Donate Now</button>
                </div>
                
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='relative m-[18px] lg:m-[24px]'>
                <Image className='w-full absolute -z-[2] h-full object-cover rounded-[24px]' src={image1} alt=''/>
                <div className='px-[24px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[96px] pt-[150px] md:pt-[180px] xl:pt-[240px] 2xl:pt-[280px] pb-[25px] sm:pb-[40px] md:pb-[60px] xl:pb-[80px] 2xl:pb-[112px]'>
                    <h2 className='suportuswithes'>Support Us with Your <br/> Donation Today!</h2>
                    <p className='donationhelps text-[16] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] lg:pr-[47%] mt-[14px] sm:mt-[16px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px] mb-[18px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]'>Your donation helps provide vital resources to those in need. Together, we can create positive change and bring hope to individuals and communities. Every contribution makes a difference!</p>
                    <button className='mostnow text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] w-[250px] md:w-[270px] lg:w-[310px] xl:w-[342px] 2xl:w-[382px] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 2xl:px-[40px] 2xl:py-[32px]'><div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] flex-col '>Most In Need</div>
                    Donate Now</button>
                </div>
                
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='relative m-[18px] lg:m-[24px]'>
                <Image className='w-full absolute -z-[2] h-full object-cover rounded-[24px]' src={image1} alt=''/>
                <div className='px-[24px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[96px] pt-[150px] md:pt-[180px] xl:pt-[240px] 2xl:pt-[280px] pb-[25px] sm:pb-[40px] md:pb-[60px] xl:pb-[80px] 2xl:pb-[112px]'>
                    <h2 className='suportuswithes'>Support Us with Your <br/> Donation Today!</h2>
                    <p className='donationhelps text-[16] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] lg:pr-[47%] mt-[14px] sm:mt-[16px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px] mb-[18px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]'>Your donation helps provide vital resources to those in need. Together, we can create positive change and bring hope to individuals and communities. Every contribution makes a difference!</p>
                    <button className='mostnow text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] w-[250px] md:w-[270px] lg:w-[310px] xl:w-[342px] 2xl:w-[382px] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 2xl:px-[40px] 2xl:py-[32px]'><div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] flex-col '>Most In Need</div>
                    Donate Now</button>
                </div>
                
            </div>
            </SwiperSlide>
            </Swiper>    
            <div className='px-[24px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[96px] mt-[25px] sm:mt-[40px] md:mt-[60px] xl:mt-[80px] 2xl:mt-[112px] pb-[20px] lg:pb-[24px] fixed  bottom-[20px] lg:bottom-[24px] z-50 w-full fatchanimactionright '>
                    <div className='progressbar grid grid-cols-12 gap-[5px] sm:gap-[10px] lg:gap-[24px]'>
                        <button className='col-span-3 donationauick w-full text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[32px] px-[16px] md:px-[18px] lg:px-[20px] xl:px-[25px] 2xl:px-[32px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px] h-[50px] md:h-[70px] xl:h-[96px]'>Quick Donation</button>
                        <button className="text-[#FAF7F6] font-[Montserrat] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-[150%] rounded-[16px] border-[1px] sm:border-2 border-[#CDA687] bg-[#E7A8761A] backdrop-blur-[32px] flex w-full h-[50px] md:h-[70px] xl:h-[96px] px-[16px] md:px-[18px] lg:px-[20px] xl:px-[25px] 2xl:px-[32px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px] justify-between items-center relative col-span-3">
      
                        <select
                            className="bg-transparent text-[#FAF7F6] outline-none cursor-pointer appearance-none "
                            value={selectedProject}
                            onChange={handleChange}
                            
                        >
                            <option value="Project Name">Project Name</option>
                            <option value="Project A">Project A</option>
                            <option value="Project B">Project B</option>
                            <option value="Project C">Project C</option>
                        </select>

                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] md:w-[20px] xl:w-[24px]' viewBox="0 0 24 24" fill="none">
                            <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995" stroke="#FAF7F6" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        </button>
                        <button className="col-span-2 text-[#FAF7F6] font-[Montserrat] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-[150%] rounded-[16px] border-[1px] sm:border-2 border-[#CDA687] bg-[#E7A8761A] backdrop-blur-[32px] flex w-full h-[50px] md:h-[70px] xl:h-[96px] px-[16px] md:px-[18px] lg:px-[20px] xl:px-[25px] 2xl:px-[32px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px] justify-between items-center">One-Time
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] md:w-[20px] xl:w-[24px]' viewBox="0 0 24 24" fill="none">
                        <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                        <button className="col-span-2 text-[#FAF7F6] font-[Montserrat] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] xl:text-[20px] 2xl:text-[24px] font-medium leading-[150%] rounded-[16px] border-[1px] sm:border-2 border-[#CDA687] bg-[#E7A8761A] backdrop-blur-[32px] flex w-full h-[50px] md:h-[70px] xl:h-[96px] px-[16px] md:px-[18px] lg:px-[20px] xl:px-[25px] 2xl:px-[32px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px] justify-between items-center">£400
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] md:w-[20px] xl:w-[24px]' viewBox="0 0 24 24" fill="none">
                        <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                        <button className="col-span-2 text-[#FAF7F6] font-[Montserrat] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-[150%] rounded-[16px] border-[1px] sm:border-2 border-[#CDA687] bg-[#CDA687] backdrop-blur-[32px] flex w-full h-[50px] md:h-[70px] xl:h-[96px] px-[16px] md:px-[18px] lg:px-[20px] xl:px-[25px] 2xl:px-[32px] py-[14px] sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[22px] 2xl:py-[24px] justify-center items-center">Donate Now
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default HeroArea;