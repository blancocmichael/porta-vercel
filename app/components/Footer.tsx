import React from 'react'
import Image from 'next/image'
import { assets} from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div>

            <Image src={assets.logo} alt='' className='w-46 mx-auto mb-2'/>

        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>

            <Image src={assets.mail_icon} alt='' className='w-6 mx-auto'/>
            blancomichael22@icloud.com

        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>c 2026 Michael Blanco. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href='https://github.com/blancocmichael'> Github
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/blancocmichael'> Github
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/blancocmichael'> Github
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer