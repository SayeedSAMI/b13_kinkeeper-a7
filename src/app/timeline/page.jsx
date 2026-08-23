'use client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { TimeContext } from '@/app/context/page';

// import logoimage from '../../../public/assets/icon/call.png';
// import logoimage from '';
// export const metadata = {
//   title: "Timeline",
//   description: "Place to connect with friends again",
// };


const TimelinePage = () => {
    const { timelinelist } = useContext(TimeContext)

    const [sorttype, setSorttype] = useState('all');

    const filterdata = sorttype === 'all' ? timelinelist : sorttype === 'By Date' ? timelinelist.sort((a, b) => a.date.toDateString() - b.date.toDateString()) : timelinelist.filter((data) => data.contacttype === sorttype)

    // const sortedData = timelinelist;
    // console.log("sorted data -> ",sortedData)
    // useEffect(() => {
    //     if (sorttype === 'text') {
    //         timelinelist.filter((data, idx) => {
    //             data.contacttype === 'Text'
    //         })

    //     } else if (sorttype === 'video') {
    //         timelinelist.filter((data, idx) => {
    //             data.contacttype === 'Video'
    //         })
    //     } else if (sorttype === 'call') {
    //         timelinelist.filter((data, idx) => {
    //             data.contacttype === 'Call'
    //         })
    //     } else if (sorttype === 'meetup') {
    //         timelinelist.filter((data, idx) => {
    //             data.contacttype === 'Meetup'
    //         })
    //     }
    // }, [timelinelist, sorttype]);

    // console.log("sorted data after sorting",sortedData);
    return (
        <div className='lg:w-260 md:w-180 mx-auto my-20'>
            <h1 className="text-5xl font-bold">Timeline</h1>

            {/* sorting timline dropdown button */}
            < select onChange={(e) => setSorttype(e.target.value)} defaultValue="Pick a color" className="select appearance-none my-6 text-[#64748B] font-normal text-[18px]">
                <option disabled={true}>Filter timeline</option>
                <option value="all">All</option>
                <option value="Text" >Sort by Text</option>
                <option value="Video" >Sort by Video</option>
                <option value="Meetup" >Sort by Meetup</option>
                <option value='By Date'>Sort by Date</option>
            </select>

            {
                (filterdata.length !== 0) ?
                    filterdata.map((data, idx) => (
                        <div key={idx} className='mx-auto lg:w-250 md:w-187.5  flex flex-row gap-4.5 items-center p-4 bg-[#fff] border border-solid border-base-300 rounded-2xl my-6'>
                            <div className='text-center items-center'><Image src={data.image} alt='Logo' width={30} height={30}></Image></div>
                            <div >
                                <h1 className='text-2xl font-medium text-[#244D3F]'>{data.contacttype} <span className='text-[#64748B] text-[18px] font-normal'>with {data.name}</span></h1>
                                <p className='text-[#64748B] text-[16px] font-normal'>{data.date.toDateString()}</p>
                            </div>
                        </div>
                    )) :
                    < div className='mx-auto h-96 lg:w-250 md:w-187.5  flex flex-row gap-4.5 items-center p-4 bg-[#ececec] border border-solid border-base-300 rounded-2xl my-6'>
                        <h1 className='mx-auto text-4xl font-bold text-[#12543e]'>No Contact Done</h1>
                    </div>




            }
        </div >
    );
};

export default TimelinePage;