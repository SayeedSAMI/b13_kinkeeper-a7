"use client";
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import dataset from '../../../data/friends.json'

const CallButton = ({ id,timelinelist, setTimelinelist, }) => {

    const friend = dataset.find(item => item.id == id);

    const handleAddtoTimeline = () => {
        setTimelinelist(prev => [...prev, friend.name]);
    }


    return (
        <div onClick={() => handleAddtoTimeline()} className="btn h-25 p-8 flex flex-col lg:w-[250px] gap-5 text-center bg-[#f8fafc]  align-middle justify-center rounded-2xl border border-solid border-[#fff] shadow">

            <div className="flex font-semibold text-4xl mx-18"><IoCallOutline /></div>

            <div className="stat-title text-[#64748B]">Call</div>

        </div>
    );
};

export default CallButton;