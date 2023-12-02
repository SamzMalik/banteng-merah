import React from 'react'
import { portofolio } from '@/data/portofolioData'
import { FaAndroid, FaAppStore } from "react-icons/fa6";
import { Image } from '@nextui-org/react';



const DynamicRoute = ({params: {portofolioId}} : any) => {
  const matchingPortofolio = portofolio.find(item => item.id == portofolioId)
  console.log(matchingPortofolio)
  return (
    <main className='w-full h-screen bg-primary-black'>
      <div className='container mx-auto flex w-full h-screen items-center justify-around flex-col lg:flex-row p-3'>
        <div className='text-primary-white flex flex-col gap-4 lg:order-1 order-2 p-2 max-w-xl'>
          <h1 className='text-4xl lg:text-6xl font-bold'>{matchingPortofolio?.name}</h1>
          <p className='text-xl lg:text-3xl'>{matchingPortofolio?.headline}</p>
          <div className='flex gap-4'>
            <div className='flex bg-slate-600 rounded-md p-2 items-center gap-2'>
              <FaAndroid />
              <p>Download</p>
            </div>
            <div className='flex bg-slate-600 rounded-md p-2 items-center gap-2'>
              <FaAppStore   />
              <p>Download</p>
            </div>
          </div>
        </div>
        <Image className='w-72 lg:w-96 order-1 lg:order-2' src={matchingPortofolio?.imageSrc} />
      </div>
    </main>
  )
}

export default DynamicRoute 