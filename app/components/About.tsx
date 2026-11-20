import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

const About = ({ isDarkMode }: { isDarkMode?: boolean }) => {
  return (
    <div id='about' className='w-11/12 px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
        </h4>
        <h2 className='text-center text-5xl font-Ovo'>
       About Me
        </h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-10 mt-10'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='profile' className='rounded-3xl w-full'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w -2xl font-Ovo'> I am a passionate software engineer and web developer with expertise in React.js, Next.js, and Node.js. I specialize in building dynamic and responsive web applications
        that deliver exceptional user experiences. With a strong foundation in front-end and back-end 
        development, I am dedicated to creating innovative solutions that meet the needs of clients and users alike.
                </p>

                <ul className='grid grid-cols-auto sm:grid-cols-3 gap-6 max-w'>
                    {infoList.map(({icon, iconDark, title, description}, index) =>(  
                        <li 
                        className='border border-gray-300 p-4 rounded-lg cursor-pointer
                         hover:bg-green-200 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-lime-300' key={index} >
                            <Image src={isDarkMode? iconDark:icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h3 className='my-6 text-gray-700 fotn-Ovo dark:text-white'> Techlogies I Use</h3>
                <ul className='flex items-center gap-3 sm:gap-5'> 
                    {toolsData.map((tool, index) => (
                        <li key={index} 
                        className='flex items-center justify-center gap-3 w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                        hover:bg-lightHover hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='tool' className='w-6'/>
                        </li>
                    ))}
                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About