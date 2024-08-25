import React, { useState } from 'react';
import Cspm from './Cspm';
import { TfiReload } from "react-icons/tfi";
import { FaClock } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Cwpp from './Cwpp';
import Sidebar from './Sidebar';
import RegistryScan from './RegistryScan'
import TicketScan from './TicketScan';

function Body() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenSidebar = () => {
    setIsVisible(true);
  };

  const handleCloseSidebar = () => {
    setIsVisible(false);
  };

  return (
    <>   
      <div className={isVisible ? 'h-full sw-full bg-zinc-200 pt-32 pb-8 bg-opacity-15' : 'h-full sw-full bg-zinc-400 pt-32 pb-8'}>
      <div className='flex justify-between items-center mr-4 ml-4'>
        <div>
          <h1 className='text-black font-bold'>CNAPP Dashboard</h1>
        </div>
       
        <div className='flex items-center justify-center gap-4'>
          <button className='p-2 border-2 border-zinc-200 flex bg-white text-sm' onClick={handleOpenSidebar}>Add Widget +</button>
          <button className='p-2 border-2 border-zinc-200 flex bg-white'>
            <TfiReload />
          </button>
          <button className='p-2 border-2 border-zinc-200 flex bg-white'>
            <HiOutlineDotsVertical />
          </button>
          <button className='p-2 border-2 border-purple-600 flex items-center gap-2 bg-white'>
            <FaClock className='text-blue-600'/>
            <h2 className='text-blue-600'>Last 2 days</h2>
            <IoIosArrowDown className='text-blue-600' />
          </button>
        </div>
      </div>
      
      <Cspm/>
      <Cwpp/>
      <RegistryScan/>
      <TicketScan/>
      <Sidebar isVisible={isVisible} onClose={handleCloseSidebar} />
    </div>
    </>

  )
}

export default Body;
