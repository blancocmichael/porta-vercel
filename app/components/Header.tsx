import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'


const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (

    <div id='header' className='w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-28 pb-10 flex flex-col justify-center items-center gap-4'>    
            <div> 
          <Image src={assets.profile_img} alt="profile image" className='w-32 h-32 rounded-full'/>
          </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"> 
             Hi! I&apos;m Michael Blanco Chavez <Image src={assets.hand_icon} alt="wave hand" className='w-6 h-6'/>
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-Ovo'>
                Software Engineer | Web Developer | React.js | Next.js | Node.js
            </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a passionate software engineer and web developer with expertise in React.js, Next.js, and Node.js. I specialize in building dynamic and responsive web applications
                 that deliver exceptional user experiences. With a strong foundation in front-end and back-end 
                 development, I am dedicated to creating innovative solutions that meet the needs of clients and users alike.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
                                                <a
                                    href="#contact"
                                    className="flex items-center gap-3 px-10 py-2.5 border border-gray-500
                                    rounded-md ml-4 text-white bg-black font-Ovo dark:bg-emerald-950 dark:border-white"
                                  >
                                    Contact
                                    <Image
                                      src={assets.right_arrow_white}
                                      className="w-3"
                                      alt="Contact Icon"
                                    />
                                  </a>

                 <a href="/sample" download 
                 className='flex items-center gap-3 px-10 py-2.5 border
                  border-gray-500 rounded-md ml-4  font-Ovo dark:bg-white dark:text-black'>My Resume
                 <Image src={assets.download_icon} className='w-3' alt="Download Icon"/>
                </a>
            </div>

    </div>
  )
}

export default Header