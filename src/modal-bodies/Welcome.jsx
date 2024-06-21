import React from "react";

export default function Welcome() {
  return (
    <div className="w-full flex flex-col  p-4  h-full">
      <h2 className=" text-2xl  semibold underline">My Portfolio</h2>
      <p className="mt-3 leading-relaxed">
        Welcome to my interative portfolio! Navigate the apps to find out about
        me, my projects, my skills and more. Also, don't forget to test out the
        various widgets across the portfolio.
      </p>
      <h5 className="mt-5 underline text-sm">NOTICE</h5>
      <p className="mt-2 text-sm">
        This is not a real desktop nor a cloud machine. Please do not enter any
        of your sensitive personal information on this website.
      </p>
    </div>
  );
}
