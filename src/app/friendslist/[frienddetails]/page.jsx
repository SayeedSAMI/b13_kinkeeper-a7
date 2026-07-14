import React from 'react';
import dataset from '../../data/friends.json'
import Image from 'next/image';
import Link from 'next/link';
import { TbAlarmSnooze } from 'react-icons/tb';
import { IoArchiveOutline, IoCallOutline, IoVideocamSharp } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { BsChatText } from 'react-icons/bs';


const FriendListDetails = async ({ params }) => {
    const { frienddetails } = await params

    // [0].bio

    const data = dataset.find(d => d.id == frienddetails)
    // const data = await res.json();
    console.log(frienddetails);
    console.log(data);
    return (
        <div className='mx-55 gap-10 my-20 flex'>
            <div className='flex flex-col gap-4'>
                <div className='bg-[#fff] w-[300px] p-7 border border-solid border-[#fff] rounded-2xl space-y-1 text-center justify-center items-center shadow' >

                    <Image className='text-center justify-center mx-auto items-center' width={80} height={80} src={data.picture} alt={data.name}></Image>
                    <h1 className='text-2xl font-semibold text-[#1F2937] text-center justify-center mx-auto items-center'>{data.name}</h1>
                    <p className='text-[12px] font-normal text-[#1F2937] text-center justify-center mx-auto items-center'>{data.days_since_contact}d ago</p>
                    <div className='flex gap-3 text-center justify-center mx-auto items-center'>
                        {
                            data.tags.map((t, idx) => <div key={idx} className="badge h-6 badge-success block  text-center justify-center  items-center">{t}</div>)
                        }
                    </div>
                    <div className={`badge rounded-2xl mx-auto block  text-center justify-center  items-center  ${data.status === 'on-track' ? "bg-green-800 text-white" : data.status === "almost due" ? "bg-yellow-500 text-white" : data.status === "overdue" ? "bg-red-600 text-white" : ""}`}>{data.status}</div>
                    <p className='text-[12px] font-normal text-[#64748B] text-center justify-center mx-auto items-center'>{data.bio}d ago</p>
                    <p className='text-[12px] font-normal text-[#64748B] text-center justify-center mx-auto items-center'>Preferred: {data.email}d ago</p>

                </div>
                <button className='btn w-75 text-[#1F2937] text-[16px] font-medium rounded-2xl shadow border-none bg-white border-white '><TbAlarmSnooze /> Snooze 2 weeks</button>
                <button className='btn w-75 text-[#1F2937] text-[16px] font-medium rounded-2xl shadow border-none bg-white border-white '><IoArchiveOutline /> Archive</button>
                <button className='btn w-75 text-red-500 text-[16px] font-medium rounded-2xl shadow border-none bg-white border-white '><MdDeleteOutline /> Delete</button>
            </div>
            <div>
                <div className="flex  text-center gap-11 my-5 mx-auto ">
                    <div className="p-8  lg:w-[250px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff] shadow">

                        <div className="font-semibold text-4xl mb-7">{data.days_since_contact}</div>

                        <div className="stat-title text-[#64748B]">Days Since Contact</div>

                    </div>
                    <div className="p-8  lg:w-[250px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff] shadow">

                        <div className="font-semibold text-4xl mb-7">{data.goal}</div>

                        <div className="stat-title text-[#64748B]">Goal (Days)</div>

                    </div>
                    <div className="p-8  lg:w-[250px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff] shadow">

                        <div className="font-semibold text-4xl mb-7">{data.next_due_date}</div>

                        <div className="stat-title text-[#64748B]">Next Due</div>

                    </div>


                </div>

                <div className='border border-solid border-[#fff] rounded-2xl p-6  flex flex-col gap-4 shadow my-7'>
                    <div className='flex gap-150'>
                        <h1 className='text-[#244D3F] text-[18px] font-medium text-2xl'>Relationship Goal</h1>
                        <button className='btn w-9 h-7 '>Edit</button>
                    </div>
                    <p className='font-bold text-[18px]'><span className='text-[#64748B] font-normal '>Connect Every</span> 30 days</p>
                </div>


                <div className='border border-solid border-[#fff] rounded-2xl p-6  flex flex-col gap-4 shadow'>
                    <h1 className='text-[#244D3F] text-[18px] font-medium text-2xl'>Quick Check-In</h1>
                    <div className="flex  text-center gap-11 my-5 mx-auto ">
                        <div className="btn h-25 p-8 flex flex-col lg:w-[250px] gap-5 text-center bg-[#f8fafc]  align-middle justify-center rounded-2xl border border-solid border-[#fff] shadow">

                            <div className="flex font-semibold text-4xl mx-18"><IoCallOutline /></div>

                            <div className="stat-title text-[#64748B]">Call</div>

                        </div>
                        <div className="btn h-25 p-8  flex flex-col lg:w-[250px] gap-5 text-center bg-[#f8fafc] rounded-2xl border border-solid border-[#fff] shadow">

                            <div className="font-semibold text-4xl mx-18"><BsChatText /></div>

                            <div className="stat-title text-[#64748B]">Text</div>

                        </div>
                        <div className="btn h-25 p-8 flex flex-col lg:w-[250px] gap-5 text-center bg-[#f8fafc] rounded-2xl border border-solid border-[#fff] shadow">

                            <div className="font-semibold text-4xl mx-18 "><IoVideocamSharp /></div>

                            <div className="stat-title text-[#64748B]">Video</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendListDetails;  