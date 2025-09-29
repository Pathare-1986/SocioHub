import React from "react";
import { assets } from "../assets/assets";
import { Star } from "lucide-react";

const login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/*  Backgroun Image  */}
      <img
        src={assets.bgImage}
        alt="background image"
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
      />

      {/* left side : Branding */}
      <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40">
        <img src={assets.logo} alt="logo" className="h-12 object-contain" />
        <div>
          <div>
            <img
              src={assets.group_users}
              alt="group_userImage"
              className="h-8 md:h-10"
            />
            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 md:size-4.5 text-transparent fill-amber-500"
                    />
                  ))}
              </div>
              <p>Used by 12K+ developers</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent">
            More than just friends truly connect
          </h1>
          <p className="text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md">Connect with global community on SocioHub</p>
        </div>
        <span className="md:h-10"></span>
      </div>

      {/* Right side Login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
                      
      </div>

    </div>
  );
};

export default login;
