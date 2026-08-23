'use client';

import React, { useContext, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import { TimeContext } from '../context/page';


// const data02 = [
//     { name: 'A1', value: 100 },
//     { name: 'A2', value: 300 },
//     { name: 'B1', value: 100 },
//     { name: 'B2', value: 80 },
//     { name: 'B3', value: 40 },
//     { name: 'B4', value: 30 },
//     { name: 'B5', value: 50 },
//     { name: 'C1', value: 100 },
//     { name: 'C2', value: 200 },
//     { name: 'D1', value: 150 },
//     { name: 'D2', value: 50 },
// ];

export const metadata = {
  title: "Status",
  description: "Place to connect with friends again",
};



const StatusPage = () => {

    const { timelinelist } = useContext(TimeContext)

    const callcount = timelinelist.filter(d => d.contacttype === 'Meetup').length;
    const textcount = timelinelist.filter(d => d.contacttype === 'Text').length;
    const videocount = timelinelist.filter(d => d.contacttype === 'Video').length;

    const data02 = [
        { name: 'Call', value: callcount, fill: '#244d3f' },
        { name: 'Text', value: textcount, fill: '#7f37f5' },
        { name: 'Video', value: videocount, fill: '#37a163' },

    ];

    return (
        <div className='p-30'>
            <h1 className='mx-auto text-4xl font-bold mb-9 text-[#12543e]'>By Interaction Type</h1>

            <div className='flex justify-center p-7 m-6'>
                <PieChart
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '400px',
                        maxHeight: '95vh',
                        aspectRatio: 1,
                        paddingBottom:'50px',
                    }}
                    responsive
                >
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="80%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        paddingAngle='6'
                        fill="#82ca9d"
                        
                        
                        isAnimationActive={true}
                    />

                    <Tooltip />
                     <Legend />
                   
                    {/* <RechartsDevtools /> */}
                </PieChart>
            </div>
        </div>
    );
};

export default StatusPage;