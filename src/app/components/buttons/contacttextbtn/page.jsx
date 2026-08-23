"use client";
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import dataset from '../../../data/friends.json'
import { BsChatText } from 'react-icons/bs'; import { ToastContainer, toast } from 'react-toastify';

const TextButton = ({ id, timelinelist, setTimelinelist, }) => {
    const friend = dataset.find(item => item.id == id);
    const notify = () => toast(`Text with ${friend.name}`);
    const handleAddtoTimeline = () => {
        setTimelinelist(prev => [...prev, {
            name: friend.name,
            date: new Date(),
            contacttype: 'Text',
            image: '/assets/icon/text.png',
        },
        ]);
    }


    return (
        <div onClick={() => { handleAddtoTimeline(); notify(); }} className="btn h-25 p-8  flex flex-col lg:w-62.5 gap-5 text-center bg-[#f8fafc] rounded-2xl border border-solid border-[#fff] shadow">
            <ToastContainer />
            <div className="font-semibold text-4xl mx-18"><BsChatText /></div>

            <div className="stat-title text-[#64748B]">Text</div>

        </div>

    );
};

export default TextButton;