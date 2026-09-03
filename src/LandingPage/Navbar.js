import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "Find Jobs",
      link: "/find-jobs",
    },
    {
      id: 2,
      label: "Freelance",
      link: "/freelance",
    },
    {
      id: 3,
      label: "Services",
      link: "/services",
    },
    {
      id: 4,
      label: "For Employer",
      link: "/for-employer",
    },
    {
      id: 5,
      label: "Blog",
      link: "/blog",
    },
  ];
  return (
    <>
      <div className="fixed top-0 h-12.5 md:h-17  w-screen flex border-[#D9E1E7] border-b-[0.62px] shadow-[0px_6px_20px_-8px_#003F641F,0px_1px_2px_0px_#003F640F] items-center bg-[#ffffff]">
        {/*logo*/}
        <div className="flex h-fit gap-2.5 ml-3.5 md:ml-6">
          <img
            src="./logo.png"
            alt="logo"
            className="h-6 md:h-7 w-[43.73px] md:w-[58.73px]"
          />
          <img
            src="./textLogo.png"
            alt="text logo"
            className="h-[19.99px] md:h-[23.99px] w-[80.47px] md:w-[104.47px]"
          />
        </div>
        {/*links*/}
        <ul className="flex h-fit gap-10 ml-16 font-inter text-sm text-[#5E6A76]">
          {links.map((item) => (
            <Link key={item.id} href={item.link}>
              <li className="transition-transform duration-200 ease-in-out hover:scale-110">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        {/*credetial links and buttons*/}
        <div className="flex font-inter text-sm ml-120 text-[#101C28] items-center gap-4">
          <Link
            href="/log-in"
            className="transition-transform duration-200 ease-in-out hover:scale-110"
          >
            Log In
          </Link>
          <Link href="/sing-up">
            <button className="py-2 px-4 border-[#D9E1E7] border rounded-2xl transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
              Sing Up
            </button>
          </Link>
          <Link href="#">
            <button className="py-2 px-4 border-[#D9E1E7] border rounded-2xl text-white bg-[linear-gradient(135deg,#D77C2D_0%,#D46F28_100%)] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
              Post a Job
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
