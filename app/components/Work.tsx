import { workData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'


const Work = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (

    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        
        
         <h4 className='text-center mb-2 text-lg font-Ovo'> My Portafolio </h4>
        <h2 className='text-center text-5xl font-Ovo'> My Latest Work </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            welcome to my portafolio, these are my projects showcasing my expertise and experience.
        </p>

        <div className='grid grid-cols-auto my-10 gap-5'>
        {workData.map((project, index)=>(
            <div key={index} 
            className='aspect-square bg-no-repear bg-cover bg-center rounded-lg relative cursor-pointer group' 
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-9/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex 
                items-center justify-between duration-500 group-hover:bottom-7'>
                    <div className='min-w-0'>
                        <h2 className='text-sm font-semibold whitespace-nowrap'>{project.title}</h2>
                        <p className='text-xs text-gray-700 whitespace-nowrap'>{project.description}</p>
                    </div>    
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow[2px_2px_0_#000] group-hover:bg-lime-300'>
                    <Image src={assets.send_icon} alt='send icon' className='w-5'/>

                 </div>                                     
                </div> 
            </div>
          ))}
         </div>
         <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700
          border-[0.5px] border-gray-700 rounded-full py-3 px-10 z-10 mx-auto my-20 hover:bg-lightHover
           duration-500 dark:bg-slate-50 dark:hover:bg-emerald-950 dark:hover:text-white'>
            Show More <Image src={assets.right_arrow_bold} alt='' className='w-4'></Image>
         </a>
    </div>
  )
}

export default Work