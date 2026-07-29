"use client";

import React, { useContext, useState } from 'react';
import CallButton from './contactcallbtn/page';
import { TimeContext } from '@/app/context/page';
import VideoButton from './contactvideobtn/page';
import TextButton from './contacttextbtn/page';

const ButtonStatePage = ({ id }) => {
    // const [timelinelist, setTimelinelist] = useState([]);
    const { timelinelist, setTimelinelist } = useContext(TimeContext)
    console.log("this is timelinelist of usestate ", timelinelist)
    return (
        <div className="flex  text-center gap-11 my-5 mx-auto ">
            <CallButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></CallButton>
            <TextButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></TextButton>
            <VideoButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></VideoButton>
        </div>
    );
};

export default ButtonStatePage;