import React from 'react';

const BannerPageStats = () => {
    return (
        <div className="flex  text-center gap-11 my-5 mx-auto">
            <div className="p-8  lg:w-[200px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff] ">

                <div className="font-semibold text-4xl mb-7">10</div>

                <div className="stat-title text-[#64748B]">Total Friends</div>

            </div>
            <div className="p-8  lg:w-[200px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff]">

                <div className="font-semibold text-4xl mb-7">3</div>

                <div className="stat-title text-[#64748B]">On Track</div>

            </div>
            <div className="p-8  lg:w-[200px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff]">

                <div className="font-semibold text-4xl mb-7">6</div>

                <div className="stat-title text-[#64748B]">Need Attention</div>

            </div>
            <div className="p-8  lg:w-[200px] text-center bg-[#fff] rounded-2xl border border-solid border-[#fff]">

                <div className="font-semibold text-4xl mb-7">12</div>

                <div className="stat-title text-[#64748B]">Interactions This Month</div>

            </div>

     
        </div>
    );
};

export default BannerPageStats;