'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = ({isDarkMode}) => {

const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "dec9827a-f473-42cd-85de-a40ecea20804");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url"/footer_bg_color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' >

    <h4 className='text-center mb-2 text-lg font-Ovo'> Connect with me </h4>
        <h2 className='text-center text-5xl font-Ovo'> Get in touch </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a full stack developer with Digital Solution to real world problems. 
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8 dark:text-black'>
                <input type="text" placeholder='Enter your Name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                <input type='email' placeholder='Enter your Email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
            </div>
            <textarea rows={6} placeholder='Enter Your Message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:text-black' name='message'/> 
            <button type='submit' 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
            text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-emerald-950 dark:hover:bg-white dark:hover:text-black'> 
            Submit Now <Image src={assets.right_arrow_bold} alt='' className='w-4'/> </button>

            <p>
                {result}
            </p>
        </form>

    </div>
  )
}

export default Contact