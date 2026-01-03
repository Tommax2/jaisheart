import React from "react";
import { styles } from "../styles";
import logo from "../../public/logo.jpeg";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full py-10 bg-primary border-t border-[#232631]`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold">
              Jaiscolorflow
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 
            <p className="text-secondary text-[14px] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="text-white font-semibold">Email:</span> jaistechworld@gmail.com
            </p>
            <p className="text-secondary text-[14px] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-white font-semibold">Phone:</span> 09067956488
            </p>
            <p className="text-secondary text-[14px] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-white font-semibold">Location:</span> Nigeria
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-5">
            <a href="#" className="text-secondary hover:text-white transition-colors text-[14px]">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary hover:text-white transition-colors text-[14px]">
              Terms of Service
            </a>
          </div>
          <p className="text-secondary text-[14px] text-center md:text-right">
            © {new Date().getFullYear()} Jaiscolorflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
