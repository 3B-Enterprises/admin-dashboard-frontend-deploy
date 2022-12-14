import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import {CiLogout} from 'react-icons/ci'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex flex-col max-h-full bg-white w-[200px] h-full fixed">
      <div className="flex-1">
        <Link to="/dash">
          <img src="https://cdn.discordapp.com/attachments/885708262211739669/1051861560756293782/WhatsApp_Image_2022-12-12_at_9.01.07_AM-removebg-preview.png" className="mx-auto min-w-[10px] min-h-[10px] mt-4 px-10 h-32"/>
        </Link>
      </div>
      
      <div className="flex-col-reverse">
        <Link to="/">
          <CiLogout className="mx-auto min-w-[20px] min-h-[20px] mb-4" />
        </Link>
      </div>
    </nav>
  );
}
