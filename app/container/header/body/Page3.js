"use client"


import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import image15 from '../Image/image15.png';

const Page3 = () => {
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
    
    
    const [isTranslated, setIsTranslated] = useState(false);
    
    
    const handleClick = () => {
    setIsTranslated(true);
    
    setTimeout(() => {
      setIsTranslated(false);
    }, 200); 
    };
    const amounts = ["£10", "£25", "£50", "£100", "£200", "£500", "£1000"];
    const [selected, setSelected] = useState(null);
    return (
        <div className='bg-[#0A0806] px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[20px] md:gap-[30px] xl:gap-[40px] bg-[#141210] p-[16px] md:p-[25px] xl:p-[32px]'>
                <div className='feature' >
                    <h2 className='fonatenewlast mb-[16px] md:mb-[20px] xl:mb-[24px]'>Donate now to make an immediate impact. Your support matters!</h2>
                    <Image className='bg-[#141210]' src={image15} alt=''/>
                </div>
                <div className='feature' >
                    <div className='bg-[#0A0806] p-[20px] md:p-[30px] xl:p-[40px] rounded-[10px] lg:rounded-[20px]'>
                        <h2 className='fonatenewlast mb-[16px] md:mb-[20px] xl:mb-[24px]'>Select your donation amount:</h2>
                        <div className='flex items-center gap-[16px] md:gap-[25px] xl:gap-[32px] flex-wrap'>
                        {amounts.map((amount, index) => (
                        <span
                          key={index}
                          className={`lastmatchurow px-[20px] md:px-[35px] xl:px-[48px] py-[16px] md:py-[25px] xl:py-[24px] cursor-pointer transition-colors duration-300 rounded-lg ${
                            selected === amount ? "bg-[#CDA687] text-[#fff]" : "bg-[#e7a8761a] text-[#F1EEEC]"
                          }`}
                          onClick={() => setSelected(amount)}
                        >
                          {amount}
                        </span>
                      ))}
                        </div>
                        <input className='lastmatchurows outline-none px-[20px] md:px-[35px] xl:px-[48px] py-[16px] md:py-[25px] xl:py-[24px] w-full !items-start mt-[16px] md:mt-[25px] xl:mt-[32px]' type='text' placeholder='Donation amount'/>
                        <div className='lastmatchurow px-[20px] md:px-[35px] xl:px-[48px] py-[16px] md:py-[25px] xl:py-[24px] w-full flex items-center justify-between mt-[16px] md:mt-[25px] xl:mt-[32px]'>Sadaqah 
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.92 9.4502L13.4 15.9702C12.63 16.7402 11.37 16.7402 10.6 15.9702L4.07996 9.4502" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <button className='mt-[16px] md:mt-[25px] xl:mt-[32px] w-full donsatebtntheree py-[12px] md:py-[16px] xl:py-[20px] rounded-[10px] lg:rounded-[16px]'>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;