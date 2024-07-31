import React from 'react';
import Button from '../ui/Button';
import image from "../../assets/img/image.png";
import profile from "../../assets/img/profile.png";
import { FaStar } from "react-icons/fa";

function Hero() {
  return (
    <div className='flex items-center flex-col'>
        <div className=" max-w-[750px] text-center">
            <h1 className='font-extrabold text-[64px]'>Make your dream 
            business goal come true</h1>
            <p className='text-xl opacity-40 mt-6'>when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal</p>
            <Button className="mt-8 border bg-[#377DFF] text-white transition-all duration-50 ease-in-out font-bold hover:bg-white hover:text-[#377DFF] border-[#377DFF]" text="Start Project"/>
        </div>
        <div className="py-16 relative">
          <img className='' src={image} width={739} height={501} />
          <div className="bg-white py-4 px-5 absolute top-20 -left-28 w-fit rounded-2xl shadow-lg flex flex-col gap-2">
            <p className='flex text-xs gap-1 items-center'>
            <FaStar size={24} className='text-[#F8BD38]'/>
            <p className='text-[12px] text-[#1D1D1D] font-bold'>GREAT PROJECT</p>
            </p>
            <h1 className=''>800+ Done</h1>
          </div>
          <div className="px-5 rounded-2xl py-6 absolute bottom-16 -right-24 bg-white shadow-lg w-fit flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="">
                <img src={profile} width={32} height={32} />
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className='font-semibold text-[10px]'>Bill Gates</h1>
                <p className='font-semibold text-[6px]'>CEO UpTech</p>
              </div>
            </div>
            <p className='text-[12px] w-[130px] text-[#1D1D1D]'>“ This team is really the best in its field, I don&apos;t regret working
              with them, and will come back again thanks “</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;