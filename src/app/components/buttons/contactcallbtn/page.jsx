"use client";
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import dataset from '../../../data/friends.json'
import { ToastContainer, toast } from 'react-toastify';
const CallButton = ({ id, timelinelist, setTimelinelist, }) => {

    const friend = dataset.find(item => item.id == id);

    const notify = () => toast(`Meetup with ${friend.name}`);
   

    const handleAddtoTimeline = () => {
        setTimelinelist(prev => [...prev, {
            name: friend.name,
            date: new Date(),
            contacttype: 'Meetup',
            image: '/assets/icon/call.png',

        },
        ]);
    }


    return (
        <div onClick={() => { handleAddtoTimeline(); notify(); }} className="btn h-25 p-8 flex flex-col lg:w-62.5 gap-5 text-center bg-[#f8fafc]  align-middle justify-center rounded-2xl border border-solid border-[#fff] shadow">
            <ToastContainer />
            <div className="flex font-semibold text-4xl mx-18"><IoCallOutline /></div>

            <div className="stat-title text-[#64748B]">Call</div>

        </div>
    );
};

export default CallButton;