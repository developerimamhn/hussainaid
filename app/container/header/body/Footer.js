'use client'


import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import logo from '../Image/logo.png';

const Footer = () => {
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
            <div className='bg-[#0A0806] px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] pt-[24px] sm:pt-[30px] md:pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[96px]'>
                <div className='grid grid-cols-12 gap-[30px] mb-[15px] md:mb-[20px] xl:mb-[24px]'>
                    <div className='col-span-6 sm:col-span-4 feature'>
                        <Image className='rounded-[6px] lg:rounded-[8px] w-[50px] md:w-[70px] xl:w-[94px]' src={logo} alt=""/>
                        <p className='lastpadding mt-[10px]'>Thank you for supporting our mission. Follow us on social <br className='2xl:block hidden'/> media, subscribe to our newsletter, and stay updated on <br className='2xl:block hidden'/> how we're making a difference together.</p>
                        <div className='flex items-center gap-[14px] lg:gap-[20px] mt-[16px] md:mt-[26px] xl:mt-[32px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[26px] lg:w-[32px] ' viewBox="0 0 40 40" fill="none">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FAF7F6" fill-opacity="0.07" stroke="#FAF7F6"/>
                            <path d="M21.6265 30V20.8771H24.8428L25.3243 17.3217H21.6264V15.0517C21.6264 14.0223 21.9266 13.3209 23.4771 13.3209L25.4545 13.32V10.1401C25.1125 10.0968 23.9386 10 22.5731 10C19.7219 10 17.77 11.6569 17.77 14.6997V17.3217H14.5454V20.8771H17.77V29.9999H21.6265V30Z" fill="#FAF7F6"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[26px] lg:w-[32px] ' viewBox="0 0 40 40" fill="none">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FAF7F6" fill-opacity="0.07" stroke="#FAF7F6"/>
                            <path d="M23.3634 11.8904V11.8868H24.3012L24.6438 11.9552C24.8723 11.9997 25.0797 12.0579 25.266 12.1299C25.4524 12.202 25.6327 12.286 25.807 12.3821C25.9814 12.4781 26.1395 12.576 26.2814 12.6756C26.422 12.7741 26.5483 12.8785 26.6601 12.989C26.7707 13.1006 26.9432 13.1294 27.1776 13.0754C27.4121 13.0214 27.6646 12.9463 27.9351 12.8503C28.2056 12.7543 28.4731 12.6462 28.7376 12.5261C29.0021 12.4061 29.1632 12.3298 29.2209 12.2974C29.2774 12.2638 29.3075 12.2458 29.3111 12.2434L29.3147 12.238L29.3327 12.229L29.3508 12.22L29.3688 12.211L29.3868 12.202L29.3904 12.1966L29.3959 12.193L29.4013 12.1894L29.4049 12.184L29.4229 12.1786L29.4409 12.1749L29.4373 12.202L29.4319 12.229L29.4229 12.256L29.4139 12.283L29.4049 12.301L29.3959 12.319L29.3868 12.346C29.3808 12.364 29.3748 12.3881 29.3688 12.4181C29.3628 12.4481 29.3057 12.5681 29.1975 12.7783C29.0893 12.9884 28.954 13.2015 28.7917 13.4176C28.6294 13.6337 28.4839 13.797 28.3553 13.9074C28.2254 14.0191 28.1395 14.0971 28.0974 14.1416C28.0553 14.1872 28.0042 14.2292 27.9441 14.2676L27.8539 14.3271L27.8359 14.3361L27.8179 14.3451L27.8143 14.3505L27.8088 14.3541L27.8034 14.3577L27.7998 14.3631L27.7818 14.3721L27.7638 14.3811L27.7602 14.3865L27.7547 14.3901L27.7493 14.3937L27.7457 14.3991L27.7421 14.4045L27.7367 14.4081L27.7313 14.4117L27.7277 14.4171H27.8179L28.3228 14.3091C28.6595 14.237 28.9811 14.15 29.2876 14.0479L29.7746 13.8858L29.8287 13.8678L29.8557 13.8588L29.8738 13.8498L29.8918 13.8408L29.9098 13.8318L29.9279 13.8228L29.9639 13.8174L30 13.8138V13.8498L29.991 13.8534L29.982 13.8588L29.9784 13.8642L29.9729 13.8678L29.9675 13.8714L29.9639 13.8768L29.9603 13.8822L29.9549 13.8858L29.9495 13.8894L29.9459 13.8948L29.9423 13.9002L29.9369 13.9038L29.9279 13.9219L29.9188 13.9399L29.9134 13.9435C29.911 13.9471 29.8347 14.0491 29.6844 14.2496C29.5341 14.4513 29.453 14.5534 29.4409 14.5558C29.4289 14.5594 29.4121 14.5774 29.3904 14.6098C29.37 14.6434 29.2426 14.7773 29.0081 15.0114C28.7737 15.2455 28.5441 15.4538 28.3192 15.6363C28.0932 15.82 27.979 16.0458 27.9766 16.3135C27.973 16.58 27.9591 16.8814 27.9351 17.2176C27.911 17.5537 27.866 17.9169 27.7998 18.3071C27.7337 18.6973 27.6315 19.1386 27.4932 19.6308C27.355 20.1231 27.1867 20.6033 26.9883 21.0716C26.7899 21.5398 26.5825 21.96 26.3661 22.3322C26.1497 22.7044 25.9513 23.0196 25.771 23.2777C25.5906 23.5358 25.4073 23.779 25.2209 24.0071C25.0346 24.2352 24.7989 24.4921 24.514 24.7779C24.2278 25.0624 24.0716 25.2185 24.0451 25.2461C24.0175 25.2725 23.8996 25.371 23.6916 25.5415C23.4848 25.7132 23.2624 25.8848 23.0243 26.0565C22.7875 26.227 22.5699 26.3693 22.3715 26.4834C22.1731 26.5974 21.9339 26.7277 21.6537 26.8742C21.3748 27.0219 21.073 27.1587 20.7484 27.2848C20.4238 27.4109 20.0812 27.5279 19.7205 27.636C19.3598 27.744 19.0111 27.8281 18.6745 27.8881C18.3379 27.9481 17.9561 27.9992 17.5293 28.0412L16.8891 28.1042V28.1132H15.7169V28.1042L15.5636 28.0952C15.4614 28.0892 15.3772 28.0832 15.3111 28.0772C15.245 28.0712 14.9955 28.0382 14.5627 27.9781C14.1298 27.9181 13.7902 27.8581 13.5437 27.7981C13.2973 27.738 12.9306 27.624 12.4436 27.4559C11.9567 27.2878 11.5401 27.1179 11.1939 26.9462C10.8488 26.7757 10.6324 26.6677 10.5446 26.622C10.4581 26.5776 10.3607 26.5224 10.2525 26.4564L10.0902 26.3573L10.0866 26.3519L10.0812 26.3483L10.0757 26.3447L10.0721 26.3393L10.0541 26.3303L10.0361 26.3213L10.0325 26.3159L10.0271 26.3123L10.0216 26.3087L10.018 26.3033L10.0144 26.2979L10.009 26.2943H10V26.2583L10.018 26.2619L10.0361 26.2673L10.1172 26.2763C10.1713 26.2823 10.3186 26.2913 10.5591 26.3033C10.7995 26.3153 11.055 26.3153 11.3255 26.3033C11.596 26.2913 11.8726 26.2643 12.1551 26.2222C12.4376 26.1802 12.7713 26.1082 13.156 26.0061C13.5407 25.9041 13.8942 25.7828 14.2164 25.6423C14.5374 25.5007 14.7659 25.395 14.9017 25.3254C15.0364 25.2569 15.242 25.1297 15.5185 24.9436L15.9333 24.6644L15.9369 24.659L15.9423 24.6554L15.9477 24.6518L15.9513 24.6464L15.9549 24.641L15.9603 24.6374L15.9658 24.6338L15.9693 24.6284L15.9874 24.623L16.0054 24.6194L16.009 24.6014L16.0144 24.5834L16.0199 24.5798L16.0234 24.5744L15.8792 24.5654C15.783 24.5594 15.6898 24.5534 15.5996 24.5474C15.5095 24.5414 15.3682 24.5144 15.1758 24.4663C14.9835 24.4183 14.7761 24.3463 14.5537 24.2502C14.3312 24.1542 14.1148 24.0401 13.9044 23.908C13.694 23.776 13.5419 23.6661 13.4482 23.5785C13.3556 23.492 13.2353 23.3696 13.0875 23.2111C12.9408 23.0514 12.8133 22.8875 12.7051 22.7194C12.5969 22.5513 12.4935 22.3574 12.395 22.1377L12.2453 21.8099L12.2362 21.7829L12.2272 21.7559L12.2218 21.7379L12.2182 21.7199L12.2453 21.7235L12.2723 21.7289L12.4707 21.7559C12.603 21.7739 12.8104 21.7799 13.0929 21.7739C13.3754 21.7679 13.5708 21.7559 13.679 21.7379C13.7872 21.7199 13.8533 21.7079 13.8774 21.7019L13.9134 21.6929L13.9585 21.6839L14.0036 21.6749L14.0072 21.6695L14.0126 21.6659L14.0181 21.6623L14.0216 21.6569L13.9856 21.6479L13.9495 21.6389L13.9134 21.6299L13.8774 21.6208L13.8413 21.6118C13.8173 21.6058 13.7752 21.5938 13.7151 21.5758C13.655 21.5578 13.4926 21.4918 13.2281 21.3777C12.9636 21.2637 12.7532 21.1526 12.5969 21.0445C12.4402 20.9362 12.2908 20.8177 12.1497 20.6898C12.009 20.5601 11.8545 20.3932 11.6862 20.1891C11.5179 19.985 11.3676 19.7479 11.2353 19.4777C11.1031 19.2076 11.0039 18.9495 10.9378 18.7033C10.8719 18.4586 10.8285 18.2085 10.808 17.9559L10.7755 17.5778L10.7935 17.5814L10.8115 17.5868L10.8296 17.5958L10.8476 17.6048L10.8656 17.6138L10.8837 17.6228L11.1632 17.7488C11.3496 17.8329 11.581 17.9049 11.8575 17.965C12.1341 18.025 12.2994 18.058 12.3535 18.064L12.4346 18.073H12.5969L12.5933 18.0676L12.5879 18.064L12.5825 18.0604L12.5789 18.055L12.5753 18.0496L12.5699 18.046L12.5645 18.0424L12.5609 18.037L12.5428 18.028L12.5248 18.019L12.5212 18.0136L12.5158 18.01L12.5104 18.0064L12.5068 18.001L12.4887 17.992L12.4707 17.983L12.4671 17.9776C12.4635 17.9751 12.4118 17.9367 12.312 17.8623C12.2134 17.7867 12.11 17.6888 12.0018 17.5687C11.8936 17.4487 11.7854 17.3226 11.6772 17.1906C11.5688 17.0582 11.4722 16.9166 11.3886 16.7673C11.3045 16.6173 11.2155 16.4263 11.1217 16.1946C11.0292 15.9641 10.9588 15.7318 10.9107 15.4977C10.8627 15.2636 10.8356 15.0324 10.8296 14.8043C10.8236 14.5762 10.8296 14.3811 10.8476 14.219C10.8656 14.0569 10.9017 13.8738 10.9558 13.6697C11.0099 13.4656 11.0881 13.2495 11.1903 13.0214L11.3436 12.6792L11.3526 12.6522L11.3616 12.6252L11.367 12.6216L11.3706 12.6162L11.3742 12.6108L11.3796 12.6072L11.385 12.6108L11.3886 12.6162L11.3922 12.6216L11.3977 12.6252L11.4031 12.6288L11.4067 12.6342L11.4103 12.6396L11.4157 12.6432L11.4247 12.6612L11.4337 12.6792L11.4392 12.6828L11.4427 12.6882L11.6862 12.9584C11.8485 13.1384 12.0409 13.3396 12.2633 13.5617C12.4857 13.7838 12.609 13.899 12.633 13.9074C12.6571 13.917 12.6871 13.9447 12.7232 13.9903C12.7592 14.0347 12.8795 14.141 13.0839 14.3091C13.2883 14.4771 13.5558 14.6722 13.8864 14.8944C14.217 15.1165 14.5837 15.3356 14.9865 15.5517C15.3893 15.7678 15.8221 15.9629 16.2849 16.137C16.7478 16.3111 17.0724 16.4252 17.2588 16.4792C17.4452 16.5332 17.7638 16.6022 18.2146 16.6863C18.6655 16.7703 19.0051 16.8244 19.2335 16.8484C19.462 16.8724 19.6183 16.8862 19.7024 16.8898L19.8287 16.8934L19.8251 16.8664L19.8197 16.8394L19.7836 16.6143C19.7595 16.4642 19.7475 16.2541 19.7475 15.9839C19.7475 15.7138 19.7686 15.4647 19.8106 15.2365C19.8527 15.0084 19.9159 14.7773 20 14.5432C20.0842 14.3091 20.1665 14.1211 20.2471 13.9795C20.3288 13.839 20.4358 13.6787 20.5681 13.4986C20.7003 13.3185 20.8717 13.1325 21.0821 12.9403C21.2925 12.7482 21.5329 12.5772 21.8034 12.4271C22.0739 12.277 22.3234 12.1629 22.5518 12.0849C22.7803 12.0069 22.9727 11.9558 23.1289 11.9318C23.2852 11.9078 23.3634 11.894 23.3634 11.8904Z" fill="#FAF7F6"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[26px] lg:w-[32px] ' viewBox="0 0 40 40" fill="none">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FAF7F6" fill-opacity="0.07" stroke="#FAF7F6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C10 16.0054 10 14.0081 10.9519 12.5695C11.3769 11.9271 11.9271 11.3769 12.5695 10.9519C14.0081 10 16.0054 10 20 10C23.9946 10 25.9919 10 27.4305 10.9519C28.0729 11.3769 28.6231 11.9271 29.0481 12.5695C30 14.0081 30 16.0054 30 20C30 23.9946 30 25.9919 29.0481 27.4305C28.6231 28.0729 28.0729 28.6231 27.4305 29.0481C25.9919 30 23.9946 30 20 30C16.0054 30 14.0081 30 12.5695 29.0481C11.9271 28.6231 11.3769 28.0729 10.9519 27.4305C10 25.9919 10 23.9946 10 20ZM25.1769 20.0003C25.1769 22.8595 22.8591 25.1774 19.9998 25.1774C17.1406 25.1774 14.8227 22.8595 14.8227 20.0003C14.8227 17.141 17.1406 14.8231 19.9998 14.8231C22.8591 14.8231 25.1769 17.141 25.1769 20.0003ZM19.9998 23.4258C21.8917 23.4258 23.4254 21.8921 23.4254 20.0003C23.4254 18.1084 21.8917 16.5747 19.9998 16.5747C18.1079 16.5747 16.5743 18.1084 16.5743 20.0003C16.5743 21.8921 18.1079 23.4258 19.9998 23.4258ZM25.3814 15.7795C26.0533 15.7795 26.5979 15.2349 26.5979 14.563C26.5979 13.8912 26.0533 13.3466 25.3814 13.3466C24.7096 13.3466 24.1649 13.8912 24.1649 14.563C24.1649 15.2349 24.7096 15.7795 25.3814 15.7795Z" fill="#FAF7F6"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[26px] lg:w-[32px]' viewBox="0 0 40 40" fill="none">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FAF7F6" fill-opacity="0.07" stroke="#FAF7F6"/>
                            <path d="M10 12.6888C10 12.0474 10.2252 11.5183 10.6757 11.1015C11.1261 10.6846 11.7117 10.4762 12.4324 10.4762C13.1403 10.4762 13.713 10.6814 14.1506 11.0919C14.601 11.5152 14.8263 12.0667 14.8263 12.7465C14.8263 13.3622 14.6075 13.8752 14.1699 14.2857C13.7194 14.709 13.1274 14.9206 12.3938 14.9206H12.3745C11.6667 14.9206 11.094 14.709 10.6564 14.2857C10.2188 13.8624 10 13.3301 10 12.6888ZM10.251 29.5238V16.6715H14.5367V29.5238H10.251ZM16.9112 29.5238H21.1969V22.3473C21.1969 21.8983 21.2484 21.552 21.3514 21.3083C21.5315 20.8722 21.805 20.5034 22.1718 20.202C22.5386 19.9006 22.9987 19.7499 23.5521 19.7499C24.9936 19.7499 25.7143 20.7183 25.7143 22.6551V29.5238H30V22.1549C30 20.2565 29.5496 18.8167 28.6486 17.8355C27.7477 16.8543 26.5573 16.3636 25.0772 16.3636C23.417 16.3636 22.1236 17.0755 21.1969 18.4993V18.5378H21.1776L21.1969 18.4993V16.6715H16.9112C16.9369 17.0819 16.9498 18.3582 16.9498 20.5002C16.9498 22.6423 16.9369 25.6501 16.9112 29.5238Z" fill="#FAF7F6"/>
                            </svg>
                        </div>
                    </div>
                    <div className='col-span-6 sm:col-span-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-center gap-[30px]'>
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[20px] xl:mb-[24px] feature'>Campaigns</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Medical kits and hygiene kits</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Shelter</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Emergency Relief Projects</li>
                            <li className='meedicalkitslist feature '>Education</li>
                        </ul>
                    </div>
                    
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[20px] xl:mb-[24px] opacity-0 select-none '>.</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Livelihood</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Women and Welfare</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Food Banks</li>
                            <li className='meedicalkitslist '>UK Program</li>
                        </ul>
                    </div>
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[20px] xl:mb-[24px] feature'>Where We Serve</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Zakat Calculate</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Ramadan Relief Fund</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Money Goes Calculator</li>
                            <li className='meedicalkitslist '>Impact Simulator</li>
                        </ul>
                    </div>
                    <div className='col-span-2 flex sm:justify-centercenter'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[20px] xl:mb-[24px] feature'>About Us </li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Project Impact</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Volunteer</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Emergency Response</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex justify-between items-center py-[16px] md:py-[18px] xl:py-[20px] border-t-[1px] border-[#232221]'>
                    <div className='flex items-center gap-[12px] md:gap-[16px] xl:gap-[20px]'>
                        <p className='privacypolicy'>Privacy Policy</p>
                        <p className='privacypolicy'>.</p>
                        <p className='privacypolicy'>Terms and Conditions</p>
                    </div>
                    <div>
                        <p className='privacypolicy'>© Husain Aid Surving Humanity LTD, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;