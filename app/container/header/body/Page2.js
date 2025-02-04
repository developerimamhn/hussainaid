"use client"



import React, { useRef, useState, useEffect  } from 'react';
import Image from 'next/image';
import image3 from '../Image/image3.png';
import image4 from '../Image/image4.png';
import image5 from '../Image/image5.png';
import image6 from '../Image/image6.png';
import image7 from '../Image/image7.png';
import image8 from '../Image/image8.png';
import image9 from '../Image/image9.png';
import image10 from '../Image/image10.png';
import image11 from '../Image/image11.png';
import image12 from '../Image/image12.png';
import image13 from '../Image/image13.png';
import image14 from '../Image/image14.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Page2 = () => {
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
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6]'>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className={`flex-1 xl:mr-[10%] scroll-element feature`}
      >
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Medical kits and hygiene kits</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Hussain Aid Commitment to Global Healthcare and Medical Aid</h2>
                        <p className='aidhasbeen mb-[16px] md:mb-[22px] xl:mb-[32px]'>Hussain Aid has been dedicated to delivering essential medical aid and healthcare to those in need. With extensive experience in the field, we have provided crucial medical support to communities worldwide, including in some of the largest refugee camps, such as Cox's Bazar.</p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[20px] 2xl:gap-[24px] mb-[20px] md:mb-[30px] xl:mb-[40px]'>
                            <li className="medicalhealthcarea flex justify-start items-center gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> Medical Aid and Healthcare</li>  
                            <li className="medicalhealthcarea flex justify-start items-center gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg>Global Reach</li> 
                            <li className="medicalhealthcarea flex justify-start items-center gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg>Support in Crisis Zones</li> 
                            <li className="medicalhealthcarea flex justify-start items-center gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg>Long-standing Commitment</li> 
                        </ul>
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                    <div className='flex-1 feature'>
                    <Image className='w-full object-cover h-full' src={image3} alt=""/>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] feature'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                    
                    <div className='flex-1'>
                    <Image className='w-full object-cover h-full' src={image4} alt=""/>
                    </div>
                    <div className='flex-1'>
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Shelter</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Restoring Hope and Security for Vulnerable Communities</h2>
                        <p className='aidhasbeen mb-[16px] md:mb-[22px] xl:mb-[32px]'>Millions around the world live in unsafe and inadequate housing due to natural disasters, conflict, and financial hardship. At Hussain Aid, we believe that everyone deserves safe and secure shelter.</p>
                        <ul className='flex flex-col gap-[10px] lg:gap-[16px] mb-[20px] md:mb-[30px] xl:mb-[40px]'>
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span>1.</span><div>Disaster Recovery Housing: <span className='!font-[400]'>Rebuilding homes destroyed by calamities with resilient and sustainable designs.</span></div></li>  
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span>1.</span><div>Home Rehabilitation:  <span className='!font-[400]'>Renovating existing homes to improve safety, hygiene, and living conditions.</span></div></li>
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span>1.</span><div>Safe Construction:  <span className='!font-[400]'>Educating communities on safe and sustainable building practices.</span></div></li>
                        </ul>
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6] feature'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                    <div className='flex-1'>
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Medical kits and hygiene kits</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Hussain Aid Commitment to Global Healthcare and Medical Aid</h2>
                        <p className='aidhasbeen mb-[16px] md:mb-[22px] xl:mb-[32px]'>Hussain Aid has been dedicated to delivering essential medical aid and healthcare to those in need. With extensive experience in the field, we have provided crucial medical support to communities worldwide, including in some of the largest refugee camps, such as Cox's Bazar.</p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 mb-[20px] md:mb-[30px] xl:mb-[40px] rounded-[8px] lg:rounded-[12px] border-[1px] border-[#E9E4E0]'>
                            <li className="poistioninag !bg-[#E9E4E0] p-[16px] md:p-[20px] xl:p-[21px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>For Communications</h2>
                                <p className='Immediatepositin'>Immediate mobilization of resources and teams after a disaster strikes. Immediate mobilisation of resources.</p>
                            </li>  
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] ">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Essential Aid Distribution</h2>
                                <p className='Immediatepositin'>Providing food, shelter, medical supplies, and hygiene tools critical for survival. Providing food, shelter, medical.</p>
                            </li>
                            <li className="poistioninag  p-[16px] md:p-[20px] xl:p-[21px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Focus on Vulnerable Communities</h2>
                                <p className='Immediatepositin'> Prioritizing assistance for the most at-risk individuals and families.  Prioritizing assistance for the most at-risk .</p>
                            </li>
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] !bg-[#E9E4E0]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Restoring Stability</h2>
                                <p className='Immediatepositin'>Helping displaced individuals rebuild their lives with a sense of security and hope. Helping displaced individuals.</p>
                            </li>
                        </ul>
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                    <div className='flex-1'>
                    <Image className='w-full object-cover h-full' src={image5} alt=""/>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] feature'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                    <div className='flex-1'>
                        <Image className='w-full object-cover h-full' src={image6} alt=""/>
                    </div>
                    <div className='flex-1'>
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Education</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Unlocking Potential and Building a Brighter Future</h2>
                        <p className='aidhasbeen mb-[16px] md:mb-[22px] xl:mb-[32px]'>At Hussain Aid, we believe education is the key to breaking the cycle of poverty and creating positive change. With 258 million children and youth still out of school globally, especially in crisis-affected.</p>
                        <ul className='grid grid-cols-1 gap-[16px] lg:gap-[20px] 2xl:gap-[24px] mb-[20px] md:mb-[30px] xl:mb-[40px]'>
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" className='w-[12px]' viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> 
                          <div className='lg:-mt-[5px] flex flex-col gap-[4px] lg:gap-[8px]'>
                            <h4>Medical Aid and Healthcare</h4>
                            <p className='providingschosn'>Providing schooling in underserved and crisis-affected areas.</p>
                          </div>
                          </li>  
                          <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" className='w-[12px]' viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> 
                          <div className='lg:-mt-[5px] flex flex-col gap-[4px] lg:gap-[8px]'>
                            <h4>School Fee Coverage</h4>
                            <p className='providingschosn'>Assisting families by covering school fees for children to attend.</p>
                          </div>
                          </li>  
                          <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" className='w-[12px]' viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> 
                          <div className='lg:-mt-[5px] flex flex-col gap-[4px] lg:gap-[8px]'>
                            <h4>Provision of School Supplies</h4>
                            <p className='providingschosn'>Distributing textbooks, stationery, and essential learning materials.</p>
                          </div>
                          </li>  
                          <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" className='w-[12px]' viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> 
                          <div className='lg:-mt-[5px] flex flex-col gap-[4px] lg:gap-[8px]'>
                            <h4>Teacher Training</h4>
                            <p className='providingschosn'>Offering additional training for teachers to improve educational quality, especially in girls' education.</p>
                          </div>
                          </li>  
                          <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><svg xmlns="http://www.w3.org/2000/svg" className='w-[12px]' viewBox="0 0 12 13" fill="none">
                            <circle cx="6" cy="6.5" r="6" fill="#CDA687"/>
                          </svg> 
                          <div className='lg:-mt-[5px] flex flex-col gap-[4px] lg:gap-[8px]'>
                            <h4>Vocational Training</h4>
                            <p className='providingschosn'>Equipping youth with employable skills and entrepreneurial training.</p>
                          </div>
                          </li>  
                        </ul>
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                    
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6] feature'>
              <div className=''>
                <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px] !text-center'>Empowering Communities for<br/> Economic Independence</h2>
                <p className='padidnsection mb-[20px] md:mb-[30px] xl:mb-[40px]'>Millions around the world live in unsafe and inadequate housing due to <br/> natural disasters, conflict, and financial hardship.</p>
              </div>
              <div className='flex justify-center pb-[24px] md:pb-[34px] xl:pb-[48px]'>
              <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px] text-center '>Donate Now</button></div>
                <div className='grid grid-cols-1 lg:grid-cols-3  justify-between items-center md:flex-row flex-col gap-[18px] lg:gap-[22px] xl:gap-[26px] 2xl:gap-[32px]'>
                    <div className=''>
                        <ul className='grid grid-cols-1 gap-[10px] lg:gap-[20px]'>
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Business Training & Support</h2>
                                <p className='Immediatepositin'>Helping individuals manage business operations, finances, and marketing to create strong, sustainable businesses.</p>
                            </li>  
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Microloan Programs</h2>
                                <p className='Immediatepositin'>Providing financial support for new and existing business owners to promote economic independence.</p>
                            </li> 
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Vocational Training</h2>
                                <p className='Immediatepositin'>Offering training in areas like carpentry, tailoring, and IT to help individuals secure stable jobs.</p>
                            </li> 
                        </ul>
                        
                    </div>
                    <div className=''>
                    <Image className='w-full object-cover h-full' src={image7} alt=""/>
                    </div>
                    <ul className='grid grid-cols-1 gap-[10px] lg:gap-[20px]'>
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Agricultural Development</h2>
                                <p className='Immediatepositin'>Supplying farmers with tools, seeds, and sustainable farming techniques to improve crop yields and income.</p>
                            </li>  
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Inclusivity & Support for Marginalized</h2>
                                <p className='Immediatepositin'>Focusing on empowering disadvantaged communities through economic development.</p>
                            </li> 
                            <li className="poistioninag p-[16px] md:p-[20px] xl:p-[21px] border-[1px] border-[#E9E4E0] rounded-[8px] lg:rounded-[12px]">
                                <h2 className='medicalhealthcarea pb-[8px] sm:pb-[12px] lg:pb-[16px]'>Islamic Ideals of Compassion</h2>
                                <p className='Immediatepositin'>Guided by values of dignity and compassion, fostering long-term community growth and prosperity.</p>
                            </li> 
                        </ul>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] feature'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                    <div className='flex-1'>
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Women and Welfare</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Empowering Women, Transforming Communities.</h2>
                        <p className='aidhasbeen mb-[16px] md:mb-[22px] xl:mb-[32px]'>Hussain Aid, we are dedicated to empowering women and promoting gender equality to create a brighter, more inclusive future for all. Women face many challenges.</p>
                        <ul className='flex flex-col gap-[10px] lg:gap-[16px] mb-[20px] md:mb-[30px] xl:mb-[40px] relative'>
                        <svg className='w-[1px] h-full absolute left-[5px] md:left-[8px] -top-[10px]' viewBox="0 0 1 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18561e-08" x2="0.499992" y2="193" stroke="url(#paint0_linear_648_419)" stroke-dasharray="4 4"/>
                        <defs>
                        <linearGradient id="paint0_linear_648_419" x1="-0.5" y1="-2.18561e-08" x2="-0.500008" y2="193" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0217436" stop-color="#CDA687" stop-opacity="0"/>
                        <stop offset="0.125593" stop-color="#CDA687"/>
                        <stop offset="0.250496" stop-color="#CDA687" stop-opacity="0"/>
                        <stop offset="0.374202" stop-color="#CDA687" stop-opacity="0"/>
                        <stop offset="0.493398" stop-color="#CDA687"/>
                        <stop offset="0.607146" stop-color="#CDA687" stop-opacity="0"/>
                        <stop offset="0.727548" stop-color="#CDA687" stop-opacity="0"/>
                        <stop offset="0.834898" stop-color="#CDA687"/>
                        <stop offset="0.970842" stop-color="#CDA687" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                        </svg>
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span className='xl:mt-[4px]'><svg className='w-[12px] md:w-[15px] lg:w-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#CDA687"/>
                            <path d="M7 9.24243L9.12132 11.3638L13.3635 7.12109M4.5 9.24243L6.62132 11.3638M10.864 7.12109L9.25 8.7498" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            <div>Education & Vocational Training: <span className='!font-[400]'>Equipping women with employable skills to secure meaningful jobs and improve their financial independence.</span></div></li>  
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span className='xl:mt-[4px]'><svg className='w-[12px] md:w-[15px] lg:w-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#CDA687"/>
                            <path d="M7 9.24243L9.12132 11.3638L13.3635 7.12109M4.5 9.24243L6.62132 11.3638M10.864 7.12109L9.25 8.7498" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            <div>Small Business Loans & Support: <span className='!font-[400]'>Providing small loans and guidance to help women start and grow their businesses.</span></div></li> 
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span className='xl:mt-[4px]'><svg className='w-[12px] md:w-[15px] lg:w-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#CDA687"/>
                            <path d="M7 9.24243L9.12132 11.3638L13.3635 7.12109M4.5 9.24243L6.62132 11.3638M10.864 7.12109L9.25 8.7498" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            <div>Leadership Programs: <span className='!font-[400]'>Enabling women to become community leaders and agents of change through leadership training.</span></div></li> 
                            <li className="medicalhealthcarea flex justify-start items-start gap-[8px] lg:gap-[12px]"><span className='xl:mt-[4px]'><svg className='w-[12px] md:w-[15px] lg:w-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#CDA687"/>
                            <path d="M7 9.24243L9.12132 11.3638L13.3635 7.12109M4.5 9.24243L6.62132 11.3638M10.864 7.12109L9.25 8.7498" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            <div>Healthcare & Well-being Support: <span className='!font-[400]'>Addressing women's health through healthcare services, promoting overall wellness and equality.</span></div></li> 
                        </ul>
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                    <div className='flex-1'>
                        <Image className='w-full object-cover h-full' src={image8} alt=""/>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6]'>
                <div className='grid grid-cols-1 md:grid-cols-5 justify-between items-center md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                    <div className='col-span-2'>
                        <div>
                        <span className='medicalkit pb-[8px] lg:pb-[12px]'>Food Banks</span>
                        <h2 className='hussainaid mb-[10] md:mb-[14px] xl:mb-[20px]'>Fighting Hunger and Supporting Vulnerable Communities</h2>
                        <p className='aidhasbeen mb-[30px] md:mb-[150px] xl:mb-[225px]'>Hussain Aid, we believe no one should go hungry. Our food bank programs partner with grassroots organisations across the UK to provide essential food supplies to those in need.</p>
                        </div>
                        
                        <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px]'>Donate Now</button>
                    </div>
                    <div className='col-span-3'>
                        <Image className='w-full object-cover h-full' src={image9} alt=""/>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px]'>
                <div className='flex justify-between items-end md:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[64px]'>
                        <div className='flex-1'>
                          <span className='medicalkit '>UK Programmes</span>
                            <h2 className='hussainaid mt-[20px] md:mt-[30px] xl:mt-[40px]'>Providing Essential <br className='hidden lg:block'/>
                            Support and Dignity to<br className='hidden lg:block'/>
                            the Homeless Communities</h2>
                        </div>
                        <p className='aidhasbeen flex-1'>In the UK, Hussain Aid is dedicated to improving the lives of the homeless and those facing financial hardship. Through food banks, basic aid distribution, and specialised support for vulnerable communities, we provide essential resources to those in need.<br/><br/>

                        Whether it's through meals at community centers or distributing winter packs and hygiene essentials, our goal is to offer practical and compassionate care to restore dignity and provide hope to the most vulnerable in the UK.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5'>
                    <div className='md:col-span-3 pt-[0px] md:pt-[20px] lg:pt-[38px] xl:pt-[57px]'><svg className='w-full' viewBox="0 0 1002 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="976.945" height="580.726" rx="16" transform="matrix(0.998847 -0.0480105 0.0480558 0.998845 -1 45.9033)" fill="black" fill-opacity="0.2"/>
                    </svg>
                    </div>
                    <div className='md:col-span-2'>
                      <div>
                          <div className='pt-[24px] sm:pt-[35px] md:pt-[50px] lg:pt-[70px] xl:pt-[94px] pl-[0px] md:pl-[20px] lg:pl-[38px] xl:pl-[57px]'>
                            <p className='hussingaiulk'>Hussain Aid's UK programs provide essential support to the homeless and those in financial crisis. We distribute food, winter clothing, and hygiene products.</p>
                            <button className='dontanowbtn px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px] mb-[20px] md:mb-[30px] xl:mb-[40px]'>Donate Now</button>
                          </div>
                        <Image className='w-full object-cover h-full' src={image10} alt=""/>
                      </div>
                    </div>
                </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6]'>
              <div className='flex justify-between mb-[16px] md:mb-[22px] xl:mb-[32px] md:flex-row flex-col md:gap-[0] gap-[20px]'>
                <div className='flex-1'>
                  <h2 className='hussainaid'>How You can help us!</h2>
                  <p className='unisportaws'>Your support can make a real difference! By joining our charity program, you can help provide essential resources to those in need.</p>
                </div>
                <div className='flex-1 flex gap-[14px] sm:gap-[18px] lg:gap-[24px] md:justify-end'>
                  <svg className='prevRef w-[35px] md:w-[45px] xl:w-[64px] cursor-pointer' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#F4F0EE"/>
                  <path d="M36.12 42.5604L27.4267 33.8671C26.4 32.8404 26.4 31.1604 27.4267 30.1338L36.12 21.4404" stroke="#504F4E" stroke-opacity="0.7" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg className='nextRef w-[35px] md:w-[45px] xl:w-[64px] cursor-pointer' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#F4F0EE"/>
                  <path d="M27.88 42.5604L36.5733 33.8671C37.6 32.8404 37.6 31.1604 36.5733 30.1338L27.88 21.4404" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className=''>
                <Swiper 
                navigation={{ prevEl: '.prevRef', nextEl: '.nextRef' }} 
                modules={[Navigation]} 
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },   // 📱 Small devices (1 slide)
                  770: { slidesPerView: 2, spaceBetween: 20 }, // 📱 Tablets (2 slides)
                  1224: { slidesPerView: 4, spaceBetween: 32 } // 🖥️ Large screens (4 slides)
                }}
                loop={true}
                className="mySwiper">
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                    <path d="M27.2369 47.6751L27.2369 47.6752L27.2413 47.6797L39.4043 59.9448L39.5596 60.1286L39.6927 60.2862L39.8461 60.1483L40.0372 59.9765L40.0375 59.9768L40.0456 59.9686L52.2375 47.6746L52.2376 47.6746L52.2419 47.67C53.8466 45.9453 54.7098 43.6896 54.6725 41.32C54.6352 38.9447 53.6958 36.7126 52.0272 35.0363C50.3184 33.3195 48.0451 32.3732 45.6277 32.3732C43.4523 32.3732 41.3753 33.1478 39.7368 34.5623C38.0984 33.1478 36.0213 32.3732 33.846 32.3732C31.4287 32.3732 29.1553 33.3194 27.4464 35.0363C25.7778 36.7126 24.8384 38.9447 24.8012 41.32C24.764 43.6898 25.6272 45.9454 27.2369 47.6751ZM25.651 41.3335L25.651 41.3334C25.6848 39.1792 26.536 37.1571 28.0481 35.638L28.0481 35.638C29.5971 34.0817 31.6555 33.2252 33.846 33.2252C35.9358 33.2252 37.9242 34.0136 39.4461 35.4456L39.5999 35.5902L39.7369 35.7192L39.874 35.5903L40.0277 35.4457L40.0277 35.4456C41.5497 34.0137 43.5382 33.2252 45.6279 33.2252C47.8183 33.2252 49.8769 34.0817 51.4258 35.638L51.5676 35.4969L51.4258 35.638C52.9377 37.1571 53.789 39.1792 53.8228 41.3334C53.8565 43.4819 53.075 45.5243 51.6275 47.0813L39.7368 59.0718L27.8513 47.0865C26.3987 45.5243 25.6173 43.4819 25.651 41.3335Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                    <path d="M36.9161 27.0103C36.3911 28.0135 36.4259 29.1891 37.009 30.1589C37.5921 31.1288 38.6107 31.7059 39.7374 31.7059C40.864 31.7059 41.8827 31.1288 42.4658 30.1589L42.4658 30.1589C43.049 29.1889 43.0838 28.0134 42.5589 27.0103L39.7375 21.6183L36.9161 27.0103ZM36.9161 27.0103L36.6503 26.8712L36.9161 27.0103ZM43.3651 30.7018L43.3651 30.7018C44.1383 29.4158 44.1846 27.8517 43.4887 26.5219C43.4887 26.5219 43.4887 26.5219 43.4887 26.5218L40.0033 19.8609L39.7374 19.3529L39.4716 19.8609L35.9863 26.5219L36.2521 26.6609L35.9863 26.5219C35.2905 27.8516 35.3365 29.4158 36.1098 30.7017C36.8832 31.988 38.2406 32.7578 39.7375 32.7578C41.2344 32.7578 42.5917 31.988 43.3651 30.7018Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                    <path d="M40.4916 35.9943L40.6259 36.137L40.4916 35.9943L39.7369 36.7045L38.9823 35.9944C38.9823 35.9944 38.9823 35.9944 38.9823 35.9944C37.587 34.6815 35.7626 33.9582 33.8461 33.9582C31.8373 33.9582 29.948 34.7445 28.528 36.1712C27.1419 37.5638 26.3615 39.4187 26.3306 41.3926L26.5306 41.3957L26.3306 41.3926C26.2998 43.3611 27.0159 45.2345 28.3474 46.6667L28.405 46.7325L28.4047 46.7327L28.4135 46.7415L39.5948 58.0088L39.7368 58.1519L39.8788 58.0087L51.0044 46.7931L51.0044 46.7931L51.0063 46.7912L51.1317 46.6613L51.1317 46.6613L51.1345 46.6583C52.461 45.2274 53.1742 43.3567 53.1435 41.3925C53.1124 39.4184 52.3321 37.5636 50.9459 36.1711C49.5259 34.7444 47.6367 33.9582 45.6278 33.9582C43.7114 33.9582 41.8869 34.6815 40.4916 35.9943ZM28.9707 46.0877C28.6963 45.7927 28.4518 45.4762 28.238 45.1425H35.0386V48.3772V48.5772H35.2386H37.3778V50.908V51.108H37.5778H41.6262H41.8262V50.908V48.5772H44.1453H44.3453V48.3772V45.1425H51.2362C51.0256 45.4712 50.7856 45.7829 50.5164 46.0735L50.3996 46.1945L50.3977 46.1964L39.7366 56.9438L29.0379 46.1637L28.9744 46.0917L28.9744 46.0916L28.9707 46.0877ZM38.2275 44.9426V42.6118H40.9763V44.9426V45.1426H41.1763H42.4358H43.4954V47.7253H41.1763H40.9763V47.9253V50.2561H38.2275V47.9253V47.7253H38.0275H35.8884V45.1426H37.0379H38.0275H38.2275V44.9426ZM42.4359 44.2907H41.8262V41.9599V41.7599H41.6262H37.5778H37.3778V41.9599V44.2907H37.038H35.2386H27.7757C27.3714 43.3973 27.1644 42.4165 27.1803 41.4059L27.1803 41.4059C27.2076 39.6529 27.9 38.0081 29.1295 36.7729L29.1295 36.7729C30.3896 35.5068 32.064 34.8101 33.846 34.8101C35.5461 34.8101 37.1632 35.4512 38.4006 36.6155L39.5998 37.7438L39.7369 37.8728L39.8739 37.7438L41.0731 36.6155L40.9361 36.4698L41.0732 36.6155C42.3106 35.4512 43.9277 34.8101 45.6277 34.8101C47.4097 34.8101 49.0841 35.5068 50.3441 36.7729L50.4859 36.6318L50.3442 36.7729C51.5737 38.0081 52.266 39.6529 52.2934 41.4059L52.2934 41.4059C52.3094 42.4166 52.1023 43.3976 51.6984 44.2907H44.1453H42.4359ZM26.9803 41.4028C27.0085 39.5983 27.7214 37.904 28.9877 36.6318C30.2853 35.3281 32.0107 34.6101 33.846 34.6101C35.597 34.6101 37.2631 35.2707 38.5376 36.4698L26.9803 41.4028Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                  </svg>
                  <div>
                    <h3 className='sujespost'>Support Mental Health</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Help raise awareness and support 
                    for mental health issues</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                  <svg className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                  <g clip-path="url(#clip0_648_597)">
                  <path d="M32.7657 37.027L32.7656 37.027L32.7662 37.0306C32.8299 37.4449 32.9102 37.8631 33.0391 38.3304L33.0415 38.339L33.0444 38.3474C33.2778 39.0322 33.6002 39.6849 33.9957 40.3054C33.9705 41.102 33.5952 41.8351 32.9616 42.3069L32.9608 42.3075C32.5493 42.6162 32.3706 43.1129 32.4886 43.6438L32.4907 43.6534L32.4935 43.6627C32.6355 44.1497 33.0414 44.4957 33.5113 44.5774L33.5113 44.5775L33.5185 44.5786C34.9992 44.7991 36.5396 44.5045 37.8216 43.7661C38.6516 44.1931 39.5522 44.5044 40.5351 44.701L40.5442 44.7029L40.5534 44.7041C40.9152 44.7534 41.2892 44.7694 41.6565 44.7694C42.0778 44.7694 42.4961 44.737 42.9096 44.6893L42.9096 44.6894L42.9176 44.6882C45.2926 44.3489 47.411 43.1042 48.8498 41.1803C50.2875 39.258 50.9022 36.8816 50.5629 34.5057C49.8835 29.5755 45.3251 26.1492 40.4113 26.8442C35.4966 27.5394 32.0707 32.1136 32.7657 37.027ZM42.6293 42.5474L42.6286 42.5475C42.0205 42.6365 41.4116 42.6372 40.8923 42.5792C39.9737 42.3819 39.1036 42.0505 38.3257 41.5867L38.3182 41.5822L38.3105 41.5782L37.9199 41.3751L37.7841 41.3045L37.6473 41.3729L37.2723 41.5604L37.2605 41.5663L37.2492 41.5732L37.0461 41.6982L37.04 41.702L37.0341 41.706C36.6139 41.993 36.1414 42.2019 35.6468 42.3313C35.9827 41.6592 36.153 40.9028 36.1283 40.1364L36.1283 40.1317C36.1284 40.064 36.1285 39.9547 36.1106 39.8523L36.0962 39.6651L36.0904 39.5903L36.0502 39.527L35.9408 39.3552L35.9409 39.3551L35.9373 39.3498C35.5749 38.8063 35.2769 38.2389 35.084 37.6781C34.9934 37.345 34.9195 37.0174 34.8754 36.7085C34.6209 34.8968 35.0846 33.1012 36.1783 31.633C37.2701 30.1672 38.8854 29.2243 40.6982 28.9696L40.6992 28.9694C44.4401 28.4307 47.9142 31.0498 48.4533 34.7934C48.992 38.5343 46.3729 42.0083 42.6293 42.5474Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                  <path d="M42.1299 20.2156V20.2157C50.2283 20.3432 56.6879 26.8008 56.8002 34.854C56.8478 37.0064 56.433 39.0955 55.5883 41.056C54.1188 44.4745 53.3783 47.95 53.3783 51.3906V54.3437C53.3783 55.3945 52.6351 56.2826 51.6205 56.4819L35.3715 59.716C35.2913 59.7321 35.1726 59.7531 35.0627 59.7531C34.7172 59.7531 34.37 59.6386 34.0961 59.4234C33.748 59.1521 33.5205 58.7312 33.4825 58.2749L33.482 58.2689L33.482 58.2689L33.357 56.2845L33.3568 56.2811C33.3185 55.54 33.2592 54.7045 33.2132 54.0561C33.2104 54.0169 33.2077 53.9784 33.205 53.9406H31.8752C31.8141 53.9406 31.7445 53.944 31.6628 53.948L31.6613 53.9481C31.5838 53.9519 31.4964 53.9561 31.4113 53.9562L31.4007 53.9566C30.4217 53.9872 29.0676 54.0295 28.0479 53.0966M42.1299 20.2156L28.2502 52.875M42.1299 20.2156H42.1252H42.1247H42.1243H42.1238H42.1234H42.1229H42.1225H42.122H42.1215H42.1211H42.1206H42.1202H42.1197H42.1193H42.1188H42.1183H42.1179H42.1174H42.117H42.1165H42.116H42.1156H42.1151H42.1147H42.1142H42.1138H42.1133H42.1128H42.1124H42.1119H42.1115H42.111H42.1106H42.1101H42.1096H42.1092H42.1087H42.1083H42.1078H42.1073H42.1069H42.1064H42.106H42.1055H42.1051H42.1046H42.1041H42.1037H42.1032H42.1028H42.1023H42.1018H42.1014H42.1009H42.1005H42.1H42.0995H42.0991H42.0986H42.0982H42.0977H42.0973H42.0968H42.0963H42.0959H42.0954H42.095H42.0945H42.094H42.0936H42.0931H42.0927H42.0922H42.0917H42.0913H42.0908H42.0904H42.0899H42.0894H42.089H42.0885H42.0881H42.0876H42.0871H42.0867H42.0862H42.0858H42.0853H42.0848H42.0844H42.0839H42.0835H42.083H42.0825H42.0821H42.0816H42.0812H42.0807H42.0802H42.0798H42.0793H42.0788H42.0784H42.0779H42.0775H42.077H42.0765H42.0761H42.0756H42.0752H42.0747H42.0742H42.0738H42.0733H42.0728H42.0724H42.0719H42.0715H42.071H42.0705H42.0701H42.0696H42.0691H42.0687H42.0682H42.0678H42.0673H42.0668H42.0664H42.0659H42.0654H42.065H42.0645H42.064H42.0636H42.0631H42.0627H42.0622H42.0617H42.0613H42.0608H42.0603H42.0599H42.0594H42.0589H42.0585H42.058H42.0575H42.0571H42.0566H42.0561H42.0557H42.0552H42.0547H42.0543H42.0538H42.0534H42.0529H42.0524H42.052H42.0515H42.051H42.0506H42.0501H42.0496H42.0492H42.0487H42.0482H42.0477H42.0473H42.0468H42.0463H42.0459H42.0454H42.0449H42.0445H42.044H42.0435H42.0431H42.0426H42.0421H42.0417H42.0412H42.0407H42.0402H42.0398H42.0393H42.0388H42.0384H42.0379H42.0374H42.037H42.0365H42.036H42.0355H42.0351H42.0346H42.0341H42.0337H42.0332H42.0327H42.0322H42.0318H42.0313H42.0308H42.0304H42.0299H42.0294H42.0289H42.0285H42.028H42.0275H42.027H42.0266H42.0261H42.0256H42.0252H42.0247H42.0242H42.0237H42.0233H42.0228H42.0223H42.0218H42.0214H42.0209H42.0204H42.0199H42.0195H42.019H42.0185H42.018H42.0175H42.0171H42.0166H42.0161H42.0156H42.0152H42.0147H42.0142H42.0137H42.0133H42.0128H42.0123H42.0118H42.0113H42.0109H42.0104H42.0099H42.0094H42.0089H42.0085H42.008H42.0075H42.007H42.0065H42.0061H42.0056H42.0051H42.0046H42.0041H42.0037H42.0032H42.0027H42.0022H42.0017H42.0012H42.0008H42.0003H41.9998H41.9993H41.9988H41.9983H41.9979H41.9974H41.9969H41.9964H41.9959H41.9954H41.995H41.9945H41.994H41.9935H41.993H41.9925H41.992H41.9916H41.9911H41.9906H41.9901H41.9896H41.9891H41.9886H41.9881H41.9877H41.9872H41.9867H41.9862H41.9857H41.9852H41.9847H41.9842H41.9838H41.9833H41.9828H41.9823H41.9818H41.9813H41.9808H41.9803H41.9798H41.9793H41.9788H41.9784H41.9779H41.9774H41.9769H41.9764H41.9759H41.9754H41.9749H41.9744H41.9739H41.9734H41.9729H41.9724H41.9719H41.9714H41.9709H41.9705H41.97H41.9695H41.969H41.9685H41.968H41.9675H41.967H41.9665H41.966H41.9655H41.965H41.9645H41.964H41.9635H41.963H41.9625H41.962H41.9615H41.961H41.9605H41.96H41.9595H41.959H41.9585H41.958H41.9575H41.957H41.9565H41.956H41.9555H41.955H41.9545H41.954H41.9535H41.953H41.9525H41.952H41.9514H41.9509H41.9504H41.9499H41.9494H41.9489H41.9484H41.9479H41.9474H41.9469H41.9464H41.9459H41.9454H41.9449H41.9444H41.9438H41.9433H41.9428H41.9423H41.9418H41.9413H41.9408H41.9403H41.9398H41.9393H41.9387H41.9382H41.9377H41.9372H41.9367H41.9362H41.9357H41.9352H41.9346H41.9341H41.9336H41.9331H41.9326H41.9321H41.9316H41.931H41.9305H41.93H41.9295H41.929H41.9285H41.9279H41.9274H41.9269H41.9264H41.9259H41.9254H41.9248H41.9243H41.9238H41.9233H41.9228H41.9222H41.9217H41.9212H41.9207H41.9202H41.9196H41.9191H41.9186H41.9181H41.9175H41.917H41.9165H41.916H41.9154H41.9149H41.9144H41.9139H41.9133H41.9128H41.9123H41.9118H41.9112H41.9107H41.9102H41.9097H41.9091H41.9086H41.9081H41.9075H41.907H41.9065H41.906H41.9054H41.9049H41.9044H41.9038H41.9033H41.9028H41.9022H41.9017H41.9012H41.9006H41.9001H41.8996H41.899H41.8985H41.898H41.8974H41.8969H41.8964H41.8958H41.8953H41.8948H41.8942H41.8937H41.8931H41.8926H41.8921H41.8915H41.891H41.8904H41.8899H41.8894H41.8888H41.8883H41.8877H41.8872H41.8867H41.8861H41.8856H41.885H41.8845H41.8839H41.8834H41.8829H41.8823H41.8818H41.8812H41.8807H41.8801H41.8796H41.879H41.8785H41.8779H41.8774H41.8768H41.8763H41.8758H41.8752C36.0079 20.2156 30.6663 23.6435 28.2425 29.0013L28.2423 29.0017C27.3661 30.9454 26.9033 33.0186 26.9033 35.1719V35.1723V35.1728V35.1733V35.1738V35.1743V35.1748V35.1753V35.1758V35.1763V35.1769V35.1774V35.178V35.1785V35.1791V35.1797V35.1802V35.1808V35.1814V35.182V35.1827V35.1833V35.1839V35.1846V35.1852V35.1859V35.1865V35.1872V35.1879V35.1886V35.1893V35.19V35.1907V35.1914V35.1922V35.1929V35.1936V35.1944V35.1952V35.1959V35.1967V35.1975V35.1983V35.1991V35.1999V35.2007V35.2016V35.2024V35.2032V35.2041V35.2049V35.2058V35.2067V35.2076V35.2085V35.2094V35.2103V35.2112V35.2121V35.213V35.214V35.2149V35.2159V35.2168V35.2178V35.2188V35.2198V35.2208V35.2218V35.2228V35.2238V35.2248V35.2258V35.2269V35.2279V35.229V35.2301V35.2311V35.2322V35.2333V35.2344V35.2355V35.2366V35.2377V35.2389V35.24V35.2411V35.2423V35.2435V35.2446V35.2458V35.247V35.2482V35.2494V35.2506V35.2518V35.253V35.2542V35.2555V35.2567V35.258V35.2592V35.2605V35.2618V35.263V35.2643V35.2656V35.2669V35.2683V35.2696V35.2709V35.2722V35.2736V35.2749V35.2763V35.2777V35.279V35.2804V35.2818V35.2832V35.2846V35.286V35.2875V35.2889V35.2903V35.2918V35.2932V35.2947V35.2961V35.2976V35.2991V35.3006V35.3021V35.3036V35.3051V35.3066V35.3081V35.3097V35.3112V35.3128V35.3143V35.3159V35.3175V35.3191V35.3206V35.3222V35.3238V35.3254V35.3271V35.3287V35.3303V35.332V35.3336V35.3353V35.3369V35.3386V35.3403V35.342V35.3437V35.3454V35.3471V35.3488V35.3505V35.3522V35.354V35.3557V35.3575V35.3592V35.361V35.3628V35.3645V35.3663V35.3681V35.3699V35.3717V35.3736V35.3754V35.3772V35.3791V35.3809V35.3828V35.3846V35.3865V35.3884V35.3903V35.3922V35.3941V35.396V35.3979V35.3998V35.4017V35.4037V35.4056V35.4076V35.4095V35.4115V35.4135V35.4154V35.4174V35.4194V35.4214V35.4234V35.4254V35.4275V35.4295V35.4315V35.4336V35.4356V35.4377V35.4398V35.4418V35.4439V35.446V35.4481V35.4502V35.4523V35.4544V35.4565V35.4587V35.4608V35.463V35.4651V35.4673V35.4694V35.4716V35.4738V35.476V35.4782V35.4804V35.4826V35.4848V35.487V35.4893V35.4915V35.4937V35.496V35.4983V35.5005V35.5028V35.5051V35.5074V35.5097V35.512V35.5143V35.5166V35.5189V35.5212V35.5236V35.5259V35.5283V35.5306V35.533V35.5354V35.5377V35.5401V35.5425V35.5449V35.5473V35.5497V35.5522V35.5546V35.557V35.5595V35.5619V35.5644V35.5668V35.5693V35.5718V35.5743V35.5767V35.5792V35.5818V35.5843V35.5868V35.5893V35.5918V35.5944V35.5969V35.5995V35.602V35.6046V35.6072V35.6097V35.6123V35.6149V35.6175V35.6201V35.6227V35.6254V35.628V35.6306V35.6333V35.6359V35.6386V35.6412V35.6439V35.6466V35.6493V35.6519V35.6546V35.6573V35.6601V35.6628V35.6655V35.6682V35.671V35.6737V35.6764V35.6792V35.682V35.6847V35.6875V35.6903V35.6931V35.6959V35.6987V35.7015V35.7043V35.7071V35.71V35.7128V35.7156V35.7185V35.7213V35.7242V35.7271V35.73V35.7328V35.7357V35.7386V35.7415V35.7444V35.7473V35.7503V35.7532V35.7561V35.7591V35.762V35.765V35.7679V35.7709V35.7739V35.7769V35.7799V35.7829V35.7859V35.7889V35.7919V35.7949V35.7979V35.801V35.804V35.807V35.8101V35.8132V35.8162V35.8193V35.8224V35.8255V35.8286V35.8317V35.8348V35.8379V35.841V35.8441V35.8472V35.8504V35.8535V35.8567V35.8598V35.863V35.8662V35.8693V35.8725V35.8757V35.8789V35.8821V35.8853V35.8885V35.8918V35.895V35.8982V35.9015V35.9047V35.908V35.9112V35.9145V35.9178V35.921V35.9243V35.9276V35.9309V35.9342V35.9375V35.9408V35.9442V35.9475V35.9508V35.9542V35.9575V35.9609V35.9642V35.9676V35.971V35.9743V35.9777V35.9811V35.9845V35.9879V35.9913V35.9947V35.9982V36.0016V36.005V36.0085V36.0119V36.0154V36.0188V36.0223V36.0258V36.0292V36.0327V36.0362V36.0397V36.0432V36.0467V36.0502V36.0538V36.0573V36.0608V36.0644V36.0679V36.0715V36.075V36.0786V36.0822V36.0857V36.0893V36.0929V36.0965V36.1001V36.1037V36.1073V36.1109V36.1146V36.1182V36.1218V36.1255V36.1291V36.1328V36.1364V36.1401V36.1438V36.1475V36.1511V36.1548V36.1585V36.1622V36.1659V36.1697V36.1734V36.1771V36.1808V36.1846V36.1883V36.1921V36.1958V36.1996V36.2034V36.2071V36.2109V36.2147V36.2185V36.2223V36.2261V36.2299V36.2337V36.2375V36.2414V36.2452V36.249V36.2529V36.2567V36.2606V36.2645V36.2683V36.2722V36.2761V36.28V36.2839V36.2878V36.2917V36.2956V36.2995V36.3034V36.3073V36.3113V36.3152V36.3192V36.3231V36.3271V36.331V36.335V36.339V36.3404C26.805 36.7333 26.4558 37.1512 26.0106 37.5811L26.0105 37.581L26.0068 37.5847C25.8506 37.741 25.6033 37.9883 25.3255 38.2506L25.3254 38.2506L25.3215 38.2545C25.0762 38.4949 24.8602 38.7045 24.6728 38.8863C24.5614 38.9944 24.4601 39.0927 24.3688 39.1818C24.1312 39.4137 23.9538 39.5902 23.8635 39.6986L23.8633 39.6984L23.8556 39.7084C23.6504 39.9767 23.3877 40.3399 23.2457 40.7836L23.2457 40.7837C23.0352 41.4426 23.1856 41.9535 23.4443 42.3211C23.6735 42.6467 23.9823 42.85 24.1309 42.9479C24.1422 42.9553 24.1526 42.9621 24.1619 42.9684L24.1654 42.9706C24.4472 43.153 24.7593 43.3169 25.1472 43.4787M42.1299 20.2156L25.1472 43.4787M28.0479 53.0966C28.0478 53.0965 28.0477 53.0964 28.0477 53.0963L28.2502 52.875M28.0479 53.0966C28.048 53.0966 28.048 53.0966 28.0481 53.0967L28.2502 52.875M28.0479 53.0966C27.4469 52.5485 27.1141 51.7529 26.9992 50.7703C26.9992 50.7699 26.9991 50.7695 26.9991 50.7691L26.9981 50.7625L26.9922 50.7225L26.9689 50.5673L26.8826 49.9982L26.5962 48.1154C26.3816 46.7049 26.126 45.0231 25.9469 43.8332M28.2502 52.875C27.719 52.3906 27.4065 51.6719 27.2971 50.7344C27.2971 50.7277 27.167 49.8729 26.9899 48.7086C26.7506 47.1359 26.4255 44.9987 26.219 43.625M25.9469 43.8332C25.9575 43.8381 25.9681 43.8431 25.9786 43.848C26.0116 43.8645 26.0579 43.8875 26.1241 43.9096L26.219 43.625M25.9469 43.8332C25.7838 43.7572 25.6119 43.6822 25.4361 43.6055C25.3407 43.5639 25.2441 43.5217 25.1472 43.4787M25.9469 43.8332C25.9385 43.7776 25.9303 43.723 25.9223 43.6696L26.0753 43.6466L26.1096 43.5781M26.219 43.625L26.0775 43.6463M26.219 43.625C26.1721 43.6094 26.1408 43.5937 26.1096 43.5781M26.0775 43.6463L23.5315 40.875C23.1841 41.9625 23.9901 42.4951 24.2983 42.6988C24.3089 42.7059 24.3189 42.7125 24.3283 42.7187C24.594 42.8906 24.8908 43.0469 25.2658 43.2031M26.0775 43.6463L26.1096 43.5781M26.0775 43.6463L25.1472 43.4787M26.1096 43.5781C25.9325 43.4948 25.7415 43.4115 25.5506 43.3281C25.4551 43.2865 25.3596 43.2448 25.2658 43.2031M25.2658 43.2031L25.144 43.4773C25.145 43.4777 25.1461 43.4782 25.1472 43.4787M25.2658 43.2031L25.1504 43.48C25.1493 43.4796 25.1483 43.4791 25.1472 43.4787M53.6467 40.2559L53.6464 40.2567C52.0691 43.9318 51.2627 47.6906 51.2627 51.4375V54.375C51.2627 54.383 51.2598 54.3915 51.2542 54.3985C51.249 54.4051 51.2434 54.4079 51.2382 54.4089L35.6056 57.5141L35.5184 56.1685C35.5183 56.1684 35.5183 56.1683 35.5183 56.1682C35.4168 54.567 35.358 53.7247 35.3207 53.2666C35.284 52.8161 35.267 52.7211 35.2448 52.6322C35.2447 52.6316 35.2445 52.631 35.2444 52.6304L35.1046 52.0402L35.05 51.8094H34.8127H34.0627H31.8908H31.8849C31.7202 51.8094 31.5407 51.8094 31.3589 51.8253C31.3384 51.8257 31.318 51.8261 31.2977 51.8265C30.9179 51.8341 30.5606 51.8413 30.2425 51.8036C29.9031 51.7635 29.659 51.677 29.5015 51.5304L29.5016 51.5303L29.4946 51.5242C29.3332 51.383 29.2026 51.0915 29.1258 50.5077L29.1248 50.5004L29.1235 50.4932L29.1235 50.4932C29.1234 50.493 29.123 50.4907 29.1221 50.4849L29.1186 50.463L29.1068 50.3882L29.0669 50.1303C29.0336 49.9141 28.9877 49.6145 28.9335 49.2596C28.8251 48.55 28.6835 47.6199 28.5429 46.6951C28.4023 45.7704 28.2626 44.8509 28.1581 44.1627L28.032 43.332L27.9968 43.0997L27.9875 43.0385L27.9851 43.0228L27.9847 43.0201L27.9845 43.0188L27.9844 43.0178L27.9843 43.0176L27.9534 42.8013L27.9416 42.7185L27.8886 42.6538L27.748 42.4819L27.7431 42.4759L27.7378 42.4701L27.5816 42.2982L27.5676 42.2828L27.5516 42.2695C27.3271 42.0824 27.0886 41.9899 26.9353 41.9382L26.8371 41.8961L26.8371 41.8961L26.8332 41.8945C26.5756 41.7884 26.3167 41.6666 26.0498 41.5411L26.0498 41.541L26.0452 41.5389C25.7976 41.4275 25.6048 41.3281 25.4314 41.2239C25.4687 41.1685 25.5099 41.1121 25.5507 41.0577C25.5664 41.038 25.6195 40.9807 25.7134 40.8858C25.8042 40.7941 25.9207 40.6795 26.0489 40.5552C26.3052 40.3067 26.6045 40.0229 26.8296 39.8133L26.8298 39.8135L26.8373 39.8059C26.9761 39.6671 27.1114 39.5357 27.2323 39.4187C27.2497 39.4019 27.2668 39.3853 27.2836 39.369C27.3822 39.2737 27.4706 39.1882 27.5391 39.1198C28.1672 38.5072 28.8835 37.6875 29.0599 36.6232L29.0725 36.5728L29.0815 36.5369V36.5V36.4375V36.4332V36.4289V36.4246V36.4203V36.4161V36.4118V36.4075V36.4033V36.399V36.3948V36.3906V36.3863V36.3821V36.3779V36.3737V36.3695V36.3653V36.3611V36.3569V36.3527V36.3486V36.3444V36.3402V36.3361V36.3319V36.3278V36.3237V36.3196V36.3154V36.3113V36.3072V36.3031V36.299V36.2949V36.2909V36.2868V36.2827V36.2787V36.2746V36.2706V36.2665V36.2625V36.2585V36.2545V36.2504V36.2464V36.2424V36.2384V36.2345V36.2305V36.2265V36.2225V36.2186V36.2146V36.2107V36.2067V36.2028V36.1989V36.195V36.1911V36.1872V36.1833V36.1794V36.1755V36.1716V36.1677V36.1639V36.16V36.1561V36.1523V36.1485V36.1446V36.1408V36.137V36.1332V36.1294V36.1256V36.1218V36.118V36.1142V36.1104V36.1067V36.1029V36.0992V36.0954V36.0917V36.088V36.0842V36.0805V36.0768V36.0731V36.0694V36.0657V36.062V36.0584V36.0547V36.051V36.0474V36.0437V36.0401V36.0364V36.0328V36.0292V36.0256V36.022V36.0184V36.0148V36.0112V36.0076V36.004V36.0005V35.9969V35.9934V35.9898V35.9863V35.9828V35.9792V35.9757V35.9722V35.9687V35.9652V35.9617V35.9582V35.9548V35.9513V35.9478V35.9444V35.9409V35.9375V35.934V35.9306V35.9272V35.9238V35.9204V35.917V35.9136V35.9102V35.9068V35.9034V35.9001V35.8967V35.8934V35.89V35.8867V35.8834V35.88V35.8767V35.8734V35.8701V35.8668V35.8635V35.8603V35.857V35.8537V35.8505V35.8472V35.844V35.8407V35.8375V35.8343V35.8311V35.8279V35.8247V35.8215V35.8183V35.8151V35.8119V35.8088V35.8056V35.8024V35.7993V35.7962V35.793V35.7899V35.7868V35.7837V35.7806V35.7775V35.7744V35.7713V35.7682V35.7652V35.7621V35.7591V35.756V35.753V35.75V35.7469V35.7439V35.7409V35.7379V35.7349V35.7319V35.729V35.726V35.723V35.7201V35.7171V35.7142V35.7112V35.7083V35.7054V35.7025V35.6996V35.6967V35.6938V35.6909V35.688V35.6851V35.6823V35.6794V35.6766V35.6737V35.6709V35.6681V35.6653V35.6625V35.6596V35.6569V35.6541V35.6513V35.6485V35.6457V35.643V35.6402V35.6375V35.6347V35.632V35.6293V35.6266V35.6239V35.6212V35.6185V35.6158V35.6131V35.6104V35.6078V35.6051V35.6025V35.5998V35.5972V35.5946V35.592V35.5893V35.5867V35.5841V35.5816V35.579V35.5764V35.5738V35.5713V35.5687V35.5662V35.5636V35.5611V35.5586V35.5561V35.5536V35.5511V35.5486V35.5461V35.5436V35.5412V35.5387V35.5362V35.5338V35.5314V35.5289V35.5265V35.5241V35.5217V35.5193V35.5169V35.5145V35.5121V35.5097V35.5074V35.505V35.5027V35.5003V35.498V35.4957V35.4934V35.4911V35.4888V35.4865V35.4842V35.4819V35.4796V35.4774V35.4751V35.4729V35.4706V35.4684V35.4662V35.4639V35.4617V35.4595V35.4573V35.4551V35.453V35.4508V35.4486V35.4465V35.4443V35.4422V35.44V35.4379V35.4358V35.4337V35.4316V35.4295V35.4274V35.4253V35.4233V35.4212V35.4191V35.4171V35.4151V35.413V35.411V35.409V35.407V35.405V35.403V35.401V35.399V35.397V35.3951V35.3931V35.3912V35.3892V35.3873V35.3854V35.3835V35.3816V35.3797V35.3778V35.3759V35.374V35.3721V35.3703V35.3684V35.3666V35.3648V35.3629V35.3611V35.3593V35.3575V35.3557V35.3539V35.3521V35.3503V35.3486V35.3468V35.3451V35.3433V35.3416V35.3399V35.3382V35.3364V35.3347V35.333V35.3314V35.3297V35.328V35.3263V35.3247V35.323V35.3214V35.3198V35.3182V35.3165V35.3149V35.3133V35.3117V35.3102V35.3086V35.307V35.3055V35.3039V35.3024V35.3008V35.2993V35.2978V35.2963V35.2948V35.2933V35.2918V35.2903V35.2889V35.2874V35.2859V35.2845V35.2831V35.2816V35.2802V35.2788V35.2774V35.276V35.2746V35.2732V35.2719V35.2705V35.2691V35.2678V35.2664V35.2651V35.2638V35.2625V35.2612V35.2599V35.2586V35.2573V35.256V35.2548V35.2535V35.2522V35.251V35.2498V35.2485V35.2473V35.2461V35.2449V35.2437V35.2425V35.2414V35.2402V35.239V35.2379V35.2367V35.2356V35.2345V35.2334V35.2322V35.2311V35.2301V35.229V35.2279V35.2268V35.2258V35.2247V35.2237V35.2226V35.2216V35.2206V35.2196V35.2186V35.2176V35.2166V35.2156V35.2146V35.2137V35.2127V35.2118V35.2108V35.2099V35.209V35.2081V35.2072V35.2063V35.2054V35.2045V35.2037V35.2028V35.2019V35.2011V35.2003V35.1994V35.1986V35.1978V35.197V35.1962V35.1954V35.1946V35.1939V35.1931V35.1924V35.1916V35.1909V35.1902V35.1894V35.1887V35.188V35.1873V35.1867V35.186V35.1853V35.1847V35.184V35.1834V35.1827V35.1821V35.1815V35.1809V35.1803V35.1797V35.1791V35.1785V35.178V35.1774V35.1769V35.1763V35.1758V35.1753V35.1748V35.1743V35.1738V35.1733V35.1728V35.1723V35.1719C29.0815 33.3237 29.4631 31.5539 30.226 29.8907L30.2267 29.8893C32.3334 25.2331 36.9896 22.2861 42.1207 22.3625C49.0516 22.4694 54.5925 27.9938 54.7315 34.9249C54.7311 36.7756 54.3793 38.5619 53.6467 40.2559ZM26.9994 50.7714C26.9995 50.7722 26.9994 50.7718 26.9993 50.7707L26.9994 50.7714Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_648_597">
                  <rect width="40" height="40" fill="white" transform="translate(20 20)"/>
                  </clipPath>
                  </defs>
                  </svg>

                  <div>
                    <h3 className='sujespost'>Volunteer</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Join us and lend your skills to help others. Join us and lend.</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                  <path d="M27.2369 41.1019L27.2369 41.102L27.2413 41.1065L39.4043 53.3716L39.5596 53.5554L39.6927 53.7129L39.8461 53.5751L40.0372 53.4033L40.0375 53.4035L40.0456 53.3953L52.2375 41.1013L52.2376 41.1014L52.2419 41.0967C53.8466 39.3721 54.7098 37.1163 54.6725 34.7468C54.6352 32.3715 53.6958 30.1394 52.0272 28.4631C50.3184 26.7462 48.0451 25.8 45.6277 25.8C43.4523 25.8 41.3753 26.5746 39.7368 27.989C38.0984 26.5746 36.0213 25.8 33.846 25.8C31.4287 25.8 29.1553 26.7461 27.4464 28.4631C25.7778 30.1394 24.8384 32.3715 24.8012 34.7468C24.764 37.1165 25.6272 39.3721 27.2369 41.1019ZM25.651 34.7602L25.651 34.7602C25.6848 32.606 26.536 30.5839 28.0481 29.0648L28.0481 29.0648C29.5971 27.5085 31.6555 26.6519 33.846 26.6519C35.9358 26.6519 37.9242 27.4404 39.4461 28.8723L39.5999 29.017L39.7369 29.146L39.874 29.017L40.0277 28.8724L40.0277 28.8724C41.5497 27.4404 43.5382 26.6519 45.6279 26.6519C47.8183 26.6519 49.8769 27.5085 51.4258 29.0648L51.5676 28.9237L51.4258 29.0648C52.9377 30.5839 53.789 32.606 53.8228 34.7601C53.8565 36.9087 53.075 38.9511 51.6275 40.508L39.7368 52.4986L27.8513 40.5133C26.3987 38.9511 25.6173 36.9086 25.651 34.7602Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                  <path d="M40.4917 29.4211L40.6259 29.5637L40.4917 29.4211L39.737 30.1313L38.9823 29.4212C38.9823 29.4212 38.9823 29.4212 38.9823 29.4212C37.587 28.1082 35.7626 27.385 33.8461 27.385C31.8373 27.385 29.948 28.1713 28.5281 29.5979C27.1419 30.9906 26.3616 32.8455 26.3306 34.8193L26.5306 34.8225L26.3306 34.8193C26.2998 36.7879 27.0159 38.6613 28.3474 40.0935L28.405 40.1592L28.4047 40.1595L28.4135 40.1683L39.5948 51.4355L39.7368 51.5786L39.8788 51.4355L51.0044 40.2199L51.0044 40.2199L51.0063 40.2179L51.1317 40.0881L51.1318 40.0881L51.1345 40.0851C52.461 38.6542 53.1743 36.7835 53.1435 34.8193C53.1125 32.8452 52.3321 30.9904 50.946 29.5978C49.5259 28.1712 47.6367 27.385 45.6279 27.385C43.7114 27.385 41.8869 28.1082 40.4917 29.4211ZM28.9708 39.5144C28.6963 39.2195 28.4519 38.903 28.238 38.5693H35.0387V41.8039V42.0039H35.2387H37.3778V44.3347V44.5347H37.5778H41.6263H41.8263V44.3347V42.0039H44.1453H44.3453V41.8039V38.5693H51.2363C51.0257 38.898 50.7856 39.2097 50.5165 39.5003L50.3996 39.6213L50.3978 39.6232L39.7367 50.3706L29.0379 39.5905L28.9744 39.5184L28.9745 39.5184L28.9708 39.5144ZM38.2275 38.3694V36.0386H40.9763V38.3694V38.5694H41.1763H42.4359H43.4954V41.1521H41.1763H40.9763V41.3521V43.6829H38.2275V41.3521V41.1521H38.0275H35.8884V38.5694H37.0379H38.0275H38.2275V38.3694ZM42.436 37.7174H41.8263V35.3867V35.1867H41.6263H37.5778H37.3778V35.3867V37.7174H37.038H35.2387H27.7757C27.3714 36.824 27.1644 35.8433 27.1803 34.8327L27.1803 34.8326C27.2077 33.0797 27.9 31.4349 29.1295 30.1996L29.1295 30.1996C30.3896 28.9335 32.064 28.2369 33.846 28.2369C35.5461 28.2369 37.1632 28.878 38.4006 30.0422L39.5998 31.1706L39.7369 31.2995L39.8739 31.1706L41.0732 30.0422L40.9361 29.8966L41.0732 30.0422C42.3106 28.8779 43.9278 28.2369 45.6278 28.2369C47.4097 28.2369 49.0841 28.9335 50.3442 30.1996L50.4859 30.0585L50.3442 30.1996C51.5737 31.4349 52.266 33.0797 52.2935 34.8327L52.2935 34.8327C52.3095 35.8433 52.1023 36.8244 51.6984 37.7174H44.1453H42.436ZM26.9803 34.8295C27.0085 33.0251 27.7215 31.3307 28.9877 30.0585C30.2853 28.7548 32.0107 28.0369 33.846 28.0369C35.597 28.0369 37.2632 28.6974 38.5376 29.8966L26.9803 34.8295Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                </svg>
                  <div>
                    <h3 className='sujespost'>Emergency Help</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>We can turn compassion into action and build a brighter future.</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5941 26.2163C26.2168 27.4611 25.3117 28.9259 23.9198 28.9259H23.7037C23.1141 28.9259 22.5496 29.16 22.1319 29.5763C21.7156 29.9941 21.4815 30.5585 21.4815 31.1481V32.6296C21.4815 33.0757 21.2473 33.5459 20.8904 33.8135C20.3494 34.2191 20 34.8648 20 35.5926V37.0741C20 37.8017 20.3493 38.4473 20.8895 38.8529C21.2467 39.1211 21.4815 39.5904 21.4815 40.037V41.5185C21.4815 42.2455 21.8301 42.8905 22.3695 43.2957C22.7269 43.5642 22.963 44.0344 22.963 44.4815V45.963C22.963 47.6288 24.433 49.1905 24.9905 50.7603C26.4378 54.8356 30.6057 57.0741 35.5556 57.0741C41.717 57.0741 46.6667 53.6059 46.6667 47.4444C46.6667 47.3345 46.6655 47.2259 46.6633 47.1186C46.6525 46.6054 46.8339 46.1024 47.1969 45.7394C47.528 45.4083 47.9772 45.2222 48.4455 45.2222H57.7778C59.0044 45.2222 60 44.2267 60 43C60 40.84 60 36.7941 60 34.1111C60 33.5215 59.7659 32.957 59.3496 32.5393C58.9319 32.123 58.3674 31.8889 57.7778 31.8889H48.2678C47.7774 31.8889 47.2902 31.8099 46.825 31.6548L44.6032 30.9145C44.0661 30.7356 43.7037 30.2329 43.7037 29.6667C43.7037 29.077 43.4696 28.5126 43.0533 28.0948C42.905 27.947 42.726 27.8222 42.5305 27.7226C42.0774 27.492 41.7626 26.8779 42.0444 26.4548C42.4993 25.7719 42.5407 24.8963 42.1541 24.1733C41.7674 23.4504 41.0148 23 40.1956 23C36.7333 23 30.8622 23 27.5822 23C26.8119 23 26.0963 23.3985 25.6919 24.0533C25.2874 24.7096 25.2504 25.5274 25.5941 26.2163ZM38.4281 28.0948C39.0259 27.4971 39.8415 27.0887 40.3102 26.3853L40.8119 25.6326C40.963 25.4059 40.9778 25.1141 40.8489 24.8726C40.72 24.6311 40.4681 24.4815 40.1956 24.4815H27.5822C27.3259 24.4815 27.0874 24.6148 26.9526 24.8326C26.8178 25.0519 26.8044 25.3244 26.92 25.5541L27.224 26.162C28.0709 27.8559 29.8022 28.9259 31.6961 28.9259H32.5926C33.8193 28.9259 34.8148 29.9215 34.8148 31.1481V32.6296C34.8148 33.5522 34.8148 34.67 34.8148 35.5926V37.0741C34.8148 37.9967 34.8148 39.1144 34.8148 40.037V41.5185C34.8148 42.4411 34.8148 43.5589 34.8148 44.4815V45.963C34.8148 47.1896 33.8193 48.1852 32.5926 48.1852H31.3751C28.4552 48.1852 26.0752 50.9694 28.1784 52.9949C29.9503 54.7012 32.6064 55.5926 35.5556 55.5926C40.8415 55.5926 45.1852 52.7304 45.1852 47.4444C45.1852 43.3526 43.4144 41.2608 42.1139 40.0927C41.5382 39.5757 40.7738 39.32 40 39.32C39.4104 39.32 38.8459 39.0859 38.4281 38.6681C38.0119 38.2519 37.7778 37.6859 37.7778 37.0978C37.7778 35.1215 37.7778 31.643 37.7778 29.6667C37.7778 29.077 38.0119 28.5126 38.4281 28.0948ZM33.3333 44.4815V45.963C33.3333 46.3719 33.0015 46.7037 32.5926 46.7037H25.1852C24.7763 46.7037 24.4444 46.3719 24.4444 45.963V44.4815C24.4444 44.0726 24.7763 43.7407 25.1852 43.7407H32.5926C33.0015 43.7407 33.3333 44.0726 33.3333 44.4815ZM47.1733 33.3319C45.4662 32.7633 43.7037 34.034 43.7037 35.8333V37.0978C43.7037 37.6859 43.4696 38.2519 43.0533 38.6681C42.9709 38.7506 42.9681 38.8869 43.0556 38.964C44.0752 39.862 45.4495 41.3013 46.173 43.7631C46.2637 44.0717 46.6559 44.1848 46.883 43.957C47.0222 43.8193 47.2104 43.7407 47.4074 43.7407H57.7778C58.1867 43.7407 58.5185 43.4089 58.5185 43V34.1111C58.5185 33.9141 58.44 33.7259 58.3022 33.5867C58.163 33.4489 57.9748 33.3704 57.7778 33.3704H47.4074C47.3274 33.3704 47.2489 33.357 47.1733 33.3319ZM33.3333 40.037V41.5185C33.3333 41.9274 33.0015 42.2593 32.5926 42.2593H23.7037C23.2948 42.2593 22.963 41.9274 22.963 41.5185V40.037C22.963 39.84 23.0415 39.6519 23.1793 39.5126C23.3185 39.3748 23.5067 39.2963 23.7037 39.2963H32.5926C33.0015 39.2963 33.3333 39.6281 33.3333 40.037ZM41.4865 28.9259C41.4831 28.9259 41.48 28.9259 41.4767 28.9259C41.3848 28.9261 39.9916 28.9288 39.963 28.9274C39.7793 28.9363 39.6059 29.0133 39.4756 29.1422C39.3378 29.2815 39.2593 29.4696 39.2593 29.6667V37.0978C39.2593 37.2933 39.3378 37.4815 39.4756 37.6207C39.6148 37.76 39.803 37.8385 40 37.8385H41.4815C41.6785 37.8385 41.8667 37.76 42.0059 37.6207C42.1437 37.4815 42.2222 37.2933 42.2222 37.0978V29.6667C42.2222 29.4696 42.1437 29.2815 42.0059 29.1422C41.8678 29.0056 41.6817 28.9273 41.4865 28.9259ZM33.3333 35.5926V37.0741C33.3333 37.483 33.0015 37.8148 32.5926 37.8148H22.2222C21.8133 37.8148 21.4815 37.483 21.4815 37.0741V35.5926C21.4815 35.1837 21.8133 34.8519 22.2222 34.8519H32.5926C33.0015 34.8519 33.3333 35.1837 33.3333 35.5926ZM32.5926 30.4074H23.7037C23.5081 30.4074 23.3185 30.4859 23.1807 30.6237C23.0415 30.763 22.963 30.9511 22.963 31.1481V32.6296C22.963 32.8267 23.0415 33.0148 23.1807 33.1541C23.3185 33.2919 23.5067 33.3704 23.7037 33.3704H32.5926C33.0015 33.3704 33.3333 33.0385 33.3333 32.6296V31.1481C33.3333 30.7393 33.0015 30.4074 32.5926 30.4074Z" fill="#CDA687"/>
                </svg>
                  <div>
                    <h3 className='sujespost'>Donate</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Every penny helps us Every penny helps us make a difference.</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                    <path d="M27.2369 47.6751L27.2369 47.6752L27.2413 47.6797L39.4043 59.9448L39.5596 60.1286L39.6927 60.2862L39.8461 60.1483L40.0372 59.9765L40.0375 59.9768L40.0456 59.9686L52.2375 47.6746L52.2376 47.6746L52.2419 47.67C53.8466 45.9453 54.7098 43.6896 54.6725 41.32C54.6352 38.9447 53.6958 36.7126 52.0272 35.0363C50.3184 33.3195 48.0451 32.3732 45.6277 32.3732C43.4523 32.3732 41.3753 33.1478 39.7368 34.5623C38.0984 33.1478 36.0213 32.3732 33.846 32.3732C31.4287 32.3732 29.1553 33.3194 27.4464 35.0363C25.7778 36.7126 24.8384 38.9447 24.8012 41.32C24.764 43.6898 25.6272 45.9454 27.2369 47.6751ZM25.651 41.3335L25.651 41.3334C25.6848 39.1792 26.536 37.1571 28.0481 35.638L28.0481 35.638C29.5971 34.0817 31.6555 33.2252 33.846 33.2252C35.9358 33.2252 37.9242 34.0136 39.4461 35.4456L39.5999 35.5902L39.7369 35.7192L39.874 35.5903L40.0277 35.4457L40.0277 35.4456C41.5497 34.0137 43.5382 33.2252 45.6279 33.2252C47.8183 33.2252 49.8769 34.0817 51.4258 35.638L51.5676 35.4969L51.4258 35.638C52.9377 37.1571 53.789 39.1792 53.8228 41.3334C53.8565 43.4819 53.075 45.5243 51.6275 47.0813L39.7368 59.0718L27.8513 47.0865C26.3987 45.5243 25.6173 43.4819 25.651 41.3335Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                    <path d="M36.9161 27.0103C36.3911 28.0135 36.4259 29.1891 37.009 30.1589C37.5921 31.1288 38.6107 31.7059 39.7374 31.7059C40.864 31.7059 41.8827 31.1288 42.4658 30.1589L42.4658 30.1589C43.049 29.1889 43.0838 28.0134 42.5589 27.0103L39.7375 21.6183L36.9161 27.0103ZM36.9161 27.0103L36.6503 26.8712L36.9161 27.0103ZM43.3651 30.7018L43.3651 30.7018C44.1383 29.4158 44.1846 27.8517 43.4887 26.5219C43.4887 26.5219 43.4887 26.5219 43.4887 26.5218L40.0033 19.8609L39.7374 19.3529L39.4716 19.8609L35.9863 26.5219L36.2521 26.6609L35.9863 26.5219C35.2905 27.8516 35.3365 29.4158 36.1098 30.7017C36.8832 31.988 38.2406 32.7578 39.7375 32.7578C41.2344 32.7578 42.5917 31.988 43.3651 30.7018Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                    <path d="M40.4916 35.9943L40.6259 36.137L40.4916 35.9943L39.7369 36.7045L38.9823 35.9944C38.9823 35.9944 38.9823 35.9944 38.9823 35.9944C37.587 34.6815 35.7626 33.9582 33.8461 33.9582C31.8373 33.9582 29.948 34.7445 28.528 36.1712C27.1419 37.5638 26.3615 39.4187 26.3306 41.3926L26.5306 41.3957L26.3306 41.3926C26.2998 43.3611 27.0159 45.2345 28.3474 46.6667L28.405 46.7325L28.4047 46.7327L28.4135 46.7415L39.5948 58.0088L39.7368 58.1519L39.8788 58.0087L51.0044 46.7931L51.0044 46.7931L51.0063 46.7912L51.1317 46.6613L51.1317 46.6613L51.1345 46.6583C52.461 45.2274 53.1742 43.3567 53.1435 41.3925C53.1124 39.4184 52.3321 37.5636 50.9459 36.1711C49.5259 34.7444 47.6367 33.9582 45.6278 33.9582C43.7114 33.9582 41.8869 34.6815 40.4916 35.9943ZM28.9707 46.0877C28.6963 45.7927 28.4518 45.4762 28.238 45.1425H35.0386V48.3772V48.5772H35.2386H37.3778V50.908V51.108H37.5778H41.6262H41.8262V50.908V48.5772H44.1453H44.3453V48.3772V45.1425H51.2362C51.0256 45.4712 50.7856 45.7829 50.5164 46.0735L50.3996 46.1945L50.3977 46.1964L39.7366 56.9438L29.0379 46.1637L28.9744 46.0917L28.9744 46.0916L28.9707 46.0877ZM38.2275 44.9426V42.6118H40.9763V44.9426V45.1426H41.1763H42.4358H43.4954V47.7253H41.1763H40.9763V47.9253V50.2561H38.2275V47.9253V47.7253H38.0275H35.8884V45.1426H37.0379H38.0275H38.2275V44.9426ZM42.4359 44.2907H41.8262V41.9599V41.7599H41.6262H37.5778H37.3778V41.9599V44.2907H37.038H35.2386H27.7757C27.3714 43.3973 27.1644 42.4165 27.1803 41.4059L27.1803 41.4059C27.2076 39.6529 27.9 38.0081 29.1295 36.7729L29.1295 36.7729C30.3896 35.5068 32.064 34.8101 33.846 34.8101C35.5461 34.8101 37.1632 35.4512 38.4006 36.6155L39.5998 37.7438L39.7369 37.8728L39.8739 37.7438L41.0731 36.6155L40.9361 36.4698L41.0732 36.6155C42.3106 35.4512 43.9277 34.8101 45.6277 34.8101C47.4097 34.8101 49.0841 35.5068 50.3441 36.7729L50.4859 36.6318L50.3442 36.7729C51.5737 38.0081 52.266 39.6529 52.2934 41.4059L52.2934 41.4059C52.3094 42.4166 52.1023 43.3976 51.6984 44.2907H44.1453H42.4359ZM26.9803 41.4028C27.0085 39.5983 27.7214 37.904 28.9877 36.6318C30.2853 35.3281 32.0107 34.6101 33.846 34.6101C35.597 34.6101 37.2631 35.2707 38.5376 36.4698L26.9803 41.4028Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                  </svg>
                  <div>
                    <h3 className='sujespost'>Support Mental Health</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Help raise awareness and support 
                    for mental health issues</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                    <path d="M27.2369 47.6751L27.2369 47.6752L27.2413 47.6797L39.4043 59.9448L39.5596 60.1286L39.6927 60.2862L39.8461 60.1483L40.0372 59.9765L40.0375 59.9768L40.0456 59.9686L52.2375 47.6746L52.2376 47.6746L52.2419 47.67C53.8466 45.9453 54.7098 43.6896 54.6725 41.32C54.6352 38.9447 53.6958 36.7126 52.0272 35.0363C50.3184 33.3195 48.0451 32.3732 45.6277 32.3732C43.4523 32.3732 41.3753 33.1478 39.7368 34.5623C38.0984 33.1478 36.0213 32.3732 33.846 32.3732C31.4287 32.3732 29.1553 33.3194 27.4464 35.0363C25.7778 36.7126 24.8384 38.9447 24.8012 41.32C24.764 43.6898 25.6272 45.9454 27.2369 47.6751ZM25.651 41.3335L25.651 41.3334C25.6848 39.1792 26.536 37.1571 28.0481 35.638L28.0481 35.638C29.5971 34.0817 31.6555 33.2252 33.846 33.2252C35.9358 33.2252 37.9242 34.0136 39.4461 35.4456L39.5999 35.5902L39.7369 35.7192L39.874 35.5903L40.0277 35.4457L40.0277 35.4456C41.5497 34.0137 43.5382 33.2252 45.6279 33.2252C47.8183 33.2252 49.8769 34.0817 51.4258 35.638L51.5676 35.4969L51.4258 35.638C52.9377 37.1571 53.789 39.1792 53.8228 41.3334C53.8565 43.4819 53.075 45.5243 51.6275 47.0813L39.7368 59.0718L27.8513 47.0865C26.3987 45.5243 25.6173 43.4819 25.651 41.3335Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                    <path d="M36.9161 27.0103C36.3911 28.0135 36.4259 29.1891 37.009 30.1589C37.5921 31.1288 38.6107 31.7059 39.7374 31.7059C40.864 31.7059 41.8827 31.1288 42.4658 30.1589L42.4658 30.1589C43.049 29.1889 43.0838 28.0134 42.5589 27.0103L39.7375 21.6183L36.9161 27.0103ZM36.9161 27.0103L36.6503 26.8712L36.9161 27.0103ZM43.3651 30.7018L43.3651 30.7018C44.1383 29.4158 44.1846 27.8517 43.4887 26.5219C43.4887 26.5219 43.4887 26.5219 43.4887 26.5218L40.0033 19.8609L39.7374 19.3529L39.4716 19.8609L35.9863 26.5219L36.2521 26.6609L35.9863 26.5219C35.2905 27.8516 35.3365 29.4158 36.1098 30.7017C36.8832 31.988 38.2406 32.7578 39.7375 32.7578C41.2344 32.7578 42.5917 31.988 43.3651 30.7018Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                    <path d="M40.4916 35.9943L40.6259 36.137L40.4916 35.9943L39.7369 36.7045L38.9823 35.9944C38.9823 35.9944 38.9823 35.9944 38.9823 35.9944C37.587 34.6815 35.7626 33.9582 33.8461 33.9582C31.8373 33.9582 29.948 34.7445 28.528 36.1712C27.1419 37.5638 26.3615 39.4187 26.3306 41.3926L26.5306 41.3957L26.3306 41.3926C26.2998 43.3611 27.0159 45.2345 28.3474 46.6667L28.405 46.7325L28.4047 46.7327L28.4135 46.7415L39.5948 58.0088L39.7368 58.1519L39.8788 58.0087L51.0044 46.7931L51.0044 46.7931L51.0063 46.7912L51.1317 46.6613L51.1317 46.6613L51.1345 46.6583C52.461 45.2274 53.1742 43.3567 53.1435 41.3925C53.1124 39.4184 52.3321 37.5636 50.9459 36.1711C49.5259 34.7444 47.6367 33.9582 45.6278 33.9582C43.7114 33.9582 41.8869 34.6815 40.4916 35.9943ZM28.9707 46.0877C28.6963 45.7927 28.4518 45.4762 28.238 45.1425H35.0386V48.3772V48.5772H35.2386H37.3778V50.908V51.108H37.5778H41.6262H41.8262V50.908V48.5772H44.1453H44.3453V48.3772V45.1425H51.2362C51.0256 45.4712 50.7856 45.7829 50.5164 46.0735L50.3996 46.1945L50.3977 46.1964L39.7366 56.9438L29.0379 46.1637L28.9744 46.0917L28.9744 46.0916L28.9707 46.0877ZM38.2275 44.9426V42.6118H40.9763V44.9426V45.1426H41.1763H42.4358H43.4954V47.7253H41.1763H40.9763V47.9253V50.2561H38.2275V47.9253V47.7253H38.0275H35.8884V45.1426H37.0379H38.0275H38.2275V44.9426ZM42.4359 44.2907H41.8262V41.9599V41.7599H41.6262H37.5778H37.3778V41.9599V44.2907H37.038H35.2386H27.7757C27.3714 43.3973 27.1644 42.4165 27.1803 41.4059L27.1803 41.4059C27.2076 39.6529 27.9 38.0081 29.1295 36.7729L29.1295 36.7729C30.3896 35.5068 32.064 34.8101 33.846 34.8101C35.5461 34.8101 37.1632 35.4512 38.4006 36.6155L39.5998 37.7438L39.7369 37.8728L39.8739 37.7438L41.0731 36.6155L40.9361 36.4698L41.0732 36.6155C42.3106 35.4512 43.9277 34.8101 45.6277 34.8101C47.4097 34.8101 49.0841 35.5068 50.3441 36.7729L50.4859 36.6318L50.3442 36.7729C51.5737 38.0081 52.266 39.6529 52.2934 41.4059L52.2934 41.4059C52.3094 42.4166 52.1023 43.3976 51.6984 44.2907H44.1453H42.4359ZM26.9803 41.4028C27.0085 39.5983 27.7214 37.904 28.9877 36.6318C30.2853 35.3281 32.0107 34.6101 33.846 34.6101C35.597 34.6101 37.2631 35.2707 38.5376 36.4698L26.9803 41.4028Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                  </svg>
                  <div>
                    <h3 className='sujespost'>Support Mental Health</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Help raise awareness and support 
                    for mental health issues</p>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='slicderesisncd rounded-[10px] lg:rounded-[16px] flex flex-col  gap-[16px] md:gap-[20px] xl:gap-[24px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] md:w-[60px] xl:w-[80px]' viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#CDA687" fill-opacity="0.1"/>
                    <path d="M27.2369 47.6751L27.2369 47.6752L27.2413 47.6797L39.4043 59.9448L39.5596 60.1286L39.6927 60.2862L39.8461 60.1483L40.0372 59.9765L40.0375 59.9768L40.0456 59.9686L52.2375 47.6746L52.2376 47.6746L52.2419 47.67C53.8466 45.9453 54.7098 43.6896 54.6725 41.32C54.6352 38.9447 53.6958 36.7126 52.0272 35.0363C50.3184 33.3195 48.0451 32.3732 45.6277 32.3732C43.4523 32.3732 41.3753 33.1478 39.7368 34.5623C38.0984 33.1478 36.0213 32.3732 33.846 32.3732C31.4287 32.3732 29.1553 33.3194 27.4464 35.0363C25.7778 36.7126 24.8384 38.9447 24.8012 41.32C24.764 43.6898 25.6272 45.9454 27.2369 47.6751ZM25.651 41.3335L25.651 41.3334C25.6848 39.1792 26.536 37.1571 28.0481 35.638L28.0481 35.638C29.5971 34.0817 31.6555 33.2252 33.846 33.2252C35.9358 33.2252 37.9242 34.0136 39.4461 35.4456L39.5999 35.5902L39.7369 35.7192L39.874 35.5903L40.0277 35.4457L40.0277 35.4456C41.5497 34.0137 43.5382 33.2252 45.6279 33.2252C47.8183 33.2252 49.8769 34.0817 51.4258 35.638L51.5676 35.4969L51.4258 35.638C52.9377 37.1571 53.789 39.1792 53.8228 41.3334C53.8565 43.4819 53.075 45.5243 51.6275 47.0813L39.7368 59.0718L27.8513 47.0865C26.3987 45.5243 25.6173 43.4819 25.651 41.3335Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                    <path d="M36.9161 27.0103C36.3911 28.0135 36.4259 29.1891 37.009 30.1589C37.5921 31.1288 38.6107 31.7059 39.7374 31.7059C40.864 31.7059 41.8827 31.1288 42.4658 30.1589L42.4658 30.1589C43.049 29.1889 43.0838 28.0134 42.5589 27.0103L39.7375 21.6183L36.9161 27.0103ZM36.9161 27.0103L36.6503 26.8712L36.9161 27.0103ZM43.3651 30.7018L43.3651 30.7018C44.1383 29.4158 44.1846 27.8517 43.4887 26.5219C43.4887 26.5219 43.4887 26.5219 43.4887 26.5218L40.0033 19.8609L39.7374 19.3529L39.4716 19.8609L35.9863 26.5219L36.2521 26.6609L35.9863 26.5219C35.2905 27.8516 35.3365 29.4158 36.1098 30.7017C36.8832 31.988 38.2406 32.7578 39.7375 32.7578C41.2344 32.7578 42.5917 31.988 43.3651 30.7018Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.6"/>
                    <path d="M40.4916 35.9943L40.6259 36.137L40.4916 35.9943L39.7369 36.7045L38.9823 35.9944C38.9823 35.9944 38.9823 35.9944 38.9823 35.9944C37.587 34.6815 35.7626 33.9582 33.8461 33.9582C31.8373 33.9582 29.948 34.7445 28.528 36.1712C27.1419 37.5638 26.3615 39.4187 26.3306 41.3926L26.5306 41.3957L26.3306 41.3926C26.2998 43.3611 27.0159 45.2345 28.3474 46.6667L28.405 46.7325L28.4047 46.7327L28.4135 46.7415L39.5948 58.0088L39.7368 58.1519L39.8788 58.0087L51.0044 46.7931L51.0044 46.7931L51.0063 46.7912L51.1317 46.6613L51.1317 46.6613L51.1345 46.6583C52.461 45.2274 53.1742 43.3567 53.1435 41.3925C53.1124 39.4184 52.3321 37.5636 50.9459 36.1711C49.5259 34.7444 47.6367 33.9582 45.6278 33.9582C43.7114 33.9582 41.8869 34.6815 40.4916 35.9943ZM28.9707 46.0877C28.6963 45.7927 28.4518 45.4762 28.238 45.1425H35.0386V48.3772V48.5772H35.2386H37.3778V50.908V51.108H37.5778H41.6262H41.8262V50.908V48.5772H44.1453H44.3453V48.3772V45.1425H51.2362C51.0256 45.4712 50.7856 45.7829 50.5164 46.0735L50.3996 46.1945L50.3977 46.1964L39.7366 56.9438L29.0379 46.1637L28.9744 46.0917L28.9744 46.0916L28.9707 46.0877ZM38.2275 44.9426V42.6118H40.9763V44.9426V45.1426H41.1763H42.4358H43.4954V47.7253H41.1763H40.9763V47.9253V50.2561H38.2275V47.9253V47.7253H38.0275H35.8884V45.1426H37.0379H38.0275H38.2275V44.9426ZM42.4359 44.2907H41.8262V41.9599V41.7599H41.6262H37.5778H37.3778V41.9599V44.2907H37.038H35.2386H27.7757C27.3714 43.3973 27.1644 42.4165 27.1803 41.4059L27.1803 41.4059C27.2076 39.6529 27.9 38.0081 29.1295 36.7729L29.1295 36.7729C30.3896 35.5068 32.064 34.8101 33.846 34.8101C35.5461 34.8101 37.1632 35.4512 38.4006 36.6155L39.5998 37.7438L39.7369 37.8728L39.8739 37.7438L41.0731 36.6155L40.9361 36.4698L41.0732 36.6155C42.3106 35.4512 43.9277 34.8101 45.6277 34.8101C47.4097 34.8101 49.0841 35.5068 50.3441 36.7729L50.4859 36.6318L50.3442 36.7729C51.5737 38.0081 52.266 39.6529 52.2934 41.4059L52.2934 41.4059C52.3094 42.4166 52.1023 43.3976 51.6984 44.2907H44.1453H42.4359ZM26.9803 41.4028C27.0085 39.5983 27.7214 37.904 28.9877 36.6318C30.2853 35.3281 32.0107 34.6101 33.846 34.6101C35.597 34.6101 37.2631 35.2707 38.5376 36.4698L26.9803 41.4028Z" fill="#CDA687" stroke="#CDA687" stroke-width="0.4"/>
                  </svg>
                  <div>
                    <h3 className='sujespost'>Support Mental Health</h3>
                    <p className='helpoingsr mt-[8px] lg:mt-[12px]'>Help raise awareness and support 
                    for mental health issues</p>
                  </div>
                  </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[96px] !bg-[#FAF7F6] feature'>
              <div className='flex justify-between md:flex-row flex-col md:gap-[0] gap-[20px] mb-[16px] md:mb-[22px] xl:mb-[32px]'>
                <div className='flex-1 '>
                  
                  <h2 className='hussainaid mt-[20px]'>How You can help us!</h2>
                  <p className='unisportaws'>Your support can make a real difference! By joining our charity program, you can help provide essential resources to those in need.</p>
                </div>
                <div className='flex-1 gap-[14px] sm:gap-[18px] lg:gap-[24px] flex md:justify-end'>
                  <div>
                  <button className='seeall text-[13px] md:text-[15px] xl:text-[18px] px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[11px] sm:py-[12] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] rounded-[8px] lg:rounded-[12px] text-center'>See All</button></div>
                  
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[16px] md:gap-[22px] xl:gap-[32px]'>
                <div className='relative group'>
                  <div className='absolute top-0 left-0 bg-[#00000080] w-full h-full z-[2] rounded-[16px] group-hover:block hidden'></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] absolute top-1/2 left-1/2 z-[3] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:block hidden" viewBox="0 0 22 18" fill="none">
                  <path d="M12.9336 1.16014L19.4809 7.65277C20.2541 8.41954 20.2594 9.67953 19.4926 10.4527L13 17" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect y="8" width="20" height="2" rx="1" fill="#FAF7F6"/>
                </svg>
                  <Image className='w-full h-auto' src={image11} alt=''/>
                  <h3 className='refunadisn absolute bottom-[16px] md:bottom-[20px] xl:bottom-[24px] left-[16px] md:left-[20px] xl:left-[24px] z-[1]'>Refugees and Internally Displaced Persons (IDPs)</h3>
                </div>
                <div className='relative group'>
                <div className='absolute top-0 left-0 bg-[#00000080] w-full h-full z-[2] rounded-[16px] group-hover:block hidden'></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] absolute top-1/2 left-1/2 z-[3] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:block hidden" viewBox="0 0 22 18" fill="none">
                  <path d="M12.9336 1.16014L19.4809 7.65277C20.2541 8.41954 20.2594 9.67953 19.4926 10.4527L13 17" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect y="8" width="20" height="2" rx="1" fill="#FAF7F6"/>
                </svg>
                  <Image className='w-full h-auto' src={image12} alt=''/>
                  <h3 className='refunadisn absolute bottom-[16px] md:bottom-[20px] xl:bottom-[24px] left-[16px] md:left-[20px] xl:left-[24px] z-[1]'>Orphans and Vulnerable Children.</h3>
                </div>
                <div className='relative group'>
                <div className='absolute top-0 left-0 bg-[#00000080] w-full h-full z-[2] rounded-[16px] group-hover:block hidden'></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] absolute top-1/2 left-1/2 z-[3] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:block hidden" viewBox="0 0 22 18" fill="none">
                  <path d="M12.9336 1.16014L19.4809 7.65277C20.2541 8.41954 20.2594 9.67953 19.4926 10.4527L13 17" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect y="8" width="20" height="2" rx="1" fill="#FAF7F6"/>
                </svg>
                  <Image className='w-full h-auto' src={image13} alt=''/>
                  <h3 className='refunadisn absolute bottom-[16px] md:bottom-[20px] xl:bottom-[24px] left-[16px] md:left-[20px] xl:left-[24px] z-[1]'>Disadvantaged Peoples</h3>
                </div>
                <div className='relative group'>
                <div className='absolute top-0 left-0 bg-[#00000080] w-full h-full z-[2] rounded-[16px] group-hover:block hidden'></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] absolute top-1/2 left-1/2 z-[3] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:block hidden" viewBox="0 0 22 18" fill="none">
                  <path d="M12.9336 1.16014L19.4809 7.65277C20.2541 8.41954 20.2594 9.67953 19.4926 10.4527L13 17" stroke="#FAF7F6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect y="8" width="20" height="2" rx="1" fill="#FAF7F6"/>
                </svg>
                  <Image className='w-full h-auto' src={image14} alt=''/>
                  <h3 className='refunadisn absolute bottom-[16px] md:bottom-[20px] xl:bottom-[24px] left-[16px] md:left-[20px] xl:left-[24px] z-[1]'>Providing schooling in underserved Areas</h3>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Page2;