'use client'


import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import image2 from '../Image/image2.png';
import image16 from '../Image/image16.png';
import image17 from '../Image/image17.png';
import image18 from '../Image/image18.png';

const Page1 = () => {
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
    return (
        <div>
            <div>
                <div className='sm:flex-row flex-col gap-[16px] sm:gap-[0] flex justify-between items-center  px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] pt-[24px] sm:pt-[30px] md:pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[96px] pb-[16px] sm:pb-[20px] md:pb-[25px] lg:pb-[30px] xl:pb-[35px] 2xl:pb-[40px]'>
                    <div>
                        <h2 className='featureaaapls text-[25px] md:text-[35px] xl:text-[49px] feature'>Featured Appeals</h2>
                        <p className='toggetherlets feature'>Together, let's empower positive change and transform lives for good.</p>
                    </div>
                    <div>
                        <button className='seeall text-[13px] md:text-[15px] xl:text-[18px] px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px] feature'>See All</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px gap-[14px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] pb-[24px] sm:pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[80px] 2xl:pb-[96px]'>
                    <div className='featuresectioncols flex flex-col justify-start items-start gap-[6px] lg:gap-[8px] rounded-[10px] lg:rounded-[16px] p-[5px] lg:p-[8px] feature'>
                        <div className='w-full'>
                            <Image className='w-full object-cover h-full' src={image2} alt=""/>
                        </div>
                        <div className='p-[5px] lg:p-[8px]'>
                            <span className='emergencyrelads '>Emergency Relief</span>
                            <h3 className='swifers text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:pr-[10%] py-[4px]'>Swift Response, Life-Saving Assistance</h3>
                            <p className='husssingassd text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] lg:pr-[13%]'>Hussain Aid is dedicated to providing rapid, life-saving assistance to communities affected by natural disasters...</p>
                        </div>
                    </div>
                    <div className='featuresectioncols flex flex-col justify-start items-start gap-[6px] lg:gap-[8px] rounded-[10px] lg:rounded-[16px] p-[5px] lg:p-[8px] feature'>
                        <div className='w-full'>
                            <Image className='w-full object-cover h-full' src={image16} alt=""/>
                        </div>
                        <div className='p-[5px] lg:p-[8px]'>
                            <span className='emergencyrelads '>Shelter</span>
                            <h3 className='swifers text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:pr-[10%] py-[4px]'>Vulnerable Communities Donate for  Recovery</h3>
                            <p className='husssingassd text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] lg:pr-[13%]'>Millions around the world live in unsafe and inadequate housing due to natural disasters, conflict, and financial...</p>
                        </div>
                    </div>
                    <div className='featuresectioncols flex flex-col justify-start items-start gap-[6px] lg:gap-[8px] rounded-[10px] lg:rounded-[16px] p-[5px] lg:p-[8px] feature'>
                        <div className='w-full'>
                            <Image className='w-full object-cover h-full' src={image17} alt=""/>
                        </div>
                        <div className='p-[5px] lg:p-[8px]'>
                            <span className='emergencyrelads '>Women and Welfare</span>
                            <h3 className='swifers text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:pr-[10%] py-[4px]'>Empowering Women, Transforming Communities.</h3>
                            <p className='husssingassd text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] lg:pr-[13%]'>Hussain Aid, we are dedicated to empowering women and promoting gender equality to create a brighter...</p>
                        </div>
                    </div>
                    <div className='featuresectioncols flex flex-col justify-start items-start gap-[6px] lg:gap-[8px] rounded-[10px] lg:rounded-[16px] p-[5px] lg:p-[8px] feature'>
                        <div className='w-full'>
                            <Image className='w-full object-cover h-full' src={image18} alt=""/>
                        </div>
                        <div className='p-[5px] lg:p-[8px]'>
                            <span className='emergencyrelads '>Food Banks</span>
                            <h3 className='swifers text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:pr-[10%] py-[4px]'>Fighting Hunger and Supporting Vulnerable Communities</h3>
                            <p className='husssingassd text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] lg:pr-[13%]'>Hussain Aid, we believe no one should go hungry. Our food bank programs partner with grassroots....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;