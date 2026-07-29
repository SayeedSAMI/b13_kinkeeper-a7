'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { TimeContext } from '@/app/context/page';

// import logoimage from '../../../public/assets/icon/call.png';
// import logoimage from '';

const TimelinePage = () => {
    const { timelinelist } = useContext(TimeContext)


    return (
        <div className='lg:w-260 md:w-180 mx-auto my-20'>
            <h1 className="text-5xl font-bold">Timeline</h1>

            {
                timelinelist.map((data, idx) => (
                    <div key={idx} className='mx-auto lg:w-250 md:w-187.5  flex flex-row gap-4.5 items-center p-4 bg-[#fff] border border-solid border-base-300 rounded-2xl my-6'>
                        <div className='text-center items-center'><Image src={data.image} alt='Logo' width={30} height={30}></Image></div>
                        <div >
                            <h1 className='text-2xl font-medium text-[#244D3F]'>{data.contacttype} <span className='text-[#64748B] text-[18px] font-normal'>with {data.name}</span></h1>
                            <p className='text-[#64748B] text-[16px] font-normal'>{data.date.toDateString()}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default TimelinePage;