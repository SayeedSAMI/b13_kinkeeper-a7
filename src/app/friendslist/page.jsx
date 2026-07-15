import React from 'react';
import dataset from '../data/friends.json';
import Image from 'next/image';
import Link from 'next/link';

const HomePageFriendList = async () => {

    // console.log(dataset);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-12 mx-auto' >
            {
                dataset.map((data) => (
                    <Link key={data.id} href={`/friendslist/${data.id}`}>
                        <div className='bg-[#fff] w-[300px] p-7 border border-solid border-[#fff] rounded-2xl space-y-1 text-center justify-center mx-auto items-center' >

                            <Image className='text-center justify-center mx-auto items-center' width={150} height={150} src={data.picture} alt={data.name}></Image>
                            <h1 className='text-2xl font-semibold text-[#1F2937] text-center justify-center mx-auto items-center'>{data.name}</h1>
                            <p className='text-[12px] font-normal text-[#1F2937] text-center justify-center mx-auto items-center'>{data.days_since_contact}d ago</p>
                            <div className='flex gap-3 text-center justify-center mx-auto items-center'>
                                {
                                    data.tags.map((t, idx) => <div key={idx} className="badge h-6 badge-success block  text-center justify-center  items-center">{t}</div>)
                                }
                            </div>
                            <div className={`badge rounded-2xl mx-auto block  text-center justify-center  items-center  ${data.status === 'on-track' ? "bg-green-800 text-white" : data.status === "almost due" ? "bg-yellow-500 text-white" : data.status === "overdue" ? "bg-red-600 text-white" : ""}`}>{data.status}</div>
                        </div>
                    </Link>

                ))
            }
        </div >
    );
};

export default HomePageFriendList;