import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BannerPage = () => {
    return (

        <div className="hero bg-base-200 my-20 max-w-3xl mx-auto">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6 text-xl font-normal text-[#64748B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-[#244D3F]"><FaPlus /> Add a Friend</button>
                </div>
            </div>

        </div>

    );
};

export default BannerPage;