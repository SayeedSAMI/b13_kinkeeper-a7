"use client"
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fa] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#1f2937]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-[#1f2937]">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Sorry, we couldnt find the page your looking for.
        </p>
     
          <Link   className="btn mt-6 px-5 py-2 bg-[#1f5748] text-white text-sm rounded-md hover:bg-[#174536] transition" href='/'>Back to Home</Link>
      </div>
    </div>
  );
};



export default ErrorPage;