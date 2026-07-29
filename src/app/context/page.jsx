"use client";

import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

const TimelineContext = ({ children }) => {
    const [timelinelist, setTimelinelist] = useState([]);

    return (
        <div>
            <TimeContext.Provider
                value={{ timelinelist, setTimelinelist }}
            >
                {children}
            </TimeContext.Provider>
        </div>
    );
};

export default TimelineContext;