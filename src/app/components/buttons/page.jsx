"use client";

import React, { useContext, useState } from 'react';
import CallButton from './contactcallbtn/page';
import { TimeContext } from '@/app/context/page';
import VideoButton from './contactvideobtn/page';
import TextButton from './contacttextbtn/page';
import { ToastContainer, toast } from 'react-toastify';

const ButtonStatePage = ({ id }) => {
    // const [timelinelist, setTimelinelist] = useState([]);
    // const notify = () => toast(`Meetup with ${timelinelist.} `);
    const { timelinelist, setTimelinelist } = useContext(TimeContext)
    console.log("this is timelinelist of usestate ", timelinelist)
    // console.log('timelin context', TimeContext);
    return (
        <div className="flex  text-center gap-11 my-5 mx-auto ">
            <CallButton   id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></CallButton>
            <TextButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></TextButton>
            <VideoButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></VideoButton>
        </div>
    );
};

export default ButtonStatePage;