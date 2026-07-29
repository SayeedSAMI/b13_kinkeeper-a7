"use client";

import React, { useContext, useState } from 'react';
import CallButton from './frienddetailsbutton/page';
import {TimeContext} from '@/app/context/page';

const ButtonStatePage = ({ id }) => {
    // const [timelinelist, setTimelinelist] = useState([]);
    const {timelinelist, setTimelinelist} = useContext(TimeContext)
    console.log("this is timelinelist of usestate ",timelinelist)
    return (
        <div>
            <CallButton id={id} timelinelist={timelinelist} setTimelinelist={setTimelinelist}></CallButton>
        </div>
    );
};

export default ButtonStatePage;